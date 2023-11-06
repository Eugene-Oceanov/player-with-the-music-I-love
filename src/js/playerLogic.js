import { musicBase } from "./musicBase";

// const player = document.querySelector(".player");
// audio = document.querySelector(".audio"),
// visualBlock = document.querySelector(".visual-block"),
// songTitle = document.querySelector(".song-title"),
// songAuthor = document.querySelector(".author-title"),
// albumInfo = document.querySelector(".album-info");
// let

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
        this.audio.src = `./assets/music/${this.getFileName(item)}.mp3`;
    },
    musicPlay: function () {
        audio.play();
        isPlayed = true;
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
        console.log(1)
    },
    musicPause: function () {
        audio.pause();
        isPlayed = false;
        playBtn.style.display = "block";
        pauseBtn.style.display = "none";
    },

    prevSong: function () {
        currentSong--
        if (currentSong <= 0) currentSong = musicBase.length - 1;
        this.musicInit(musicBase[currentSong]);
        if (isPlayed === true) this.musicPlay();
    },

    nextSong: function () {
        currentSong++
        if (currentSong >= musicBase.length) currentSong = 0;
        this.musicInit(musicBase[currentSong]);
        if (isPlayed === true) this.musicPlay();
    },

    getFileName: function (item) {
        let fileName = `${item.author} - ${item.title}`;
        console.log(fileName)
        return fileName;
    }
}