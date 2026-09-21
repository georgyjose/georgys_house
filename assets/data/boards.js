// Georgy Residence - switchboard data, generated from
// 'gEORGY_RESIDENTIAL.dwg' (Switch Board Position, Rev 8, 17-01-2026).
// `devices` + `hfl` come from the schedule tables printed on the drawing.
// `layout` is the physical left-to-right strip, from the Figma board.
window.HOUSE_DATA = {
 "meta": {
  "title": "Georgy Residence",
  "subtitle": "Switch board position \u2014 Rev 8",
  "drawing": {
   "by": "Sourorja Electricals",
   "rev": "8",
   "date": "2026-01-17",
   "name": "Switch Board Position",
   "project": "Georgy Jose"
  },
  "viewBox": "-198 -357 2972 2610",
  "notes": [
   "All foot lamps are 30cm HFL.",
   "Light points at the wardrobe and table in the bedrooms are at 180cm.",
   "The AC (4 numbers) and fan sockets (5 numbers) are 2 module each.",
   "Switch board S2BB is a floor mounted box."
  ],
  "unmatchedLayouts": [
   {
    "title": "Above Table",
    "why": "Rev 8 has no master-bedroom board matching this. Closest are S12A (3 one-way + 16A socket at 90cm) and S14 (3 one-way at 135cm)."
   },
   {
    "title": "Outside of Bathroom",
    "why": "Rev 8 shows only one board for the master bathroom (S13). The outside/inside pair does not appear."
   },
   {
    "title": "Inside of Bathroom",
    "why": "Same \u2014 S13 (3 one-way + socket at 150cm) is the only master bathroom board in Rev 8."
   }
  ],
  "sheets": [
   [
    "Switch Board Position",
    "Rev 8, 17-01-2026",
    "board positions and their schedules"
   ],
   [
    "Module Box Count",
    "Rev 8, 17-01-2026",
    "board \u2192 room \u2192 module count, and the GI box tally"
   ],
   [
    "Equipment Position and Control Wiring",
    "Rev 8, 17-01-2026",
    "lights, fans, sockets, switch symbols, control wiring and the provision notes"
   ]
  ],
  "gi": [
   [
    2,
    24
   ],
   [
    3,
    15
   ],
   [
    4,
    6
   ],
   [
    6,
    16
   ],
   [
    8,
    11
   ],
   [
    9,
    3
   ],
   [
    14,
    1
   ]
  ],
  "giNote": [
   "AC - 4 numbers, 2 module each",
   "Wall fan - 5 numbers, 2 module each"
  ],
  "legend": [
   [
    "6A switch",
    "one-way / two-way light switches"
   ],
   [
    "16A switch",
    "heavier switched points"
   ],
   [
    "16A two-way switch",
    "two-way switching at 16A"
   ],
   [
    "32A DP switch",
    "double-pole isolator, e.g. geyser / AC"
   ],
   [
    "Normal socket",
    "5A / 15A general socket"
   ],
   [
    "Power socket",
    "16A power outlet"
   ],
   [
    "Chandelier",
    "decorative pendant point"
   ],
   [
    "Wall fan",
    "wall-mounted fan point"
   ],
   [
    "Calling bell speaker",
    "bell / speaker point"
   ],
   [
    "AC",
    "air-conditioner unit"
   ]
  ]
 },
 "layers": [
  {
   "id": "arch",
   "label": "Architecture",
   "on": true,
   "locked": true
  },
  {
   "id": "joinery",
   "label": "Furniture & joinery",
   "on": true
  },
  {
   "id": "sanitary",
   "label": "Sanitary",
   "on": true
  },
  {
   "id": "landscape",
   "label": "Landscape",
   "on": true
  },
  {
   "id": "fixtures",
   "label": "Fixtures",
   "on": true
  },
  {
   "id": "switches",
   "label": "Switches & boards",
   "on": true
  },
  {
   "id": "labels",
   "label": "Room labels",
   "on": true
  },
  {
   "id": "setout",
   "label": "Setting-out dimensions",
   "on": false
  },
  {
   "id": "eqfix",
   "label": "Lights, fans & sockets",
   "on": true
  },
  {
   "id": "eqsym",
   "label": "Switch symbols",
   "on": true
  },
  {
   "id": "eqwire",
   "label": "Control wiring",
   "on": false
  },
  {
   "id": "eqnote",
   "label": "Provisions & notes",
   "on": false
  }
 ],
 "deviceKinds": {
  "light": {
   "label": "Switch",
   "fill": "#ffffff",
   "stroke": "#94a3b8",
   "text": "#0f172a"
  },
  "fan": {
   "label": "Fan / regulator",
   "fill": "#bfe6fb",
   "stroke": "#3b9fd4",
   "text": "#0c3b52"
  },
  "socket": {
   "label": "Socket",
   "fill": "#ffe6a8",
   "stroke": "#d9a326",
   "text": "#4a3305"
  },
  "socket-switch": {
   "label": "Switch for socket",
   "fill": "#ffe6a8",
   "stroke": "#d9a326",
   "text": "#4a3305"
  },
  "heavy": {
   "label": "High load",
   "fill": "#ffc9c4",
   "stroke": "#e06c5f",
   "text": "#5c1a13"
  },
  "data": {
   "label": "Data",
   "fill": "#ddd6fe",
   "stroke": "#8b5cf6",
   "text": "#2e1065"
  }
 },
 "rooms": [
  "Car Porch",
  "Sitout",
  "Formal Living",
  "Dining / Family Living",
  "Bedroom 2",
  "Bathroom 2",
  "Master Bedroom",
  "Bathroom (Master)",
  "Bedroom 3",
  "Bathroom 3",
  "Bedroom 4",
  "Bathroom 4",
  "Kitchen",
  "Store"
 ],
 "boards": [
  {
   "id": "S1",
   "room": "Sitout",
   "x": 920.2,
   "y": 78.3,
   "plate": 2,
   "plateTable": 2,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "1",
     "label": "6A one-way switch",
     "kind": "light"
    }
   ],
   "hfl": {
    "cm": "100",
    "approx": true
   }
  },
  {
   "id": "S1A",
   "room": "Sitout",
   "x": 913.8,
   "y": 114.3,
   "roomGuess": true,
   "plate": 2,
   "devices": [
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ]
  },
  {
   "id": "S2",
   "room": "Formal Living",
   "x": 726.4,
   "y": 294.6,
   "plate": 14,
   "plateTable": 14,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "11",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY(M)",
     "q": "1",
     "label": "Two-way switch (master)",
     "kind": "light"
    },
    {
     "t": "FAN KNOB",
     "q": "1",
     "label": "Fan regulator",
     "kind": "fan"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S2A",
   "room": "Car Porch",
   "x": 468.1,
   "y": 288.8,
   "plateTable": 2,
   "devices": [
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "45",
    "approx": true
   }
  },
  {
   "id": "S2B",
   "room": "Formal Living",
   "x": 505.1,
   "y": 324.8,
   "plate": 3,
   "plateTable": 3,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY",
     "q": "1",
     "label": "6A two-way switch",
     "kind": "light"
    }
   ],
   "hfl": {
    "cm": "30",
    "approx": false
   }
  },
  {
   "id": "S2BB",
   "room": "Formal Living",
   "x": 526.4,
   "y": 324.8,
   "roomGuess": true,
   "plate": 4,
   "devices": [
    {
     "t": "5/15A",
     "q": "2",
     "label": "5/15A socket",
     "kind": "socket"
    },
    {
     "t": "FLOOR MOUNT",
     "q": "",
     "label": "Floor-mounted box",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "0",
    "approx": false
   }
  },
  {
   "id": "S3",
   "room": "Formal Living",
   "x": 912.1,
   "y": 626.4,
   "plate": 8,
   "plateTable": 8,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "7",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY",
     "q": "1",
     "label": "6A two-way switch",
     "kind": "light"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S3A",
   "room": "Dining / Family Living",
   "x": 1077.2,
   "y": 491.5,
   "plateTable": 3
  },
  {
   "id": "S3B",
   "room": "Dining / Family Living",
   "x": 1529.9,
   "y": 491.5,
   "plate": 3,
   "plateTable": 3,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "1",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "30",
    "approx": false
   }
  },
  {
   "id": "S3C",
   "room": "Dining / Family Living",
   "x": 947.6,
   "y": 788.9,
   "plate": 3,
   "plateTable": 9,
   "plateConflict": true,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "1",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "30",
    "approx": false
   }
  },
  {
   "id": "S3D",
   "room": "Dining / Family Living",
   "x": 947.6,
   "y": 887.7,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "2",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "45",
    "approx": false
   }
  },
  {
   "id": "S3E",
   "room": "Dining / Family Living",
   "x": 947.6,
   "y": 839.1,
   "plate": 9,
   "plateTable": 9,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "3",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "45",
    "approx": false
   }
  },
  {
   "id": "S3F",
   "room": "Formal Living",
   "x": 515.9,
   "y": 627.5,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "2",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "300",
    "approx": false
   }
  },
  {
   "id": "S3G",
   "room": "Dining / Family Living",
   "x": 948.3,
   "y": 460.6,
   "plate": 9,
   "plateTable": 9,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "8",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY(M)",
     "q": "1",
     "label": "Two-way switch (master)",
     "kind": "light"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S3H",
   "room": "Dining / Family Living",
   "x": 1669.0,
   "y": 486.0,
   "plate": 2,
   "plateTable": 2,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S4",
   "room": "Dining / Family Living",
   "x": 1054.5,
   "y": 1069.8,
   "plate": 4,
   "plateTable": 4,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "2",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S5",
   "room": "Bedroom 2",
   "x": 911.4,
   "y": 1182.3,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY",
     "q": "1",
     "label": "6A two-way switch",
     "kind": "light"
    },
    {
     "t": "AC",
     "q": "1",
     "label": "AC point",
     "kind": "heavy"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S6",
   "room": "Bedroom 2",
   "x": 911.4,
   "y": 1256.5,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "90",
    "approx": false
   }
  },
  {
   "id": "S7",
   "room": "Bedroom 2",
   "x": 712.4,
   "y": 1392.5,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY(M)",
     "q": "1",
     "label": "Two-way switch (master)",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "60",
    "approx": false
   }
  },
  {
   "id": "S8",
   "room": "Bedroom 2",
   "x": 519.8,
   "y": 1392.5,
   "plate": 8,
   "plateTable": 8,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY",
     "q": "1",
     "label": "6A two-way switch",
     "kind": "light"
    },
    {
     "t": "FAN KNOB",
     "q": "1",
     "label": "Fan regulator",
     "kind": "fan"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "60",
    "approx": false
   }
  },
  {
   "id": "S8A",
   "room": "Bedroom 2",
   "x": 464.8,
   "y": 1197.5,
   "roomGuess": true,
   "plate": 2,
   "devices": [
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "250",
    "approx": true
   }
  },
  {
   "id": "S9",
   "room": "Bedroom 2",
   "x": 719.7,
   "y": 1512.3,
   "plate": 3,
   "plateTable": 3,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S9A",
   "room": "Bedroom 2",
   "x": 725.9,
   "y": 1564.9,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "125",
    "approx": true
   }
  },
  {
   "id": "S10",
   "room": "Bathroom 2",
   "x": 691.7,
   "y": 1515.8,
   "plate": 4,
   "plateTable": 4,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "150",
    "approx": false
   }
  },
  {
   "id": "S11",
   "room": "Master Bedroom",
   "x": 931.5,
   "y": 1602.2,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY",
     "q": "2",
     "label": "6A two-way switch",
     "kind": "light"
    },
    {
     "t": "AC",
     "q": "1",
     "label": "AC point",
     "kind": "heavy"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   },
   "layout": {
    "title": "Main Switch Board",
    "note": "Nearest the room door",
    "faces": {
     "left": "Door"
    },
    "modules": [
     {
      "label": "Tube",
      "type": "light",
      "w": 1
     },
     {
      "label": "Fan (2 way)",
      "type": "fan",
      "w": 1
     },
     {
      "label": "Roof lights",
      "type": "light",
      "w": 1
     },
     {
      "label": "AC",
      "type": "heavy",
      "w": 2
     }
    ],
    "confidence": "strong",
    "why": "2 one-way + 2 two-way + AC at 135cm matches Tube / Fan / Roof lights / AC"
   }
  },
  {
   "id": "S12",
   "room": "Master Bedroom",
   "x": 814.7,
   "y": 1602.0,
   "plate": 2,
   "plateTable": 2,
   "devices": [
    {
     "t": "CAT 6",
     "q": "1",
     "label": "CAT 6 data point",
     "kind": "data"
    }
   ],
   "hfl": {
    "cm": "90",
    "approx": false
   }
  },
  {
   "id": "S12A",
   "room": "Master Bedroom",
   "x": 785.0,
   "y": 1602.2,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "15/30A",
     "q": "1",
     "label": "15/30A power socket",
     "kind": "heavy"
    }
   ],
   "hfl": {
    "cm": "90",
    "approx": false
   }
  },
  {
   "id": "S13",
   "room": "Bathroom (Master)",
   "x": 482.6,
   "y": 1828.5,
   "plate": 4,
   "plateTable": 4,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "150",
    "approx": false
   }
  },
  {
   "id": "S14",
   "room": "Master Bedroom",
   "x": 507.2,
   "y": 1854.1,
   "plate": 3,
   "plateTable": 3,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S14A",
   "room": "Master Bedroom",
   "x": 502.9,
   "y": 1977.9,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "125",
    "approx": true
   },
   "layout": {
    "title": "Dressing Table",
    "note": "",
    "faces": {
     "right": "Dressing table chair"
    },
    "modules": [
     {
      "label": "Plug Point",
      "type": "socket",
      "w": 2
     },
     {
      "label": "Switch for Plug Point",
      "type": "socket-switch",
      "w": 1
     },
     {
      "label": "Dressing table light",
      "type": "light",
      "w": 1
     },
     {
      "label": "Roof light",
      "type": "light",
      "w": 1
     }
    ],
    "confidence": "likely",
    "why": "3 one-way + socket at 125cm in the Dress area"
   }
  },
  {
   "id": "S15",
   "room": "Master Bedroom",
   "x": 729.9,
   "y": 1978.5,
   "plate": 8,
   "plateTable": 8,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY",
     "q": "1",
     "label": "6A two-way switch",
     "kind": "light"
    },
    {
     "t": "FAN KNOB",
     "q": "1",
     "label": "Fan regulator",
     "kind": "fan"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "60",
    "approx": false
   },
   "layout": {
    "title": "Bedside switch",
    "note": "Away from the room door",
    "faces": {
     "left": "Bed"
    },
    "modules": [
     {
      "label": "Bedside lamp on top",
      "type": "light",
      "w": 1
     },
     {
      "label": "Fan (2 way)",
      "type": "fan",
      "w": 1
     },
     {
      "label": "Fan Regulator",
      "type": "fan",
      "w": 2
     },
     {
      "label": "Switch for Plug Point",
      "type": "socket-switch",
      "w": 1
     },
     {
      "label": "Plug Point",
      "type": "socket",
      "w": 2
     },
     {
      "label": "Sunshade Light",
      "type": "light",
      "w": 1,
      "optional": true
     }
    ],
    "confidence": "strong",
    "why": "exact device match, and HFL 60cm is bedside height"
   }
  },
  {
   "id": "S16",
   "room": "Master Bedroom",
   "x": 960.8,
   "y": 1978.5,
   "plate": 8,
   "plateTable": 8,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY(M)",
     "q": "1",
     "label": "Two-way switch (master)",
     "kind": "light"
    },
    {
     "t": "MASTER",
     "q": "1",
     "label": "Master switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "60",
    "approx": false
   },
   "layout": {
    "title": "Bedside switch",
    "note": "Closer to the room door",
    "faces": {
     "left": "Bed",
     "right": "Door"
    },
    "modules": [
     {
      "label": "Bedside lamp on top",
      "type": "light",
      "w": 1
     },
     {
      "label": "Foot lamp",
      "type": "light",
      "w": 1
     },
     {
      "label": "Switch for Plug Point",
      "type": "socket-switch",
      "w": 1
     },
     {
      "label": "Plug Point",
      "type": "socket",
      "w": 2
     },
     {
      "label": "Sunshade Light",
      "type": "light",
      "w": 1,
      "optional": true
     },
     {
      "label": "Master Switch",
      "type": "light",
      "w": 1,
      "optional": true
     }
    ],
    "confidence": "strong",
    "why": "the only board in the room with a MASTER switch, at bedside height"
   }
  },
  {
   "id": "S16A",
   "room": "Master Bedroom",
   "x": 1054.5,
   "y": 1753.3,
   "roomGuess": true,
   "plate": 2,
   "devices": [
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "250",
    "approx": true
   }
  },
  {
   "id": "S17",
   "room": "Dining / Family Living",
   "x": 1705.3,
   "y": 1069.8,
   "plate": 8,
   "plateTable": 8,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "6",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY(M)",
     "q": "1",
     "label": "Two-way switch (master)",
     "kind": "light"
    },
    {
     "t": "TWO WAY",
     "q": "1",
     "label": "6A two-way switch",
     "kind": "light"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S17A",
   "room": "Dining / Family Living",
   "x": 1605.1,
   "y": 1039.7,
   "plate": 2,
   "plateTable": 2,
   "devices": [
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "210",
    "approx": false
   }
  },
  {
   "id": "S17B",
   "room": "Dining / Family Living",
   "x": 1061.3,
   "y": 1039.7,
   "plate": 2,
   "plateTable": 2,
   "devices": [
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "210",
    "approx": false
   }
  },
  {
   "id": "S17C",
   "room": "Dining / Family Living",
   "x": 1042.3,
   "y": 505.3,
   "plate": 2,
   "plateTable": 2,
   "devices": [
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "210",
    "approx": false
   }
  },
  {
   "id": "S17D",
   "room": "Dining / Family Living",
   "x": 1605.1,
   "y": 505.3,
   "plate": 2,
   "plateTable": 2,
   "devices": [
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "210",
    "approx": false
   }
  },
  {
   "id": "S18",
   "room": "Kitchen",
   "x": 1729.6,
   "y": 1253.0,
   "plate": 3,
   "plateTable": 3,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY",
     "q": "1",
     "label": "6A two-way switch",
     "kind": "light"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S19",
   "room": "Kitchen",
   "x": 1705.1,
   "y": 1715.7,
   "plate": 3,
   "plateTable": 3,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "1",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "15/30A",
     "q": "1",
     "label": "15/30A power socket",
     "kind": "heavy"
    }
   ],
   "hfl": {
    "cm": "100",
    "approx": false
   }
  },
  {
   "id": "S19A",
   "room": "Kitchen",
   "x": 1705.4,
   "y": 1462.9,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "15/30A",
     "q": "2",
     "label": "15/30A power socket",
     "kind": "heavy"
    }
   ],
   "hfl": {
    "cm": "100",
    "approx": false
   }
  },
  {
   "id": "S20",
   "room": "Kitchen",
   "x": 2159.6,
   "y": 1733.3,
   "plate": 8,
   "plateTable": 8,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "5",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY (M)",
     "q": "1",
     "label": "Two-way switch (master)",
     "kind": "light"
    },
    {
     "t": "MOTOR SWITCH",
     "q": "1",
     "label": "Motor switch",
     "kind": "heavy"
    }
   ],
   "hfl": {
    "cm": "100",
    "approx": false
   }
  },
  {
   "id": "S20A",
   "room": "Kitchen",
   "x": 1938.9,
   "y": 1732.9,
   "plate": 3,
   "plateTable": 3,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "1",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ]
  },
  {
   "id": "S20B",
   "room": "Kitchen",
   "x": 1839.3,
   "y": 1733.4,
   "plate": 3,
   "plateTable": 3,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "1",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "15/30A",
     "q": "1",
     "label": "15/30A power socket",
     "kind": "heavy"
    }
   ],
   "hfl": {
    "cm": "45",
    "approx": false
   }
  },
  {
   "id": "S20C",
   "room": "Kitchen",
   "x": 1907.0,
   "y": 1732.9,
   "plateTable": 3
  },
  {
   "id": "S21",
   "room": "Store",
   "x": 2274.5,
   "y": 1421.1,
   "plate": 3,
   "plateTable": 3,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "1",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "15/30A",
     "q": "1",
     "label": "15/30A power socket",
     "kind": "heavy"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S21A",
   "room": "Store",
   "x": 2274.7,
   "y": 1682.3,
   "plate": 3,
   "plateTable": 3,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "1",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "15/30A",
     "q": "1",
     "label": "15/30A power socket",
     "kind": "heavy"
    }
   ],
   "hfl": {
    "cm": "100",
    "approx": false
   }
  },
  {
   "id": "S21B",
   "room": "Store",
   "x": 2122.2,
   "y": 1290.2,
   "plate": 3,
   "plateTable": 3,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "1",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "30",
    "approx": false
   }
  },
  {
   "id": "S22",
   "room": "Kitchen",
   "x": 2091.8,
   "y": 1309.1,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "15/30A",
     "q": "1",
     "label": "15/30A power socket",
     "kind": "heavy"
    }
   ],
   "hfl": {
    "cm": "100",
    "approx": false
   }
  },
  {
   "id": "S22A",
   "room": "Kitchen",
   "x": 2092.1,
   "y": 1455.1,
   "plate": 2,
   "plateTable": 2,
   "devices": [
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "60",
    "approx": false
   }
  },
  {
   "id": "S22B",
   "room": "Kitchen",
   "x": 2092.1,
   "y": 1495.3,
   "plate": 2,
   "plateTable": 2,
   "devices": [
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "180",
    "approx": false
   }
  },
  {
   "id": "S23",
   "room": "Kitchen",
   "x": 1864.7,
   "y": 1290.3,
   "plate": 8,
   "plateTable": 8,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "4",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY",
     "q": "1",
     "label": "6A two-way switch",
     "kind": "light"
    },
    {
     "t": "FAN KNOB",
     "q": "1",
     "label": "Fan regulator",
     "kind": "fan"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S24",
   "room": "Bedroom 4",
   "x": 2001.1,
   "y": 1251.1,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY(M)",
     "q": "1",
     "label": "Two-way switch (master)",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "60",
    "approx": false
   }
  },
  {
   "id": "S25",
   "room": "Bedroom 4",
   "x": 2194.1,
   "y": 1251.1,
   "plate": 8,
   "plateTable": 8,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY",
     "q": "1",
     "label": "6A two-way switch",
     "kind": "light"
    },
    {
     "t": "FAN KNOB",
     "q": "1",
     "label": "Fan regulator",
     "kind": "fan"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "60",
    "approx": false
   }
  },
  {
   "id": "S25A",
   "room": "Bedroom 4",
   "x": 2274.9,
   "y": 1165.2,
   "roomGuess": true,
   "plate": 2,
   "devices": [
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "250",
    "approx": true
   }
  },
  {
   "id": "S26",
   "room": "Bedroom 4",
   "x": 1888.2,
   "y": 1039.5,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY",
     "q": "1",
     "label": "6A two-way switch",
     "kind": "light"
    },
    {
     "t": "AC",
     "q": "1",
     "label": "AC point",
     "kind": "heavy"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S26A",
   "room": "Bedroom 4",
   "x": 1888.2,
   "y": 1125.0,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ]
  },
  {
   "id": "S27",
   "room": "Bedroom 4",
   "x": 2012.0,
   "y": 798.4,
   "plate": 3,
   "plateTable": 3,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S27A",
   "room": "Bedroom 4",
   "x": 1914.5,
   "y": 802.4,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "125",
    "approx": false
   }
  },
  {
   "id": "S28",
   "room": "Bathroom 4",
   "x": 2048.2,
   "y": 766.2,
   "plate": 4,
   "plateTable": 4,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "150",
    "approx": false
   }
  },
  {
   "id": "S29",
   "room": "Dining / Family Living",
   "x": 1854.7,
   "y": 870.3,
   "plate": 2,
   "plateTable": 2,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    }
   ],
   "hfl": {
    "cm": "150",
    "approx": true
   }
  },
  {
   "id": "S30",
   "room": "Dining / Family Living",
   "x": 1817.8,
   "y": 504.6,
   "plate": 6,
   "plateTable": 6,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY",
     "q": "1",
     "label": "6A two-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S31",
   "room": "Bedroom 3",
   "x": 1819.1,
   "y": 468.3,
   "plate": 8,
   "plateTable": 8,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY",
     "q": "1",
     "label": "6A two-way switch",
     "kind": "light"
    },
    {
     "t": "ac",
     "q": "1",
     "label": "AC point",
     "kind": "heavy"
    },
    {
     "t": "FAN KNOB",
     "q": "1",
     "label": "Fan regulator",
     "kind": "fan"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S32",
   "room": "Bedroom 3",
   "x": 1846.7,
   "y": 468.0,
   "plate": 8,
   "plateTable": 8,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY(M)",
     "q": "1",
     "label": "Two-way switch (master)",
     "kind": "light"
    },
    {
     "t": "MASTER",
     "q": "1",
     "label": "Master switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "60",
    "approx": false
   }
  },
  {
   "id": "S32A",
   "room": "Bedroom 3",
   "x": 1873.1,
   "y": 468.0,
   "roomGuess": true,
   "plate": 2,
   "devices": [
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "250",
    "approx": true
   }
  },
  {
   "id": "S33",
   "room": "Bedroom 3",
   "x": 2040.0,
   "y": 468.3,
   "plate": 8,
   "plateTable": 8,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "TWO WAY",
     "q": "1",
     "label": "6A two-way switch",
     "kind": "light"
    },
    {
     "t": "FAN KNOB",
     "q": "1",
     "label": "Fan regulator",
     "kind": "fan"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "60",
    "approx": false
   }
  },
  {
   "id": "S34",
   "room": "Bedroom 3",
   "x": 2215.7,
   "y": 216.4,
   "plate": 3,
   "plateTable": 3,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "3",
     "label": "6A one-way switch",
     "kind": "light"
    }
   ],
   "hfl": {
    "cm": "135",
    "approx": false
   }
  },
  {
   "id": "S34A",
   "room": "Bedroom 3",
   "x": 2210.7,
   "y": 115.0,
   "plate": 4,
   "plateTable": 4,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "125",
    "approx": false
   }
  },
  {
   "id": "S35",
   "room": "Bathroom 3",
   "x": 2241.0,
   "y": 241.7,
   "plate": 4,
   "plateTable": 4,
   "devices": [
    {
     "t": "ONE WAY",
     "q": "2",
     "label": "6A one-way switch",
     "kind": "light"
    },
    {
     "t": "5/15A",
     "q": "1",
     "label": "5/15A socket",
     "kind": "socket"
    }
   ],
   "hfl": {
    "cm": "150",
    "approx": false
   }
  }
 ]
};
