import "./assets/css/style.css";
import WaveSurfer from "wavesurfer.js";
import { musicBase } from "./js/musicBase.js";
import { playerLogic } from "./js/playerLogic.js";
import song0 from "./assets/music/Enter Shikari - The King.mp3"

const prevBtn = document.querySelector(".prev"),
    playBtn = document.querySelector(".play"),
    pauseBtn = document.querySelector(".pause"),
    nextBtn = document.querySelector(".next");

// const wavesurfer = WaveSurfer.create({
//     container: '.visual-block',
//     waveColor: '#4F4A85',
//     progressColor: '#383351',
//     url: song0,
// })

playerLogic.musicInit(musicBase[playerLogic.currentSong]);

playBtn.onclick = () => {
    playerLogic.musicPlay(playBtn, pauseBtn);
    // wavesurfer.play();
}
pauseBtn.onclick = () => playerLogic.musicPause(playBtn, pauseBtn);
nextBtn.onclick = () => playerLogic.nextSong(playBtn, pauseBtn);
prevBtn.onclick = () => playerLogic.prevSong(playBtn, pauseBtn);
