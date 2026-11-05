// Switch arrangements for Georgy Residence.
// Replace this file with the one the app's "Export boards" button gives you.
// It overrides `layout` in boards.js, and the app's editor edits on top of it.
window.HOUSE_LAYOUTS = {
 "S1": {
  "title": "Calling bell",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "Calling bell",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S10": {
  "title": "Inside of Bathroom",
  "note": "",
  "faces": {
   "left": "Bathroom door"
  },
  "modules": [
   {
    "label": "Mirror light",
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
   }
  ]
 },
 "S11": {
  "title": "Main Switch Board",
  "note": "Nearest the room door",
  "faces": {
   "right": "Door"
  },
  "modules": [
   {
    "label": "AC",
    "type": "heavy",
    "w": 2
   },
   {
    "label": "Corridor lights (2 way)",
    "type": "light",
    "w": 1
   },
   {
    "label": "Roof lights",
    "type": "light",
    "w": 1
   },
   {
    "label": "Fan (2 way)",
    "type": "fan",
    "w": 1
   },
   {
    "label": "Tube",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S12": {
  "title": "Data point",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "CAT 6A data point",
    "type": "data",
    "w": 2
   }
  ]
 },
 "S12A": {
  "title": "Above Table",
  "note": "",
  "faces": {
   "right": "Table"
  },
  "modules": [
   {
    "label": "Wardrobe light",
    "type": "light",
    "w": 1
   },
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
    "label": "Table lamp",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S13": {
  "title": "Inside of Bathroom",
  "note": "",
  "faces": {
   "left": "Bathroom door"
  },
  "modules": [
   {
    "label": "Mirror light",
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
   }
  ]
 },
 "S14": {
  "title": "Outside of Bathroom",
  "note": "",
  "faces": {
   "right": "Bathroom door"
  },
  "modules": [
   {
    "label": "Geyser switch",
    "type": "heavy",
    "w": 1
   },
   {
    "label": "Exhaust fan",
    "type": "fan",
    "w": 1
   },
   {
    "label": "Ceiling lights",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S14A": {
  "title": "Dressing Table",
  "note": "",
  "faces": {
   "left": "Dressing table chair"
  },
  "modules": [
   {
    "label": "Roof light",
    "type": "light",
    "w": 1
   },
   {
    "label": "Dressing table light",
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
   }
  ]
 },
 "S15": {
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
   }
  ]
 },
 "S16": {
  "title": "Bedside switch",
  "note": "Closer to the room door",
  "faces": {
   "left": "Door",
   "right": "Bed"
  },
  "modules": [
   {
    "label": "Master Switch (all sunshade lights)",
    "type": "light",
    "w": 1
   },
   {
    "label": "Sunshade Light",
    "type": "light",
    "w": 1
   },
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
    "label": "Foot lamp",
    "type": "light",
    "w": 1
   },
   {
    "label": "Bedside lamp on top",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S16A": {
  "title": "AC point",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "AC socket",
    "type": "socket",
    "w": 2
   }
  ]
 },
 "S17A": {
  "title": "Wall fan point",
  "note": "Wired directly to the fan, no switchboard",
  "faces": {},
  "modules": [
   {
    "label": "Wall fan (direct wiring)",
    "type": "blank",
    "w": 2
   }
  ]
 },
 "S17B": {
  "title": "Wall fan point",
  "note": "Wired directly to the fan, no switchboard. Switched from S4.",
  "faces": {},
  "modules": [
   {
    "label": "Wall fan (direct wiring)",
    "type": "blank",
    "w": 2
   }
  ]
 },
 "S17C": {
  "title": "Wall fan point",
  "note": "Wired directly to the fan, no switchboard",
  "faces": {},
  "modules": [
   {
    "label": "Wall fan (direct wiring)",
    "type": "blank",
    "w": 2
   }
  ]
 },
 "S17D": {
  "title": "Wall fan point",
  "note": "Wired directly to the fan, no switchboard. Switched from S3H.",
  "faces": {},
  "modules": [
   {
    "label": "Wall fan (direct wiring)",
    "type": "blank",
    "w": 2
   }
  ]
 },
 "S18": {
  "title": "Kitchen lights",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "Tube (kitchen, above sink)",
    "type": "light",
    "w": 1
   },
   {
    "label": "Ceiling lights (kitchen, 2 way)",
    "type": "light",
    "w": 1
   },
   {
    "label": "Kitchen entrance ceiling light",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S19": {
  "title": "Mixer grinder",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "Mixer grinder socket",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for mixer grinder",
    "type": "socket-switch",
    "w": 1
   }
  ]
 },
 "S19A": {
  "title": "Microwave and induction",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "Microwave socket",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for microwave",
    "type": "socket-switch",
    "w": 1
   },
   {
    "label": "Induction socket",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for induction",
    "type": "socket-switch",
    "w": 1
   }
  ]
 },
 "S1A": {
  "title": "Wall fan point",
  "note": "Wired directly to the fan, no switchboard",
  "faces": {},
  "modules": [
   {
    "label": "Wall fan (direct wiring)",
    "type": "blank",
    "w": 2
   }
  ]
 },
 "S20": {
  "title": "Work area",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "Motor switch",
    "type": "heavy",
    "w": 2
   },
   {
    "label": "Terrace light",
    "type": "light",
    "w": 1
   },
   {
    "label": "Under cabinet light",
    "type": "light",
    "w": 1
   },
   {
    "label": "Sunshade lights",
    "type": "light",
    "w": 1
   },
   {
    "label": "L6 light outside kitchen",
    "type": "light",
    "w": 1
   },
   {
    "label": "Ceiling light (work area)",
    "type": "light",
    "w": 1
   },
   {
    "label": "Tube light (work area)",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S20A": {
  "title": "Fridge",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "Fridge socket",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for fridge",
    "type": "socket-switch",
    "w": 1
   }
  ]
 },
 "S20B": {
  "title": "Under kitchen sink",
  "note": "",
  "faces": {},
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
   }
  ]
 },
 "S20C": {
  "title": "Dishwasher",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "Dishwasher socket",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for dishwasher",
    "type": "socket-switch",
    "w": 1
   }
  ]
 },
 "S21": {
  "title": "Washing machine",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "Washing machine socket",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for washing machine",
    "type": "socket-switch",
    "w": 1
   }
  ]
 },
 "S21A": {
  "title": "Mixer grinder",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "Mixer grinder socket",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for mixer grinder",
    "type": "socket-switch",
    "w": 1
   }
  ]
 },
 "S21B": {
  "title": "Robo vacuum",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "Robo vacuum socket",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for robo vacuum",
    "type": "socket-switch",
    "w": 1
   }
  ]
 },
 "S22": {
  "title": "Air fryer",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "Switch for S22A socket",
    "type": "socket-switch",
    "w": 1
   },
   {
    "label": "Switch for chimney (S22B)",
    "type": "socket-switch",
    "w": 1
   },
   {
    "label": "Switch for air fryer",
    "type": "socket-switch",
    "w": 1
   },
   {
    "label": "Air fryer socket",
    "type": "socket",
    "w": 2
   }
  ]
 },
 "S22A": {
  "title": "Socket",
  "note": "Switched from S22",
  "faces": {},
  "modules": [
   {
    "label": "Plug Point",
    "type": "socket",
    "w": 2
   }
  ]
 },
 "S22B": {
  "title": "Chimney",
  "note": "Switched from S22",
  "faces": {},
  "modules": [
   {
    "label": "Chimney socket",
    "type": "socket",
    "w": 2
   }
  ]
 },
 "S23": {
  "title": "Kitchen main",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "Tube (breakfast counter)",
    "type": "light",
    "w": 1
   },
   {
    "label": "Ceiling lights (kitchen, 2 way)",
    "type": "light",
    "w": 1
   },
   {
    "label": "Fan",
    "type": "fan",
    "w": 1
   },
   {
    "label": "Fan regulator",
    "type": "fan",
    "w": 2
   },
   {
    "label": "Under cabinet light (window side)",
    "type": "light",
    "w": 1
   },
   {
    "label": "Under cabinet light (hob side)",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S24": {
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
    "w": 1
   }
  ]
 },
 "S25": {
  "title": "Bedside switch",
  "note": "Away from the room door",
  "faces": {
   "right": "Bed"
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
    "label": "Fan Regulator",
    "type": "fan",
    "w": 2
   },
   {
    "label": "Fan (2 way)",
    "type": "fan",
    "w": 1
   },
   {
    "label": "Bedside lamp on top",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S25A": {
  "title": "AC point",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "AC socket",
    "type": "socket",
    "w": 2
   }
  ]
 },
 "S26": {
  "title": "Main Switch Board",
  "note": "Nearest the room door",
  "faces": {
   "right": "Door"
  },
  "modules": [
   {
    "label": "AC",
    "type": "heavy",
    "w": 2
   },
   {
    "label": "Roof lights",
    "type": "light",
    "w": 1
   },
   {
    "label": "Fan (2 way)",
    "type": "fan",
    "w": 1
   },
   {
    "label": "Tube",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S26A": {
  "title": "Above Table",
  "note": "",
  "faces": {
   "right": "Table"
  },
  "modules": [
   {
    "label": "Wardrobe light",
    "type": "light",
    "w": 1
   },
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
    "label": "Table lamp",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S27": {
  "title": "Outside of Bathroom",
  "note": "",
  "faces": {
   "right": "Bathroom door"
  },
  "modules": [
   {
    "label": "Geyser switch",
    "type": "heavy",
    "w": 1
   },
   {
    "label": "Exhaust fan",
    "type": "fan",
    "w": 1
   },
   {
    "label": "Ceiling lights",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S27A": {
  "title": "Dressing Table",
  "note": "",
  "faces": {
   "left": "Dressing table chair"
  },
  "modules": [
   {
    "label": "Roof light",
    "type": "light",
    "w": 1
   },
   {
    "label": "Dressing table light",
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
   }
  ]
 },
 "S28": {
  "title": "Inside of Bathroom",
  "note": "",
  "faces": {
   "left": "Bathroom door"
  },
  "modules": [
   {
    "label": "Mirror light",
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
   }
  ]
 },
 "S29": {
  "title": "Wash counter",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "Mirror light",
    "type": "light",
    "w": 1
   },
   {
    "label": "Ceiling lights above wash counter",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S30": {
  "title": "Courtyard side",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "High ceiling lights (3, 2 way)",
    "type": "light",
    "w": 1
   },
   {
    "label": "Ceiling lights near courtyard",
    "type": "light",
    "w": 1
   },
   {
    "label": "L3 lights in courtyard",
    "type": "light",
    "w": 1
   },
   {
    "label": "Ironing table socket",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for ironing table",
    "type": "socket-switch",
    "w": 1
   }
  ]
 },
 "S31": {
  "title": "Main Switch Board",
  "note": "Nearest the room door",
  "faces": {
   "right": "Door"
  },
  "modules": [
   {
    "label": "AC",
    "type": "heavy",
    "w": 2
   },
   {
    "label": "Wardrobe light",
    "type": "light",
    "w": 1
   },
   {
    "label": "Roof lights",
    "type": "light",
    "w": 1
   },
   {
    "label": "Fan (2 way)",
    "type": "fan",
    "w": 1
   },
   {
    "label": "Tube",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S32": {
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
    "w": 1
   },
   {
    "label": "Master Switch (all sunshade lights)",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S32A": {
  "title": "AC point",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "AC socket",
    "type": "socket",
    "w": 2
   }
  ]
 },
 "S33": {
  "title": "Bedside switch",
  "note": "Away from the room door",
  "faces": {
   "right": "Bed"
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
    "label": "Fan Regulator",
    "type": "fan",
    "w": 2
   },
   {
    "label": "Fan (2 way)",
    "type": "fan",
    "w": 1
   },
   {
    "label": "Bedside lamp on top",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S34": {
  "title": "Outside of Bathroom",
  "note": "",
  "faces": {
   "right": "Bathroom door"
  },
  "modules": [
   {
    "label": "Geyser switch",
    "type": "heavy",
    "w": 1
   },
   {
    "label": "Exhaust fan",
    "type": "fan",
    "w": 1
   },
   {
    "label": "Ceiling lights",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S34A": {
  "title": "Dressing Table",
  "note": "",
  "faces": {
   "left": "Dressing table chair"
  },
  "modules": [
   {
    "label": "Roof light",
    "type": "light",
    "w": 1
   },
   {
    "label": "Dressing table light",
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
   }
  ]
 },
 "S35": {
  "title": "Inside of Bathroom",
  "note": "",
  "faces": {
   "left": "Bathroom door"
  },
  "modules": [
   {
    "label": "Mirror light",
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
   }
  ]
 },
 "S3A": {
  "title": "Under day bed",
  "note": "",
  "faces": {},
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
   }
  ]
 },
 "S3B": {
  "title": "Under day bed",
  "note": "",
  "faces": {},
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
   }
  ]
 },
 "S3C": {
  "title": "TV wall",
  "note": "TV, PS5, soundbar, audio system",
  "faces": {},
  "modules": [
   {
    "label": "AV socket 1",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for AV socket 1",
    "type": "socket-switch",
    "w": 1
   }
  ]
 },
 "S3D": {
  "title": "TV wall",
  "note": "TV, PS5, soundbar, audio system",
  "faces": {},
  "modules": [
   {
    "label": "AV socket 1",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for AV socket 1",
    "type": "socket-switch",
    "w": 1
   },
   {
    "label": "AV socket 2",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for AV socket 2",
    "type": "socket-switch",
    "w": 1
   }
  ]
 },
 "S3E": {
  "title": "TV wall",
  "note": "TV, PS5, soundbar, audio system",
  "faces": {},
  "modules": [
   {
    "label": "AV socket 1",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for AV socket 1",
    "type": "socket-switch",
    "w": 1
   },
   {
    "label": "AV socket 2",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for AV socket 2",
    "type": "socket-switch",
    "w": 1
   },
   {
    "label": "AV socket 3",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for AV socket 3",
    "type": "socket-switch",
    "w": 1
   }
  ]
 },
 "S3F": {
  "title": "Network rack",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "Network rack socket 1",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for network rack socket 1",
    "type": "socket-switch",
    "w": 1
   },
   {
    "label": "Network rack socket 2",
    "type": "socket",
    "w": 2
   },
   {
    "label": "Switch for network rack socket 2",
    "type": "socket-switch",
    "w": 1
   }
  ]
 },
 "S3H": {
  "title": "Wall fan and tube",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "Wall fan (S17D)",
    "type": "fan",
    "w": 1
   },
   {
    "label": "Tube",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S4": {
  "title": "Corridor and high ceiling",
  "note": "",
  "faces": {},
  "revisit": true,
  "modules": [
   {
    "label": "Corridor ceiling lights (to master bedroom)",
    "type": "light",
    "w": 1
   },
   {
    "label": "Wall fan (S17B)",
    "type": "fan",
    "w": 1
   },
   {
    "label": "L3 light below wall fan",
    "type": "light",
    "w": 1
   },
   {
    "label": "High ceiling roof lights (4, 2 way)",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S5": {
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
  ]
 },
 "S6": {
  "title": "Above Table",
  "note": "",
  "faces": {
   "left": "Table"
  },
  "modules": [
   {
    "label": "Table lamp",
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
    "label": "Wardrobe light",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S7": {
  "title": "Bedside switch",
  "note": "Closer to the room door",
  "faces": {
   "left": "Door",
   "right": "Bed"
  },
  "modules": [
   {
    "label": "Sunshade Light",
    "type": "light",
    "w": 1
   },
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
    "label": "Foot lamp",
    "type": "light",
    "w": 1
   },
   {
    "label": "Bedside lamp on top",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S8": {
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
   }
  ]
 },
 "S8A": {
  "title": "AC point",
  "note": "",
  "faces": {},
  "modules": [
   {
    "label": "AC socket",
    "type": "socket",
    "w": 2
   }
  ]
 },
 "S9": {
  "title": "Outside of Bathroom",
  "note": "",
  "faces": {
   "right": "Bathroom door"
  },
  "modules": [
   {
    "label": "Geyser switch",
    "type": "heavy",
    "w": 1
   },
   {
    "label": "Exhaust fan",
    "type": "fan",
    "w": 1
   },
   {
    "label": "Ceiling lights",
    "type": "light",
    "w": 1
   }
  ]
 },
 "S9A": {
  "title": "Dressing Table",
  "note": "",
  "faces": {
   "left": "Dressing table chair"
  },
  "modules": [
   {
    "label": "Roof light",
    "type": "light",
    "w": 1
   },
   {
    "label": "Dressing table light",
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
   }
  ]
 }
};
