const fs = require("node:fs")
const path = require("node:path")

const lagu = ["Ed Sheeran - Thinking Out Loud.mp3",
    "Ed Sheeran - Shape of You.mp3",
    "Ed Sheeran - Perfect.mp3",
    "Bruno Mars - Grenade.mp3",
    "Bruno Mars - Finesse.mp3",
    "Bruno Mars - Just the Way You Are.mp3",
    "Ariana Grande - 7 rings.mp3",
    "Ariana Grande - Into You.mp3",
    "Ariana Grande - thank u, next.mp3",
    "Billie Eilish - bad guy.mp3",
    "Billie Eilish - WILDFLOWER.mp3",
    "Billie Eilish - ocean eyes.mp3",
    "The Weeknd - Blinding Lights.mp3",
    "The Weeknd - Save Your Tears.mp3",
    "The Weeknd - Starboy.mp3"]

for (let i = 0; i < lagu.length; i++) {
    fs.writeFile(lagu[i],"",function(){})
}