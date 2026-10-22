import fs from 'node:fs';

const singers = [
  {
    name: "Ed Sheeran",
    songs: [
      "Thinking Out Loud",
      "Shape of You",
      "Perfect"
    ]
  },
  {
    name: "Bruno Mars",
    songs: [
      "Grenade",
      "Finesse",
      "Just the Way You Are",
    ]
  },
  {
    name: "Ariana Grande",
    songs: [
      "7 rings",
      "Into You",
      "thank u, next",
    ]
  },
  {
    name: "Billie Eilish",
    songs: [
      "bad guy",
      "WILDFLOWER",
      "ocean eyes",
    ]
  },
  {
    name: "The Weeknd",
    songs: [
      "Blinding Lights",
      "Save Your Tears",
      "Starboy"
    ]
  },
];

singers.forEach(artist => {
  let file = "";    
  artist.songs.forEach(song => {
    file = file.concat(artist.name, " - ", song, ".mp3");
    fs.writeFile(file, "", function(){
      console.log(`${file} berhasil dibuat.`);
    });
    file = "";
  });
});