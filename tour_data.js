// Generated from the Blender scene (camera positions in Blender metres, Z-up).
// neighbours = circles shown at that camera (walk graph from line-of-sight + same-floor rooms).
window.TOUR_SCENES = [
 {
  "id": "cam_001",
  "name": "Outdoor 01",
  "camera": "Camera 001",
  "area": "Outdoor",
  "image": "cam_001.jpg",
  "pos": [
   2.792,
   -66.566,
   1.7
  ],
  "floorZ": 0.0,
  "placeholder": false,
  "neighbours": [
   "cam_002",
   "cam_003"
  ]
 },
 {
  "id": "cam_002",
  "name": "Outdoor 02",
  "camera": "Camera 002",
  "area": "Outdoor",
  "image": "cam_002.jpg",
  "pos": [
   2.792,
   -46.899,
   1.7
  ],
  "floorZ": -0.0,
  "placeholder": false,
  "neighbours": [
   "cam_003",
   "cam_001",
   "cam_004"
  ]
 },
 {
  "id": "cam_003",
  "name": "Turf",
  "camera": "Camera 003",
  "area": "Outdoor",
  "image": "cam_003.jpg",
  "pos": [
   1.855,
   -43.501,
   6.806
  ],
  "floorZ": 4.864,
  "placeholder": false,
  "neighbours": [
   "cam_002",
   "cam_001",
   "cam_004",
   "cam_005"
  ]
 },
 {
  "id": "cam_004",
  "name": "Outdoor 03",
  "camera": "Camera 004",
  "area": "Outdoor",
  "image": "cam_004.jpg",
  "pos": [
   2.792,
   -14.441,
   1.7
  ],
  "floorZ": -0.0,
  "placeholder": false,
  "neighbours": [
   "cam_005",
   "cam_003",
   "cam_002"
  ]
 },
 {
  "id": "cam_005",
  "name": "Outdoor 04",
  "camera": "Camera 005",
  "area": "Outdoor",
  "image": "cam_005.jpg",
  "pos": [
   2.792,
   -9.529,
   1.7
  ],
  "floorZ": 0.0,
  "placeholder": false,
  "neighbours": [
   "cam_004",
   "cam_006",
   "cam_009",
   "cam_003"
  ]
 },
 {
  "id": "cam_006",
  "name": "Outdoor 05",
  "camera": "Camera 006",
  "area": "Outdoor",
  "image": "cam_006.jpg",
  "pos": [
   1.567,
   -3.917,
   1.559
  ],
  "floorZ": 0.129,
  "placeholder": false,
  "neighbours": [
   "cam_007",
   "cam_005",
   "cam_010"
  ]
 },
 {
  "id": "cam_007",
  "name": "Outdoor 06",
  "camera": "Camera 007",
  "area": "Outdoor",
  "image": "cam_007.jpg",
  "pos": [
   1.567,
   -2.199,
   2.04
  ],
  "floorZ": 0.574,
  "placeholder": false,
  "neighbours": [
   "cam_008",
   "cam_006",
   "cam_016",
   "cam_005"
  ]
 },
 {
  "id": "cam_008",
  "name": "Ground Floor 01",
  "camera": "Camera 008",
  "area": "Ground Floor",
  "image": "cam_008.jpg",
  "pos": [
   1.43,
   -0.511,
   2.048
  ],
  "floorZ": 0.686,
  "placeholder": false,
  "neighbours": [
   "cam_009",
   "cam_007",
   "cam_016",
   "cam_011"
  ]
 },
 {
  "id": "cam_009",
  "name": "Ground Floor 02",
  "camera": "Camera 009",
  "area": "Ground Floor",
  "image": "cam_009.jpg",
  "pos": [
   2.815,
   0.369,
   2.048
  ],
  "floorZ": 0.656,
  "placeholder": false,
  "neighbours": [
   "cam_008",
   "cam_010",
   "cam_016",
   "cam_011",
   "cam_005"
  ]
 },
 {
  "id": "cam_010",
  "name": "Ground Floor 03",
  "camera": "Camera 010",
  "area": "Ground Floor",
  "image": "cam_010.jpg",
  "pos": [
   4.926,
   1.862,
   2.048
  ],
  "floorZ": 0.656,
  "placeholder": false,
  "neighbours": [
   "cam_011",
   "cam_013",
   "cam_016",
   "cam_009",
   "cam_017",
   "cam_018",
   "cam_006"
  ]
 },
 {
  "id": "cam_011",
  "name": "Ground Floor 04",
  "camera": "Camera 011",
  "area": "Ground Floor",
  "image": "cam_011.jpg",
  "pos": [
   4.251,
   2.922,
   2.048
  ],
  "floorZ": 0.656,
  "placeholder": false,
  "neighbours": [
   "cam_010",
   "cam_012",
   "cam_013",
   "cam_009",
   "cam_016"
  ]
 },
 {
  "id": "cam_012",
  "name": "Ground Floor 05",
  "camera": "Camera 012",
  "area": "Ground Floor",
  "image": "cam_012.jpg",
  "pos": [
   5.181,
   4.283,
   2.048
  ],
  "floorZ": 0.656,
  "placeholder": false,
  "neighbours": [
   "cam_011",
   "cam_014"
  ]
 },
 {
  "id": "cam_013",
  "name": "Ground Floor 06",
  "camera": "Camera 013",
  "area": "Ground Floor",
  "image": "cam_013.jpg",
  "pos": [
   6.395,
   2.021,
   2.048
  ],
  "floorZ": 0.656,
  "placeholder": false,
  "neighbours": [
   "cam_010",
   "cam_011",
   "cam_009"
  ]
 },
 {
  "id": "cam_014",
  "name": "Ground Floor 07",
  "camera": "Camera 014",
  "area": "Ground Floor",
  "image": "cam_014.jpg",
  "pos": [
   2.557,
   3.123,
   2.048
  ],
  "floorZ": 0.656,
  "placeholder": false,
  "neighbours": [
   "cam_012"
  ]
 },
 {
  "id": "cam_016",
  "name": "Ground Floor 08",
  "camera": "Camera 016",
  "area": "Ground Floor",
  "image": "cam_016.jpg",
  "pos": [
   5.296,
   0.369,
   3.039
  ],
  "floorZ": 1.648,
  "placeholder": false,
  "neighbours": [
   "cam_018",
   "cam_010",
   "cam_017",
   "cam_009",
   "cam_019",
   "cam_011",
   "cam_024",
   "cam_008",
   "cam_007"
  ]
 },
 {
  "id": "cam_017",
  "name": "Ground Floor 09",
  "camera": "Camera 017",
  "area": "Ground Floor",
  "image": "cam_017.jpg",
  "pos": [
   7.076,
   0.071,
   3.791
  ],
  "floorZ": 2.262,
  "placeholder": false,
  "neighbours": [
   "cam_016",
   "cam_018",
   "cam_010",
   "cam_020",
   "cam_024"
  ]
 },
 {
  "id": "cam_018",
  "name": "Ground Floor 10",
  "camera": "Camera 018",
  "area": "Ground Floor",
  "image": "cam_018.jpg",
  "pos": [
   5.16,
   -0.579,
   4.558
  ],
  "floorZ": 3.044,
  "placeholder": false,
  "neighbours": [
   "cam_019",
   "cam_029",
   "cam_016",
   "cam_017",
   "cam_020",
   "cam_010",
   "cam_025",
   "cam_024"
  ]
 },
 {
  "id": "cam_019",
  "name": "First Floor 01",
  "camera": "Camera 019",
  "area": "First Floor",
  "image": "cam_019.jpg",
  "pos": [
   3.895,
   -0.639,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "cam_020",
   "cam_018",
   "cam_029",
   "cam_021",
   "cam_016",
   "cam_024",
   "cam_025"
  ]
 },
 {
  "id": "cam_020",
  "name": "First Floor 02",
  "camera": "Camera 020",
  "area": "First Floor",
  "image": "cam_020.jpg",
  "pos": [
   2.872,
   -0.005,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "cam_019",
   "cam_029",
   "cam_021",
   "cam_018",
   "cam_024",
   "cam_025",
   "cam_017",
   "cam_030",
   "cam_027"
  ]
 },
 {
  "id": "cam_021",
  "name": "First Floor 03",
  "camera": "Camera 021",
  "area": "First Floor",
  "image": "cam_021.jpg",
  "pos": [
   2.847,
   -2.227,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "cam_019",
   "cam_022",
   "cam_020",
   "cam_023",
   "cam_025"
  ]
 },
 {
  "id": "cam_022",
  "name": "First Floor 04",
  "camera": "Camera 022",
  "area": "First Floor",
  "image": "cam_022.jpg",
  "pos": [
   2.228,
   -4.202,
   4.663
  ],
  "floorZ": 3.271,
  "placeholder": false,
  "neighbours": [
   "cam_021",
   "cam_023",
   "cam_024"
  ]
 },
 {
  "id": "cam_023",
  "name": "First Floor 05",
  "camera": "Camera 023",
  "area": "First Floor",
  "image": "cam_023.jpg",
  "pos": [
   5.376,
   -3.243,
   4.663
  ],
  "floorZ": 3.271,
  "placeholder": false,
  "neighbours": [
   "cam_021",
   "cam_022"
  ]
 },
 {
  "id": "cam_024",
  "name": "First Floor 06",
  "camera": "Camera 024",
  "area": "First Floor",
  "image": "cam_024.jpg",
  "pos": [
   3.142,
   2.5,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "cam_028",
   "cam_020",
   "cam_029",
   "cam_019",
   "cam_016",
   "cam_018",
   "cam_031",
   "cam_017",
   "cam_030"
  ]
 },
 {
  "id": "cam_025",
  "name": "First Floor 07",
  "camera": "Camera 025",
  "area": "First Floor",
  "image": "cam_025.jpg",
  "pos": [
   4.181,
   2.953,
   5.047
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "cam_026",
   "cam_027",
   "cam_029",
   "cam_020",
   "cam_019",
   "cam_018"
  ]
 },
 {
  "id": "cam_026",
  "name": "First Floor 08",
  "camera": "Camera 026",
  "area": "First Floor",
  "image": "cam_026.jpg",
  "pos": [
   3.544,
   4.421,
   5.105
  ],
  "floorZ": 3.673,
  "placeholder": false,
  "neighbours": [
   "cam_025",
   "cam_027",
   "cam_029"
  ]
 },
 {
  "id": "cam_027",
  "name": "First Floor 09",
  "camera": "Camera 027",
  "area": "First Floor",
  "image": "cam_027.jpg",
  "pos": [
   5.439,
   4.911,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "cam_026",
   "cam_025",
   "cam_020"
  ]
 },
 {
  "id": "cam_028",
  "name": "First Floor 10",
  "camera": "Camera 028",
  "area": "First Floor",
  "image": "cam_028.jpg",
  "pos": [
   1.555,
   3.323,
   5.105
  ],
  "floorZ": 3.656,
  "placeholder": false,
  "neighbours": [
   "cam_024"
  ]
 },
 {
  "id": "cam_029",
  "name": "First Floor 11",
  "camera": "Camera 029",
  "area": "First Floor",
  "image": "cam_029.jpg",
  "pos": [
   4.807,
   0.487,
   5.761
  ],
  "floorZ": 4.239,
  "placeholder": false,
  "neighbours": [
   "cam_019",
   "cam_018",
   "cam_031",
   "cam_020",
   "cam_030",
   "cam_025",
   "cam_024",
   "cam_021"
  ]
 },
 {
  "id": "cam_030",
  "name": "First Floor 12",
  "camera": "Camera 030",
  "area": "First Floor",
  "image": "cam_030.jpg",
  "pos": [
   7.161,
   0.046,
   6.821
  ],
  "floorZ": 5.29,
  "placeholder": false,
  "neighbours": [
   "cam_031",
   "cam_029",
   "cam_036",
   "cam_024"
  ]
 },
 {
  "id": "cam_031",
  "name": "First Floor 13",
  "camera": "Camera 031",
  "area": "First Floor",
  "image": "cam_031.jpg",
  "pos": [
   5.346,
   -0.567,
   7.389
  ],
  "floorZ": 5.998,
  "placeholder": false,
  "neighbours": [
   "cam_036",
   "cam_042",
   "cam_030",
   "cam_029",
   "cam_035",
   "cam_038",
   "cam_024"
  ]
 },
 {
  "id": "cam_032",
  "name": "Second Floor 01",
  "camera": "Camera 032",
  "area": "Second Floor",
  "image": "cam_032.jpg",
  "pos": [
   6.076,
   -1.851,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "cam_033",
   "cam_035",
   "cam_034"
  ]
 },
 {
  "id": "cam_033",
  "name": "Second Floor 02",
  "camera": "Camera 033",
  "area": "Second Floor",
  "image": "cam_033.jpg",
  "pos": [
   6.762,
   -3.068,
   8.036
  ],
  "floorZ": 6.667,
  "placeholder": false,
  "neighbours": [
   "cam_032"
  ]
 },
 {
  "id": "cam_034",
  "name": "Second Floor 03",
  "camera": "Camera 034",
  "area": "Second Floor",
  "image": "cam_034.jpg",
  "pos": [
   2.966,
   -3.534,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "cam_035",
   "cam_032"
  ]
 },
 {
  "id": "cam_035",
  "name": "Second Floor 04",
  "camera": "Camera 035",
  "area": "Second Floor",
  "image": "cam_035.jpg",
  "pos": [
   3.04,
   -1.184,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "cam_036",
   "cam_037",
   "cam_034",
   "cam_031",
   "cam_042",
   "cam_032"
  ]
 },
 {
  "id": "cam_036",
  "name": "Second Floor 05",
  "camera": "Camera 036",
  "area": "Second Floor",
  "image": "cam_036.jpg",
  "pos": [
   3.698,
   -0.272,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "cam_037",
   "cam_035",
   "cam_031",
   "cam_042",
   "cam_038",
   "cam_034",
   "cam_030",
   "cam_041"
  ]
 },
 {
  "id": "cam_037",
  "name": "Second Floor 06",
  "camera": "Camera 037",
  "area": "Second Floor",
  "image": "cam_037.jpg",
  "pos": [
   2.719,
   0.206,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "cam_036",
   "cam_035",
   "cam_038",
   "cam_042",
   "cam_031",
   "cam_043"
  ]
 },
 {
  "id": "cam_038",
  "name": "Second Floor 07",
  "camera": "Camera 038",
  "area": "Second Floor",
  "image": "cam_038.jpg",
  "pos": [
   2.752,
   2.501,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "cam_041",
   "cam_037",
   "cam_036",
   "cam_042",
   "cam_031",
   "cam_044"
  ]
 },
 {
  "id": "cam_039",
  "name": "Second Floor 08",
  "camera": "Camera 039",
  "area": "Second Floor",
  "image": "cam_039.jpg",
  "pos": [
   1.28,
   2.235,
   8.036
  ],
  "floorZ": 6.673,
  "placeholder": false,
  "neighbours": [
   "cam_040"
  ]
 },
 {
  "id": "cam_040",
  "name": "Second Floor 09",
  "camera": "Camera 040",
  "area": "Second Floor",
  "image": "cam_040.jpg",
  "pos": [
   1.781,
   4.024,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "cam_039",
   "cam_041"
  ]
 },
 {
  "id": "cam_041",
  "name": "Second Floor 10",
  "camera": "Camera 041",
  "area": "Second Floor",
  "image": "cam_041.jpg",
  "pos": [
   3.931,
   4.382,
   8.036
  ],
  "floorZ": 6.656,
  "placeholder": false,
  "neighbours": [
   "cam_040",
   "cam_038",
   "cam_036"
  ]
 },
 {
  "id": "cam_042",
  "name": "Second Floor 11",
  "camera": "Camera 042",
  "area": "Second Floor",
  "image": "cam_042.jpg",
  "pos": [
   5.358,
   0.595,
   8.874
  ],
  "floorZ": 7.483,
  "placeholder": false,
  "neighbours": [
   "cam_031",
   "cam_044",
   "cam_036",
   "cam_043",
   "cam_037",
   "cam_046",
   "cam_045",
   "cam_035",
   "cam_038"
  ]
 },
 {
  "id": "cam_043",
  "name": "Second Floor 12",
  "camera": "Camera 043",
  "area": "Second Floor",
  "image": "cam_043.jpg",
  "pos": [
   7.175,
   -0.141,
   9.762
  ],
  "floorZ": 8.272,
  "placeholder": false,
  "neighbours": [
   "cam_044",
   "cam_042",
   "cam_046",
   "cam_037"
  ]
 },
 {
  "id": "cam_044",
  "name": "Second Floor 13",
  "camera": "Camera 044",
  "area": "Second Floor",
  "image": "cam_044.jpg",
  "pos": [
   5.303,
   -0.57,
   10.369
  ],
  "floorZ": 8.979,
  "placeholder": false,
  "neighbours": [
   "cam_045",
   "cam_042",
   "cam_043",
   "cam_046",
   "cam_038"
  ]
 },
 {
  "id": "cam_045",
  "name": "Third Floor 01",
  "camera": "Camera 045",
  "area": "Third Floor",
  "image": "cam_045.jpg",
  "pos": [
   3.606,
   -0.495,
   11.047
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "cam_046",
   "cam_044",
   "cam_050",
   "cam_042"
  ]
 },
 {
  "id": "cam_046",
  "name": "Third Floor 02",
  "camera": "Camera 046",
  "area": "Third Floor",
  "image": "cam_046.jpg",
  "pos": [
   3.403,
   0.857,
   11.047
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "cam_047",
   "cam_045",
   "cam_044",
   "cam_042",
   "cam_050",
   "cam_043"
  ]
 },
 {
  "id": "cam_047",
  "name": "Third Floor 03",
  "camera": "Camera 047",
  "area": "Third Floor",
  "image": "cam_047.jpg",
  "pos": [
   3.426,
   2.117,
   11.047
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "cam_046",
   "cam_048"
  ]
 },
 {
  "id": "cam_048",
  "name": "Third Floor 04",
  "camera": "Camera 048",
  "area": "Third Floor",
  "image": "cam_048.jpg",
  "pos": [
   1.134,
   2.537,
   11.047
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "cam_047",
   "cam_049"
  ]
 },
 {
  "id": "cam_049",
  "name": "Third Floor 05",
  "camera": "Camera 049",
  "area": "Third Floor",
  "image": "cam_049.jpg",
  "pos": [
   3.144,
   4.542,
   11.195
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "cam_048",
   "cam_055",
   "cam_056"
  ]
 },
 {
  "id": "cam_050",
  "name": "Third Floor 06",
  "camera": "Camera 050",
  "area": "Third Floor",
  "image": "cam_050.jpg",
  "pos": [
   3.166,
   -2.474,
   11.047
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "cam_045",
   "cam_051",
   "cam_054"
  ]
 },
 {
  "id": "cam_051",
  "name": "Third Floor 07",
  "camera": "Camera 051",
  "area": "Third Floor",
  "image": "cam_051.jpg",
  "pos": [
   0.904,
   -2.474,
   11.047
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "cam_052",
   "cam_050"
  ]
 },
 {
  "id": "cam_052",
  "name": "Third Floor 08",
  "camera": "Camera 052",
  "area": "Third Floor",
  "image": "cam_052.jpg",
  "pos": [
   1.229,
   -4.565,
   11.047
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "cam_051",
   "cam_053",
   "cam_054"
  ]
 },
 {
  "id": "cam_053",
  "name": "Third Floor 09",
  "camera": "Camera 053",
  "area": "Third Floor",
  "image": "cam_053.jpg",
  "pos": [
   4.711,
   -4.575,
   11.047
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "cam_054",
   "cam_052"
  ]
 },
 {
  "id": "cam_054",
  "name": "Third Floor 10",
  "camera": "Camera 054",
  "area": "Third Floor",
  "image": "cam_054.jpg",
  "pos": [
   5.933,
   -3.441,
   11.195
  ],
  "floorZ": 9.656,
  "placeholder": false,
  "neighbours": [
   "cam_053",
   "cam_050",
   "cam_052",
   "cam_056"
  ]
 },
 {
  "id": "cam_055",
  "name": "Third Floor 11",
  "camera": "Camera 055",
  "area": "Third Floor",
  "image": "cam_055.jpg",
  "pos": [
   6.224,
   2.872,
   13.61
  ],
  "floorZ": 12.487,
  "placeholder": false,
  "neighbours": [
   "cam_056",
   "cam_049"
  ]
 },
 {
  "id": "cam_056",
  "name": "Third Floor 12",
  "camera": "Camera 056",
  "area": "Third Floor",
  "image": "cam_056.jpg",
  "pos": [
   3.863,
   0.56,
   13.61
  ],
  "floorZ": 12.356,
  "placeholder": false,
  "neighbours": [
   "cam_055",
   "cam_049",
   "cam_054"
  ]
 }
];
