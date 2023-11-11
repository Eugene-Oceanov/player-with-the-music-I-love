import "./assets/css/style.css";
import { musicBase } from "./js/musicBase.js";
import { playerLogic } from "./js/playerLogic.js";

const prevBtn = document.querySelector(".prev"),
    playBtn = document.querySelector(".play"),
    pauseBtn = document.querySelector(".pause"),
    nextBtn = document.querySelector(".next"),
    progressOuter = document.querySelector(".progress-bar-outer"),
    volumeRange = document.querySelector(".change-volume__input");

window.onload = () => {
    playerLogic.audio.volume = 0.5;
    playerLogic.musicInit(musicBase[playerLogic.currentSong]);
    playBtn.addEventListener("click", () => playerLogic.musicPlay(playBtn, pauseBtn));
    pauseBtn.addEventListener("click", () => playerLogic.musicPause(playBtn, pauseBtn));
    nextBtn.addEventListener("click", () => playerLogic.nextSong(playBtn, pauseBtn));
    prevBtn.addEventListener("click", () => playerLogic.prevSong(playBtn, pauseBtn));
    progressOuter.addEventListener("click", (e) => playerLogic.setProgress(e));
    volumeRange.addEventListener("input", () => playerLogic.changeVolume(volumeRange.value))
}
