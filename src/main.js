import "./assets/css/style.css";
import { musicBase } from "./js/musicBase.js";
import { playerLogic } from "./js/playerLogic.js";

const prevBtn = document.querySelector(".prev"),
    playBtn = document.querySelector(".play"),
    pauseBtn = document.querySelector(".pause"),
    nextBtn = document.querySelector(".next");


playerLogic.musicInit(musicBase[playerLogic.currentSong]);

playBtn.onclick = () => {
    playerLogic.musicPlay(playBtn, pauseBtn);
}
pauseBtn.onclick = () => playerLogic.musicPause(playBtn, pauseBtn);
nextBtn.onclick = () => playerLogic.nextSong(playBtn, pauseBtn);
prevBtn.onclick = () => playerLogic.prevSong(playBtn, pauseBtn);
