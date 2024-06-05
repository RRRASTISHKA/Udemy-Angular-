interface AudioPlayer{
audioVolume:number;
songDuration:number;
song:string;
details:Details;
}

interface Details{
    author:string;
    year:number;
}

const audioPlayer: AudioPlayer={
    audioVolume: 90,
    songDuration: 26,
    song: "Mess",
    details: {
        author:"Ed Sheeran",
        year:2015
    }
}

const song="New Song"; 

//const{song:anotherSong,songDuration:duration}=audioPlayer;

//console.log("Song: ", anotherSong);
//console.log("Song: ", duration);
//console.log("Song: ", audioPlayer.details.author);



const [ , , trunks]: string[]=["Goku","VEgeta","Trunk"];
//const trunk= dbz[3] || "No hay personaje";

console.log("Personaje 3:", trunks);





export{};