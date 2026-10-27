// Generated from the Blender scene (camera positions in Blender metres, Z-up).
// neighbours = circles shown at that camera (walk graph from line-of-sight + same-floor rooms).
window.TOUR_SCENES = [
 {
  "id": "out_main_gate",
  "name": "Main Gate",
  "camera": "Camera 001",
  "area": "Outdoor",
  "image": "out_main_gate.jpg",
  "pos": [
   2.792,
   -66.566,
   1.7
  ],
  "floorZ": 0,
  "placeholder": false,
  "neighbours": [
   "out_pergola_walkway",
   "out_turf"
  ]
 },
 {
  "id": "out_pergola_walkway",
  "name": "Pergola Walkway",
  "camera": "Camera 002",
  "area": "Outdoor",
  "image": "out_pergola_walkway.jpg",
  "pos": [
   2.792,
   -46.899,
   1.7
  ],
  "floorZ": 0,
  "placeholder": false,
  "neighbours": [
   "out_turf",
   "out_main_gate",
   "out_driveway"
  ]
 },
 {
  "id": "out_turf",
  "name": "Turf",
  "camera": "Camera 003",
  "area": "Outdoor",
  "image": "out_turf.jpg",
  "pos": [
   1.855,
   -43.501,
   6.806
  ],
  "floorZ": 4.864,
  "placeholder": false,
  "neighbours": [
   "out_pergola_walkway",
   "out_main_gate"
  ]
 },
 {
  "id": "out_driveway",
  "name": "Driveway",
  "camera": "Camera 004",
  "area": "Outdoor",
  "image": "out_driveway.jpg",
  "pos": [
   2.792,
   -14.441,
   1.7
  ],
  "floorZ": 0,
  "placeholder": false,
  "neighbours": [
   "out_house_front",
   "out_pergola_walkway"
  ]
 },
 {
  "id": "out_house_front",
  "name": "House Front",
  "camera": "Camera 005",
  "area": "Outdoor",
  "image": "out_house_front.jpg",
  "pos": [
   2.792,
   -9.529,
   1.7
  ],
  "floorZ": 0,
  "placeholder": false,
  "neighbours": [
   "out_driveway",
   "out_car_porch"
  ]
 },
 {
  "id": "out_car_porch",
  "name": "Car Porch",
  "camera": "Camera 006",
  "area": "Outdoor",
  "image": "out_car_porch.jpg",
  "pos": [
   1.567,
   -3.917,
   1.559
  ],
  "floorZ": 0.129,
  "placeholder": false,
  "neighbours": [
   "out_main_door",
   "out_house_front"
  ]
 },
 {
  "id": "out_main_door",
  "name": "Main Door",
  "camera": "Camera 007",
  "area": "Outdoor",
  "image": "out_main_door.jpg",
  "pos": [
   1.567,
   -2.199,
   2.04
  ],
  "floorZ": 0.574,
  "placeholder": false,
  "neighbours": [
   "gf_foyer",
   "out_car_porch",
   "out_house_front"
  ]
 },
 {
  "id": "gf_foyer",
  "name": "Foyer",
  "camera": "Camera 008",
  "area": "Ground Floor",
  "image": "gf_foyer.jpg",
  "pos": [
   1.43,
   -0.511,
   2.048
  ],
  "floorZ": 0.686,
  "placeholder": false,
  "neighbours": [
   "gf_entrance_lobby",
   "out_main_door",
   "gf_staircase_1",
   "gf_bedroom_01_entry"
  ]
 },
 {
  "id": "gf_entrance_lobby",
  "name": "Entrance Lobby",
  "camera": "Camera 009",
  "area": "Ground Floor",
  "image": "gf_entrance_lobby.jpg",
  "pos": [
   2.815,
   0.369,
   2.048
  ],
  "floorZ": 0.656,
  "placeholder": false,
  "neighbours": [
   "gf_foyer",
   "gf_lobby_passage",
   "gf_staircase_1",
   "gf_bedroom_01_entry"
  ]
 },
 {
  "id": "gf_lobby_passage",
  "name": "Lobby Passage",
  "camera": "Camera 010",
  "area": "Ground Floor",
  "image": "gf_lobby_passage.jpg",
  "pos": [
   4.926,
   1.862,
   2.048
  ],
  "floorZ": 0.656,
  "placeholder": false,
  "neighbours": [
   "gf_bedroom_01_entry",
   "gf_staircase_1",
   "gf_entrance_lobby",
   "gf_staircase_2",
   "gf_staircase_3"
  ]
 },
 {
  "id": "gf_bedroom_01_entry",
  "name": "Bedroom 01 Entry",
  "camera": "Camera 011",
  "area": "Ground Floor",
  "image": "gf_bedroom_01_entry.jpg",
  "pos": [
   4.251,
   2.922,
   2.048
  ],
  "floorZ": 0.656,
  "placeholder": false,
  "neighbours": [
   "gf_lobby_passage",
   "gf_bedroom_01",
   "gf_entrance_lobby",
   "gf_staircase_1"
  ]
 },
 {
  "id": "gf_bedroom_01",
  "name": "Bedroom 01",
  "camera": "Camera 012",
  "area": "Ground Floor",
  "image": "gf_bedroom_01.jpg",
  "pos": [
   5.181,
   4.283,
   2.048
  ],
  "floorZ": 0.656,
  "placeholder": false,
  "neighbours": [
   "gf_bedroom_01_entry",
   "gf_washroom"
  ]
 },
 {
  "id": "gf_washroom",
  "name": "Washroom",
  "camera": "Camera 014",
  "area": "Ground Floor",
  "image": "gf_washroom.jpg",
  "pos": [
   2.557,
   3.123,
   2.048
  ],
  "floorZ": 0.656,
  "placeholder": false,
  "neighbours": [
   "gf_bedroom_01"
  ]
 },
 {
  "id": "gf_staircase_1",
  "name": "Staircase 1",
  "camera": "Camera 016",
  "area": "Ground Floor",
  "image": "gf_staircase_1.jpg",
  "pos": [
   5.296,
   0.369,
   3.039
  ],
  "floorZ": 1.648,
  "placeholder": false,
  "neighbours": [
   "gf_staircase_3",
   "gf_lobby_passage",
   "gf_staircase_2",
   "gf_entrance_lobby",
   "gf_bedroom_01_entry",
   "gf_foyer"
  ]
 },
 {
  "id": "gf_staircase_2",
  "name": "Staircase 2",
  "camera": "Camera 017",
  "area": "Ground Floor",
  "image": "gf_staircase_2.jpg",
  "pos": [
   7.076,
   0.071,
   3.791
  ],
  "floorZ": 2.262,
  "placeholder": false,
  "neighbours": [
   "gf_staircase_1",
   "gf_staircase_3",
   "ff_entrance"
  ]
 },
 {
  "id": "gf_staircase_3",
  "name": "Staircase 3",
  "camera": "Camera 018",
  "area": "Ground Floor",
  "image": "gf_staircase_3.jpg",
  "pos": [
   5.16,
   -0.579,
   4.558
  ],
  "floorZ": 3.044,
  "placeholder": false,
  "neighbours": [
   "ff_stair_lobby",
   "gf_staircase_1",
   "gf_staircase_2",
   "ff_entrance",
   "gf_lobby_passage"
  ]
 },
 {
  "id": "ff_stair_lobby",
  "name": "Stair Lobby",
  "camera": "Camera 019",
  "area": "First Floor",
  "image": "ff_stair_lobby.jpg",
  "pos": [
   3.895,
   -0.639,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "ff_entrance",
   "gf_staircase_3",
   "ff_staircase_1",
   "ff_hall",
   "ff_kitchen_entrance",
   "ff_bedroom_02_entry"
  ]
 },
 {
  "id": "ff_entrance",
  "name": "First Floor Entrance",
  "camera": "Camera 020",
  "area": "First Floor",
  "image": "ff_entrance.jpg",
  "pos": [
   2.872,
   -0.005,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "ff_stair_lobby",
   "ff_staircase_1",
   "ff_hall",
   "ff_kitchen_entrance",
   "ff_bedroom_02_entry",
   "ff_staircase_2",
   "ff_bedroom_02"
  ]
 },
 {
  "id": "ff_hall",
  "name": "Hall (Dining)",
  "camera": "Camera 021",
  "area": "First Floor",
  "image": "ff_hall.jpg",
  "pos": [
   2.847,
   -2.227,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "ff_stair_lobby",
   "ff_lounge",
   "ff_entrance",
   "ff_living_room",
   "ff_bedroom_02_entry"
  ]
 },
 {
  "id": "ff_lounge",
  "name": "Lounge",
  "camera": "Camera 022",
  "area": "First Floor",
  "image": "ff_lounge.jpg",
  "pos": [
   2.228,
   -4.202,
   4.663
  ],
  "floorZ": 3.271,
  "placeholder": false,
  "neighbours": [
   "ff_hall",
   "ff_living_room"
  ]
 },
 {
  "id": "ff_living_room",
  "name": "Living Room",
  "camera": "Camera 023",
  "area": "First Floor",
  "image": "ff_living_room.jpg",
  "pos": [
   5.376,
   -3.243,
   4.663
  ],
  "floorZ": 3.271,
  "placeholder": false,
  "neighbours": [
   "ff_hall",
   "ff_lounge"
  ]
 },
 {
  "id": "ff_kitchen_entrance",
  "name": "Kitchen Entrance",
  "camera": "Camera 024",
  "area": "First Floor",
  "image": "ff_kitchen_entrance.jpg",
  "pos": [
   3.142,
   2.5,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "ff_kitchen",
   "ff_entrance",
   "ff_staircase_1",
   "ff_stair_lobby",
   "ff_staircase_3",
   "ff_staircase_2"
  ]
 },
 {
  "id": "ff_bedroom_02_entry",
  "name": "Bedroom 02 Entry",
  "camera": "Camera 025",
  "area": "First Floor",
  "image": "ff_bedroom_02_entry.jpg",
  "pos": [
   4.181,
   2.953,
   5.047
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "ff_bedroom_02_bath",
   "ff_bedroom_02",
   "ff_entrance",
   "ff_stair_lobby"
  ]
 },
 {
  "id": "ff_bedroom_02_bath",
  "name": "Bedroom 02 Bathroom",
  "camera": "Camera 026",
  "area": "First Floor",
  "image": "ff_bedroom_02_bath.jpg",
  "pos": [
   3.544,
   4.421,
   5.105
  ],
  "floorZ": 3.673,
  "placeholder": false,
  "neighbours": [
   "ff_bedroom_02_entry",
   "ff_bedroom_02"
  ]
 },
 {
  "id": "ff_bedroom_02",
  "name": "Bedroom 02",
  "camera": "Camera 027",
  "area": "First Floor",
  "image": "ff_bedroom_02.jpg",
  "pos": [
   5.439,
   4.911,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "ff_bedroom_02_bath",
   "ff_bedroom_02_entry",
   "ff_entrance"
  ]
 },
 {
  "id": "ff_kitchen",
  "name": "Kitchen",
  "camera": "Camera 028",
  "area": "First Floor",
  "image": "ff_kitchen.jpg",
  "pos": [
   1.555,
   3.323,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "ff_kitchen_entrance"
  ]
 },
 {
  "id": "ff_staircase_1",
  "name": "Staircase 1",
  "camera": "Camera 029",
  "area": "First Floor",
  "image": "ff_staircase_1.jpg",
  "pos": [
   4.807,
   0.487,
   5.761
  ],
  "floorZ": 4.239,
  "placeholder": false,
  "neighbours": [
   "ff_stair_lobby",
   "gf_staircase_3",
   "ff_staircase_3",
   "ff_entrance",
   "ff_staircase_2",
   "ff_bedroom_02_entry",
   "ff_kitchen_entrance",
   "ff_hall"
  ]
 },
 {
  "id": "ff_staircase_2",
  "name": "Staircase 2",
  "camera": "Camera 030",
  "area": "First Floor",
  "image": "ff_staircase_2.jpg",
  "pos": [
   7.161,
   0.046,
   6.821
  ],
  "floorZ": 5.29,
  "placeholder": false,
  "neighbours": [
   "ff_staircase_3",
   "ff_staircase_1",
   "sf_entrance",
   "ff_kitchen_entrance"
  ]
 },
 {
  "id": "ff_staircase_3",
  "name": "Staircase 3",
  "camera": "Camera 031",
  "area": "First Floor",
  "image": "ff_staircase_3.jpg",
  "pos": [
   5.346,
   -0.567,
   7.389
  ],
  "floorZ": 5.998,
  "placeholder": false,
  "neighbours": [
   "sf_entrance",
   "tf_staircase_1",
   "ff_staircase_2",
   "ff_staircase_1",
   "sf_bedroom_03_entry",
   "sf_passage",
   "ff_kitchen_entrance"
  ]
 },
 {
  "id": "sf_bedroom_03_bath_entry",
  "name": "Bedroom 03 Bath Entry",
  "camera": "Camera 032",
  "area": "Second Floor",
  "image": "sf_bedroom_03_bath_entry.jpg",
  "pos": [
   6.076,
   -1.851,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "sf_bedroom_03_bath",
   "sf_bedroom_03_entry",
   "sf_bedroom_03"
  ]
 },
 {
  "id": "sf_bedroom_03_bath",
  "name": "Bedroom 03 Bathroom",
  "camera": "Camera 033",
  "area": "Second Floor",
  "image": "sf_bedroom_03_bath.jpg",
  "pos": [
   6.762,
   -3.068,
   8.036
  ],
  "floorZ": 6.667,
  "placeholder": false,
  "neighbours": [
   "sf_bedroom_03_bath_entry"
  ]
 },
 {
  "id": "sf_bedroom_03",
  "name": "Bedroom 03",
  "camera": "Camera 034",
  "area": "Second Floor",
  "image": "sf_bedroom_03.jpg",
  "pos": [
   2.966,
   -3.534,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "sf_bedroom_03_entry",
   "sf_bedroom_03_bath_entry"
  ]
 },
 {
  "id": "sf_bedroom_03_entry",
  "name": "Bedroom 03 Entry",
  "camera": "Camera 035",
  "area": "Second Floor",
  "image": "sf_bedroom_03_entry.jpg",
  "pos": [
   3.04,
   -1.184,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "sf_entrance",
   "sf_lobby",
   "sf_bedroom_03",
   "ff_staircase_3",
   "tf_staircase_1",
   "sf_bedroom_03_bath_entry",
   "sf_passage"
  ]
 },
 {
  "id": "sf_entrance",
  "name": "Second Floor Entrance",
  "camera": "Camera 036",
  "area": "Second Floor",
  "image": "sf_entrance.jpg",
  "pos": [
   3.698,
   -0.272,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "sf_bedroom_03_entry",
   "sf_lobby",
   "ff_staircase_3",
   "tf_staircase_1",
   "sf_passage",
   "sf_bedroom_03",
   "ff_staircase_2",
   "sf_bedroom_04"
  ]
 },
 {
  "id": "sf_lobby",
  "name": "Lobby",
  "camera": "Camera 037",
  "area": "Second Floor",
  "image": "sf_lobby.jpg",
  "pos": [
   2.278,
   0.206,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "sf_entrance",
   "sf_bedroom_03_entry",
   "sf_passage",
   "tf_staircase_1",
   "ff_staircase_3"
  ]
 },
 {
  "id": "sf_passage",
  "name": "Passage",
  "camera": "Camera 038",
  "area": "Second Floor",
  "image": "sf_passage.jpg",
  "pos": [
   2.752,
   2.501,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "sf_bedroom_04",
   "sf_lobby",
   "sf_entrance",
   "tf_staircase_1",
   "sf_bedroom_03_entry",
   "tf_staircase_3"
  ]
 },
 {
  "id": "sf_bedroom_04_wardrobe",
  "name": "Bedroom 04 Wardrobe",
  "camera": "Camera 040",
  "area": "Second Floor",
  "image": "sf_bedroom_04_wardrobe.jpg",
  "pos": [
   1.781,
   4.024,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "sf_bedroom_04"
  ]
 },
 {
  "id": "sf_bedroom_04",
  "name": "Bedroom 04",
  "camera": "Camera 041",
  "area": "Second Floor",
  "image": "sf_bedroom_04.jpg",
  "pos": [
   3.931,
   4.382,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "sf_bedroom_04_wardrobe",
   "sf_passage",
   "sf_entrance"
  ]
 },
 {
  "id": "tf_staircase_1",
  "name": "Terrace Staircase 01",
  "camera": "Camera 042",
  "area": "Terrace",
  "image": "tf_staircase_1.jpg",
  "pos": [
   5.358,
   0.595,
   8.874
  ],
  "floorZ": 7.483,
  "placeholder": false,
  "neighbours": [
   "ff_staircase_3",
   "tf_staircase_3",
   "sf_entrance",
   "tf_staircase_2",
   "sf_bedroom_03_entry",
   "sf_lobby",
   "sf_passage"
  ]
 },
 {
  "id": "tf_staircase_2",
  "name": "Terrace Staircase 02",
  "camera": "Camera 043",
  "area": "Terrace",
  "image": "tf_staircase_2.jpg",
  "pos": [
   7.175,
   -0.141,
   9.762
  ],
  "floorZ": 8.272,
  "placeholder": false,
  "neighbours": [
   "tf_staircase_3",
   "tf_staircase_1",
   "sf_lobby"
  ]
 },
 {
  "id": "tf_staircase_3",
  "name": "Terrace Staircase 03",
  "camera": "Camera 044",
  "area": "Terrace",
  "image": "tf_staircase_3.jpg",
  "pos": [
   5.303,
   -0.57,
   10.369
  ],
  "floorZ": 8.979,
  "placeholder": false,
  "neighbours": [
   "tf_terrace_lobby",
   "tf_staircase_1",
   "tf_staircase_2",
   "tf_back_terrace_view",
   "sf_passage"
  ]
 },
 {
  "id": "tf_terrace_lobby",
  "name": "Terrace Lobby",
  "camera": "Camera 045",
  "area": "Terrace",
  "image": "tf_terrace_lobby.jpg",
  "pos": [
   3.606,
   -0.495,
   11.047
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "tf_staircase_3",
   "tf_back_terrace_view",
   "tf_front_terrace_view",
   "tf_staircase_1"
  ]
 },
 {
  "id": "tf_back_terrace_view",
  "name": "Back Terrace View",
  "camera": "Camera 046",
  "area": "Terrace",
  "image": "tf_back_terrace_view.jpg",
  "pos": [
   3.403,
   1.438,
   11.047
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "tf_terrace_lobby",
   "tf_terrace_entry",
   "tf_staircase_3"
  ]
 },
 {
  "id": "tf_terrace_entry",
  "name": "Terrace Entry",
  "camera": "Camera 048",
  "area": "Terrace",
  "image": "tf_terrace_entry.jpg",
  "pos": [
   1.134,
   2.537,
   11.047
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "tf_back_terrace_view",
   "tf_terrace_02"
  ]
 },
 {
  "id": "tf_terrace_02",
  "name": "Terrace 02",
  "camera": "Camera 049",
  "area": "Terrace",
  "image": "tf_terrace_02.jpg",
  "pos": [
   3.144,
   4.542,
   11.195
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "tf_terrace_entry",
   "tf_roof_deck",
   "tf_terrace_03"
  ]
 },
 {
  "id": "tf_front_terrace_view",
  "name": "Front Terrace View",
  "camera": "Camera 050",
  "area": "Terrace",
  "image": "tf_front_terrace_view.jpg",
  "pos": [
   3.166,
   -2.474,
   11.047
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "tf_terrace_lobby",
   "tf_terrace_walkway",
   "tf_terrace_01"
  ]
 },
 {
  "id": "tf_terrace_walkway",
  "name": "Terrace Walkway",
  "camera": "Camera 051",
  "area": "Terrace",
  "image": "tf_terrace_walkway.jpg",
  "pos": [
   0.904,
   -2.474,
   11.047
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "tf_front_terrace_view"
  ]
 },
 {
  "id": "tf_terrace_01",
  "name": "Terrace 01 (Seating)",
  "camera": "Camera 054",
  "area": "Terrace",
  "image": "tf_terrace_01.jpg",
  "pos": [
   5.933,
   -3.441,
   11.195
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "tf_front_terrace_view",
   "tf_terrace_03"
  ]
 },
 {
  "id": "tf_roof_deck",
  "name": "Roof Deck",
  "camera": "Camera 055",
  "area": "Terrace",
  "image": "tf_roof_deck.jpg",
  "pos": [
   6.224,
   2.872,
   13.61
  ],
  "floorZ": 12.487,
  "placeholder": false,
  "neighbours": [
   "tf_terrace_03",
   "tf_terrace_02"
  ]
 },
 {
  "id": "tf_terrace_03",
  "name": "Terrace 03",
  "camera": "Camera 056",
  "area": "Terrace",
  "image": "tf_terrace_03.jpg",
  "pos": [
   3.863,
   0.56,
   13.61
  ],
  "floorZ": 12.356,
  "placeholder": false,
  "neighbours": [
   "tf_roof_deck",
   "tf_terrace_02",
   "tf_terrace_01"
  ]
 }
];
