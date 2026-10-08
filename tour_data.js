// Generated from the Blender scene (camera positions in Blender metres, Z-up).
// neighbours = circles shown at that camera (walk graph from line-of-sight + same-floor rooms).
window.TOUR_SCENES = [
 {
  "id": "pathway_01",
  "name": "Pathway 01",
  "camera": "Camera 01",
  "area": "Outdoor",
  "image": "pathway_01.jpg",
  "pos": [
   2.792,
   -66.566,
   1.7
  ],
  "floorZ": 0.0,
  "placeholder": false,
  "neighbours": [
   "pathway_02",
   "turf"
  ]
 },
 {
  "id": "turf",
  "name": "Turf",
  "camera": "Camera 02",
  "area": "Turf",
  "image": "turf.jpg",
  "pos": [
   1.855,
   -43.501,
   6.806
  ],
  "floorZ": 4.864,
  "placeholder": false,
  "neighbours": [
   "pathway_02",
   "pathway_03",
   "pathway_01",
   "pathway_04"
  ]
 },
 {
  "id": "pathway_02",
  "name": "Pathway 02",
  "camera": "Camera 03",
  "area": "Outdoor",
  "image": "pathway_02.jpg",
  "pos": [
   2.792,
   -46.899,
   1.7
  ],
  "floorZ": -0.0,
  "placeholder": false,
  "neighbours": [
   "turf",
   "pathway_01",
   "pathway_03"
  ]
 },
 {
  "id": "pathway_03",
  "name": "Pathway 03",
  "camera": "Camera 04",
  "area": "Outdoor",
  "image": "pathway_03.jpg",
  "pos": [
   2.792,
   -27.09,
   1.7
  ],
  "floorZ": 0.0,
  "placeholder": false,
  "neighbours": [
   "turf",
   "pathway_04",
   "pathway_02"
  ]
 },
 {
  "id": "pathway_04",
  "name": "Pathway 04",
  "camera": "Camera 05",
  "area": "Outdoor",
  "image": "pathway_04.jpg",
  "pos": [
   2.792,
   -9.342,
   1.7
  ],
  "floorZ": 0.0,
  "placeholder": false,
  "neighbours": [
   "ground_floor_entrance",
   "pathway_03",
   "turf"
  ]
 },
 {
  "id": "ground_floor_entrance",
  "name": "Ground Floor Entrance",
  "camera": "Camera 06",
  "area": "Ground Floor",
  "image": "ground_floor_entrance.jpg",
  "pos": [
   2.815,
   0.369,
   2.048
  ],
  "floorZ": 0.656,
  "placeholder": false,
  "neighbours": [
   "multipurpose_room",
   "ground_floor_steps",
   "pathway_04"
  ]
 },
 {
  "id": "multipurpose_room",
  "name": "Multipurpose Room",
  "camera": "Camera 07",
  "area": "Ground Floor",
  "image": "multipurpose_room.jpg",
  "pos": [
   4.735,
   3.642,
   2.048
  ],
  "floorZ": 0.656,
  "placeholder": false,
  "neighbours": [
   "maids_room",
   "ground_floor_entrance"
  ]
 },
 {
  "id": "maids_room",
  "name": "Maid's Room",
  "camera": "Camera 08",
  "area": "Ground Floor",
  "image": "maids_room.jpg",
  "pos": [
   1.816,
   5.109,
   2.048
  ],
  "floorZ": 0.66,
  "placeholder": false,
  "neighbours": [
   "multipurpose_room"
  ]
 },
 {
  "id": "ground_floor_steps",
  "name": "Ground Floor Steps",
  "camera": "Camera 09",
  "area": "Ground Floor",
  "image": "ground_floor_steps.jpg",
  "pos": [
   7.076,
   0.071,
   3.791
  ],
  "floorZ": 2.262,
  "placeholder": false,
  "neighbours": [
   "first_floor_entrance",
   "ground_floor_entrance"
  ]
 },
 {
  "id": "first_floor_entrance",
  "name": "First Floor Entrance",
  "camera": "Camera 10",
  "area": "First Floor",
  "image": "first_floor_entrance.jpg",
  "pos": [
   3.18,
   0.071,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "hall",
   "kitchen",
   "ground_floor_steps",
   "bedroom_01",
   "first_floor_steps"
  ]
 },
 {
  "id": "hall",
  "name": "Hall",
  "camera": "Camera 11",
  "area": "First Floor",
  "image": "hall.jpg",
  "pos": [
   2.847,
   -2.693,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "first_floor_entrance"
  ]
 },
 {
  "id": "bedroom_01",
  "name": "Bedroom 01",
  "camera": "Camera 12",
  "area": "First Floor",
  "image": "bedroom_01.jpg",
  "pos": [
   5.126,
   3.792,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "kitchen",
   "first_floor_entrance"
  ]
 },
 {
  "id": "kitchen",
  "name": "Kitchen",
  "camera": "Camera 13",
  "area": "First Floor",
  "image": "kitchen.jpg",
  "pos": [
   1.555,
   3.154,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "first_floor_entrance",
   "bedroom_01"
  ]
 },
 {
  "id": "first_floor_steps",
  "name": "First Floor Steps",
  "camera": "Camera 14",
  "area": "First Floor",
  "image": "first_floor_steps.jpg",
  "pos": [
   7.161,
   0.046,
   6.821
  ],
  "floorZ": 5.29,
  "placeholder": false,
  "neighbours": [
   "first_floor_entrance",
   "second_floor_entrance"
  ]
 },
 {
  "id": "second_floor_entrance",
  "name": "Second Floor Entrance",
  "camera": "Camera 15",
  "area": "Second Floor",
  "image": "second_floor_entrance.jpg",
  "pos": [
   2.867,
   0.137,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "bathroom",
   "bedroom_02",
   "bedroom_03",
   "first_floor_steps",
   "second_floor_steps"
  ]
 },
 {
  "id": "bedroom_02",
  "name": "Bedroom 02",
  "camera": "Camera 16",
  "area": "Second Floor",
  "image": "bedroom_02.jpg",
  "pos": [
   2.966,
   -3.728,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "second_floor_entrance"
  ]
 },
 {
  "id": "bedroom_03",
  "name": "Bedroom 03",
  "camera": "Camera 17",
  "area": "Second Floor",
  "image": "bedroom_03.jpg",
  "pos": [
   3.832,
   4.242,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "bathroom",
   "second_floor_entrance"
  ]
 },
 {
  "id": "bathroom",
  "name": "Bathroom",
  "camera": "Camera 18",
  "area": "Second Floor",
  "image": "bathroom.jpg",
  "pos": [
   1.282,
   2.145,
   8.036
  ],
  "floorZ": 6.673,
  "placeholder": false,
  "neighbours": [
   "second_floor_entrance",
   "bedroom_03"
  ]
 },
 {
  "id": "second_floor_steps",
  "name": "Second Floor Steps",
  "camera": "Camera 19",
  "area": "Second Floor",
  "image": "second_floor_steps.jpg",
  "pos": [
   7.175,
   -0.141,
   9.762
  ],
  "floorZ": 8.272,
  "placeholder": false,
  "neighbours": [
   "third_floor_entrance",
   "second_floor_entrance"
  ]
 },
 {
  "id": "third_floor_entrance",
  "name": "Third Floor Entrance",
  "camera": "Camera 20",
  "area": "Third Floor",
  "image": "third_floor_entrance.jpg",
  "pos": [
   3.17,
   0.225,
   11.195
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "terrace_03",
   "terrace_01",
   "second_floor_steps",
   "terrace_02"
  ]
 },
 {
  "id": "terrace_01",
  "name": "Terrace 01",
  "camera": "Camera 21",
  "area": "Third Floor",
  "image": "terrace_01.jpg",
  "pos": [
   5.591,
   -3.154,
   11.195
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "third_floor_entrance",
   "terrace_03"
  ]
 },
 {
  "id": "terrace_02",
  "name": "Terrace 02",
  "camera": "Camera 22",
  "area": "Third Floor",
  "image": "terrace_02.jpg",
  "pos": [
   3.144,
   4.542,
   11.195
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "third_floor_entrance",
   "terrace_03"
  ]
 },
 {
  "id": "terrace_03",
  "name": "Terrace 03",
  "camera": "Camera 23",
  "area": "Third Floor",
  "image": "terrace_03.jpg",
  "pos": [
   4.64,
   1.206,
   13.61
  ],
  "floorZ": 12.356,
  "placeholder": false,
  "neighbours": [
   "third_floor_entrance",
   "terrace_02",
   "terrace_01"
  ]
 }
];
