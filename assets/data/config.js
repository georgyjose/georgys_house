// Site configuration. This file is committed, so whatever is set here is what
// the published site does.
window.HOUSE_CONFIG = {

  // Who may edit the switch arrangements.
  //   false    never — the editor is not loaded at all
  //   'local'  only when the page is served from your own machine
  //   true     always (do NOT commit this — it would enable editing on Pages)
  //
  // 'local' means: file://, localhost, 127.0.0.1, ::1, a *.local host, or a
  // private LAN address (10.x, 172.16–31.x, 192.168.x). A GitHub Pages URL is
  // none of those, so the published site is read-only.
  editing: 'local'
};
