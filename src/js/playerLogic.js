import { musicBase } from "./musicBase";
import WaveSurfer from "wavesurfer.js";


export const playerLogic = {
    audio: document.querySelector(".audio"),
    visualBlock: document.querySelector(".visual-block"),
    songTitle: document.querySelector(".song-title"),
    songAuthor: document.querySelector(".author-title"),
    albumInfo: document.querySelector(".album-info"),
    currentSong: 0,
    isPlayed: false,

    musicInit: function (item) {
        this.songTitle.innerText = item.title;
        this.songAuthor.innerText = item.author;
        this.albumInfo.innerText = `${item.album} (${item.year})`
        this.audio.src = item.file;
    },

    musicPlay: function (playBtn, pauseBtn) {
        this.audio.play()
        this.isPlayed = true;
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
    },
    musicPause: function (playBtn, pauseBtn) {
        this.audio.pause();
        this.isPlayed = false;
        playBtn.style.display = "block";
        pauseBtn.style.display = "none";
    },

    prevSong: function (playBtn, pauseBtn) {
        this.currentSong--;
        if (this.currentSong <= 0) this.currentSong = musicBase.length - 1;
        this.musicInit(musicBase[this.currentSong]);
        if (this.isPlayed === true) this.musicPlay(playBtn, pauseBtn);
    },

    nextSong: function (playBtn, pauseBtn) {
        this.currentSong++
        if (this.currentSong >= musicBase.length) this.currentSong = 0;
        this.musicInit(musicBase[this.currentSong]);
        if (this.isPlayed === true) this.musicPlay(playBtn, pauseBtn);
    },

    getFileName: function (item) {
        let fileName = `${item.author} - ${item.title}`;
        console.log(fileName)
        return fileName;
    },
}