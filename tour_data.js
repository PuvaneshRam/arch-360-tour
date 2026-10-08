// Generated from the Blender scene (camera positions in Blender metres, Z-up).
// neighbours = circles shown at that camera (walk graph from line-of-sight + same-floor rooms).
window.TOUR_SCENES = [
 {
  "id": "camera_001",
  "name": "Camera 01",
  "area": "Outdoor",
  "pos": [
   2.792,
   -66.566,
   1.7
  ],
  "floorZ": 0.0,
  "placeholder": false,
  "neighbours": [
   "camera_003",
   "camera_002"
  ]
 },
 {
  "id": "camera_002",
  "name": "Camera 02",
  "area": "Turf",
  "pos": [
   1.855,
   -43.501,
   6.806
  ],
  "floorZ": 4.864,
  "placeholder": false,
  "neighbours": [
   "camera_003",
   "camera_004",
   "camera_001",
   "camera_005"
  ]
 },
 {
  "id": "camera_003",
  "name": "Camera 03",
  "area": "Outdoor",
  "pos": [
   2.792,
   -46.899,
   1.7
  ],
  "floorZ": -0.0,
  "placeholder": false,
  "neighbours": [
   "camera_002",
   "camera_001",
   "camera_004"
  ]
 },
 {
  "id": "camera_004",
  "name": "Camera 04",
  "area": "Outdoor",
  "pos": [
   2.792,
   -27.09,
   1.7
  ],
  "floorZ": 0.0,
  "placeholder": false,
  "neighbours": [
   "camera_002",
   "camera_005",
   "camera_003"
  ]
 },
 {
  "id": "camera_005",
  "name": "Camera 05",
  "area": "Outdoor",
  "pos": [
   2.792,
   -9.342,
   1.7
  ],
  "floorZ": 0.0,
  "placeholder": false,
  "neighbours": [
   "camera_006",
   "camera_004",
   "camera_002"
  ]
 },
 {
  "id": "camera_006",
  "name": "Camera 06",
  "area": "Ground Floor",
  "pos": [
   2.815,
   0.369,
   2.048
  ],
  "floorZ": 0.656,
  "placeholder": false,
  "neighbours": [
   "camera_007",
   "camera_009",
   "camera_005"
  ]
 },
 {
  "id": "camera_007",
  "name": "Camera 07",
  "area": "Ground Floor",
  "pos": [
   4.735,
   3.642,
   2.048
  ],
  "floorZ": 0.656,
  "placeholder": false,
  "neighbours": [
   "camera_008",
   "camera_006"
  ]
 },
 {
  "id": "camera_008",
  "name": "Camera 08",
  "area": "Ground Floor",
  "pos": [
   1.816,
   5.109,
   2.048
  ],
  "floorZ": 0.66,
  "placeholder": false,
  "neighbours": [
   "camera_007"
  ]
 },
 {
  "id": "camera_009",
  "name": "Camera 09",
  "area": "Ground Floor",
  "pos": [
   7.076,
   0.071,
   3.791
  ],
  "floorZ": 2.262,
  "placeholder": false,
  "neighbours": [
   "camera_010",
   "camera_006"
  ]
 },
 {
  "id": "camera_010",
  "name": "Camera 10",
  "area": "First Floor",
  "pos": [
   3.18,
   0.071,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "camera_011",
   "camera_013",
   "camera_009",
   "camera_012",
   "camera_014"
  ]
 },
 {
  "id": "camera_011",
  "name": "Camera 11",
  "area": "First Floor",
  "pos": [
   2.847,
   -2.693,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "camera_010"
  ]
 },
 {
  "id": "camera_012",
  "name": "Camera 12",
  "area": "First Floor",
  "pos": [
   5.126,
   3.792,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "camera_013",
   "camera_010"
  ]
 },
 {
  "id": "camera_013",
  "name": "Camera 13",
  "area": "First Floor",
  "pos": [
   1.555,
   3.154,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "camera_010",
   "camera_012"
  ]
 },
 {
  "id": "camera_014",
  "name": "Camera 14",
  "area": "First Floor",
  "pos": [
   7.161,
   0.046,
   6.821
  ],
  "floorZ": 5.29,
  "placeholder": false,
  "neighbours": [
   "camera_010",
   "camera_015"
  ]
 },
 {
  "id": "camera_015",
  "name": "Camera 15",
  "area": "Second Floor",
  "pos": [
   2.867,
   0.137,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "camera_018",
   "camera_016",
   "camera_017",
   "camera_014",
   "camera_019"
  ]
 },
 {
  "id": "camera_016",
  "name": "Camera 16",
  "area": "Second Floor",
  "pos": [
   2.966,
   -3.728,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "camera_015"
  ]
 },
 {
  "id": "camera_017",
  "name": "Camera 17",
  "area": "Second Floor",
  "pos": [
   3.832,
   4.242,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "camera_018",
   "camera_015"
  ]
 },
 {
  "id": "camera_018",
  "name": "Camera 18",
  "area": "Second Floor",
  "pos": [
   1.282,
   2.145,
   8.036
  ],
  "floorZ": 6.673,
  "placeholder": false,
  "neighbours": [
   "camera_015",
   "camera_017"
  ]
 },
 {
  "id": "camera_019",
  "name": "Camera 19",
  "area": "Second Floor",
  "pos": [
   7.175,
   -0.141,
   9.762
  ],
  "floorZ": 8.272,
  "placeholder": false,
  "neighbours": [
   "camera_020",
   "camera_015"
  ]
 },
 {
  "id": "camera_020",
  "name": "Camera 20",
  "area": "Third Floor",
  "pos": [
   3.17,
   0.225,
   11.195
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "camera_023",
   "camera_021",
   "camera_019",
   "camera_022"
  ]
 },
 {
  "id": "camera_021",
  "name": "Camera 21",
  "area": "Third Floor",
  "pos": [
   5.591,
   -3.154,
   11.195
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "camera_020",
   "camera_023"
  ]
 },
 {
  "id": "camera_022",
  "name": "Camera 22",
  "area": "Third Floor",
  "pos": [
   3.144,
   4.542,
   11.195
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "camera_020",
   "camera_023"
  ]
 },
 {
  "id": "camera_023",
  "name": "Camera 23",
  "area": "Third Floor",
  "pos": [
   4.64,
   1.206,
   13.61
  ],
  "floorZ": 12.356,
  "placeholder": false,
  "neighbours": [
   "camera_020",
   "camera_022",
   "camera_021"
  ]
 }
];
