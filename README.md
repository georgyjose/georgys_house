# Georgy Residence — Switchboards

An interactive, static web page showing the house plan with toggleable layers, and a
click-through schedule for every switchboard.

No build step, no dependencies, no framework. Plain HTML, CSS and JavaScript.

**Source drawings** — all Rev 8, 17 January 2026, Sourorja Electricals:

| Sheet | Gives |
|---|---|
| Switch Board Position | board positions and their schedules (from the DWG) |
| Module Box Count | board → room → module count, and the GI box tally |
| Equipment Position and Control Wiring | lights, fans, sockets, switch symbols, control wiring, provision notes |

---

## Deploying to GitHub Pages

1. Push these files to a repository with `index.html` at the root.

   ```bash
   git init
   git add .
   git commit -m "House switchboard plan"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<repo>.git
   git push -u origin main
   ```

2. **Settings → Pages → Build and deployment.** Pick one — they are mutually exclusive:

   - **Deploy from a branch** → `main`, `/ (root)`. Simplest. The site has no build
     step, so there is nothing for a workflow to do. If you choose this, **delete
     `.github/workflows/deploy.yml`** — it will only fail.
   - **GitHub Actions** → keep `.github/workflows/deploy.yml` and let it run.

3. The site appears at `https://<your-username>.github.io/<repo>/`.

`.nojekyll` is included so GitHub serves the folder as-is on the branch path.

### If the workflow fails with "Get Pages site failed … Not Found"

That error means the repo's Pages source is **not** set to *GitHub Actions* — the
workflow is trying to deploy to a Pages site that does not exist yet. Either switch the
source to *GitHub Actions* in Settings, or let the workflow create it: the bundled
workflow passes `enablement: true` to `actions/configure-pages`, which does exactly that
on the first run.

The *"Node 20 is being deprecated"* line in the same log is a separate, harmless warning
from older action versions — it is not what failed the run. The bundled workflow pins
`configure-pages@v5`, `upload-pages-artifact@v5` and `deploy-pages@v5`, which run on
Node 24.

> On a free GitHub account, Pages only serves from a **public** repository — the plan
> and its URL are publicly reachable. To keep it private, deploy the same folder to
> Cloudflare Pages from a private repo and put Cloudflare Access in front. No file
> changes needed.

Previewing locally: open `index.html` directly — everything is plain `<script>` files,
so it works from disk. Or `python3 -m http.server 8000`.

---

## What's in it

```
index.html
.github/workflows/
  deploy.yml           optional — only for the "GitHub Actions" Pages source
assets/
  css/app.css          styling, light + dark
  data/config.js       who may edit (see below)
  js/app.js            pan/zoom, layers, panel, search
  js/editor.js         the switch-arrangement editor
  data/plan-svg.js     the floor plan as one inline SVG
  data/boards.js       69 boards: position, room, schedule  (generated — don't hand-edit)
  data/layouts.js      your switch arrangements  (edited in the app, committed by you)
```

### Layers

The DWG's own CAD layers carry through, so these are real distinctions, not guesses:

| Layer | Source CAD layer |
|---|---|
| Architecture | `PDF_UNDERLAY PEN 01`, `PDF_FP-FNDN`, `PDF_Narrow` |
| Furniture & joinery | `PDF_FURNITURE PEN 02`, `PDF_JOINERY PEN 02` |
| Sanitary | `PDF_SANITARY PEN 02` |
| Landscape | `PDF_SSA Landscap` |
| Fixtures | `PDF8_ELECTRICAL FIXTURE` |
| Switches & boards | `PDF_ELECTRICAL SWITCH` |
| Room labels | `PDF_Text` |
| Setting-out dimensions | `PDF_ELECTRICAL DIMENSION`, `PDF_ELECTRICAL WIRE` |
| Lights, fans & sockets | Equipment sheet — symbols, `L1`–`L9` codes, CCTV, `EV`, `D B` |
| Switch symbols | Equipment sheet — 6A / 16A / two-way / 32A DP arrows, chandeliers, wall fans |
| Control wiring | Equipment sheet — which switch drives which fixture |
| Provisions & notes | Equipment sheet — gate, pathway, garden, solar, EV, TV and pump notes |

### The equipment layers

The switch-board sheet marks boards and their schedules only. Everything else — the light,
fan and socket symbols, the switch-type arrows, the control wiring and the provision notes
— lives on the *Equipment Position and Control Wiring* sheet.

**How it's fitted.** Both sheets label the same boards, so the registration is solved on
exact correspondences rather than by shape matching: a least-squares similarity from the
**63 board IDs** that appear on both sheets, then a translation nudge that puts the
equipment sheet's switch symbols on top of the switch-board sheet's. Fitting to walls was
tried first and is *not* used — wall matching found a plausible-looking local minimum that
was off by about 1.8° of rotation, which is invisible at the centre of the plan and
obvious at its edges.

The check that matters is that the equipment sheet's switch symbols land on the board
markers, and they do.

All layers are now Rev 8, so nothing here is a revision behind.

Toggling adds `off-<layer>` to `<body>`; the CSS does the rest.
Coordinates are the drawing's own, viewBox `0 0 2532.2 2033.4`.

### Board data

Each board in `assets/data/boards.js`:

```js
{
  "id": "S16",
  "room": "Master Bedroom",
  "x": 812.3, "y": 1602.1,        // position on the plan — don't change
  "plate": 8,                      // 8M plate
  "devices": [                     // straight from the drawing's schedule table
    { "t": "ONE WAY",    "q": "3", "label": "6A one-way switch", "kind": "light" },
    { "t": "TWO WAY(M)", "q": "1", "label": "Two-way switch (master)", "kind": "light" },
    { "t": "MASTER",     "q": "1", "label": "Master switch", "kind": "light" },
    { "t": "5/15A",      "q": "1", "label": "5/15A socket", "kind": "socket" }
  ],
  "hfl": { "cm": "60", "approx": false },   // mounting height above floor
  "layout": { … }                            // optional, from Figma
}
```

`kind` picks the colour: `light`, `fan`, `socket`, `socket-switch`, `heavy`, `data`.

**Coverage:** 69 boards marked on the plan, 67 with a schedule, 63 in the module-box table.

`room` comes from the module-box table where the board appears there — that's the
electrician's own naming, not a guess from position. The six that aren't listed
(`S1A`, `S2BB`, `S8A`, `S16A`, `S25A`, `S32A`) get a room from their position and are
flagged in the panel; the table folds them into its *AC – 4 numbers* and
*Wall fan – 5 numbers* rows instead of naming them.

**Cross-check.** Module counts were derived twice, independently: parsed from the schedule
tables on the switch-board sheet, and read from the module-box table. **62 of 63 agree.**
The one exception is `S3C` — the switch-board sheet carries *two* tables labelled S3C (3M
and 9M), while the module-box table says 9M. The app flags it on that board and in the ⓘ
panel. Worth resolving with Sourorja.

`S3A` and `S20C` are marked on the plan but have no schedule table.

The ⓘ panel also carries the **GI box tally** — 76 boxes across 7 sizes — straight from the
module-box sheet, so it can be ordered without re-counting.

## Arranging the switches

### Editing is off on the published site

`assets/data/config.js` decides who may edit:

```js
window.HOUSE_CONFIG = { editing: 'local' };
```

| Value | Effect |
|---|---|
| `'local'` | **default** — editable only when served from your own machine |
| `false` | never; the editor never loads |
| `true` | always — do **not** commit this, it would enable editing on Pages |

`'local'` means `file://`, `localhost`, `127.0.0.1`, `::1`, a `*.local` host, or a private
LAN address. A `github.io` URL is none of those, so the published site is read-only: the
pencil button, the progress bar and the export/import controls are removed from the page
entirely, and `editor.js` returns before wiring anything up. Local-storage edits are not
read either, so nothing of yours can leak into a published view.

The published site still *shows* every arrangement committed in `layouts.js` — read-only
means read-only, not empty.

### Using the editor

The CAD schedule says *what is on* a board. It doesn't say the order, or what each switch
controls. The **pencil button** in the top bar turns on the editor for that.

Open a board and you get its modules pre-seeded from the CAD schedule — three `ONE WAY`
entries become three separate switch modules, in a sensible default order. For each one you
set a name, a type (switch / fan / socket / high load / data / blank), a width in modules,
and an optional flag. Reorder by dragging a row or with the ↑ ↓ buttons. **+ Add module**
covers anything the drawing is short of; **Reset to drawing** puts a board back.

Above the list, a running total shows your modules against the plate size on the drawing
(`8M / 8M on drawing`), and turns orange when they disagree.

**The patterns repeat.** Only 28 distinct device signatures cover all 67 boards — `S8`,
`S15`, `S25` and `S33` are the same board in four different bedrooms. When a board shares
its device list with others, the editor says so and offers **Copy this arrangement to N
boards**. Boards whose signature already matches one of the Figma layouts come pre-filled,
flagged with where the names came from.

Progress shows in the sidebar; an arranged board gets a green tag.

### Saving your work

Edits go to this browser's local storage immediately — nothing to press. They are *your*
copy, on *this* machine.

To publish them, click **Export boards**. You get a `layouts.js`; drop it over
`assets/data/layouts.js` and commit. The app loads that file first and treats local storage
as your unpublished changes on top, so anyone opening the site sees the committed
arrangements. **Import** reads an exported file back in.

`boards.js` is generated from the DWG and gets overwritten whenever a new revision lands.
`layouts.js` is yours and survives that — which is why the two are separate files.

### The Figma layouts

The CAD schedule says *what is on* a board. It doesn't say the left-to-right order, or
what each switch controls. That comes from the *Georgy's House | Switch Boards* Figma
board, and is attached to four boards where the device lists agree:

| Board | Layout | Why it matches |
|---|---|---|
| S11 | Main Switch Board | 2 one-way + 2 two-way + AC at 135cm |
| S15 | Bedside switch (away from door) | exact device match; HFL 60cm is bedside height |
| S16 | Bedside switch (near door) | only board in the room with a MASTER switch, at 60cm |
| S14A | Dressing Table | 3 one-way + socket at 125cm in the Dress area |

Three Figma layouts have **no Rev 8 equivalent** — *Above Table*, *Outside of Bathroom*,
*Inside of Bathroom*. Rev 8 shows a single master-bathroom board (S13) rather than an
outside/inside pair. Either the Figma sketches predate Rev 8, or the drawing is missing
something. The ⓘ button in the app lists this.

To attach a layout to another board, move the `layout` block onto that board's entry.

### Regenerating from a newer DWG

The two scripts that produced `assets/data/` are kept for reference in the conversation:
`build.py` converts the DXF into `plan_rev8.svg` + `boards_rev8.json`, and `gen_data.py`
merges that with the Figma layouts. The DWG was converted with
`dwg2dxf` from [LibreDWG](https://www.gnu.org/software/libredwg/).

---

## What the browser remembers

Three keys in local storage, all per-browser:

| Key | Holds |
|---|---|
| `gr-layers-v1` | which layers you have on — only the ones you changed from the drawing's defaults, so a future revision that flips a default isn't overridden by stale state |
| `gr-layouts-v1` | your switch arrangements that aren't yet exported to `layouts.js` |
| `gr-theme` | light or dark |

A **Reset layers** chip appears at the end of the layer row once your choices differ from
the defaults, and clears the first key. Nothing here is required for the site to work — if
storage is blocked or cleared, everything falls back to the defaults in `boards.js`.

## Keyboard & gestures

| | |
|---|---|
| Scroll / pinch | zoom |
| Drag | pan |
| `/` | focus search |
| `Esc` | close the panel |
| ⓘ | drawing notes, counts, unmatched layouts |
| `index.html#S16` | deep-link to a board |
