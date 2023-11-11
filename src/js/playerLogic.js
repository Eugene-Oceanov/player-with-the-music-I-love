import { musicBase } from "./musicBase";

export const playerLogic = {
    audio: document.querySelector(".audio"),
    visualBlock: document.querySelector(".visual-block"),
    titleWrapper: document.querySelector(".title-wrapper"),
    songTitle: document.querySelector(".song-title"),
    authorWrapper: document.querySelector(".author-wrapper"),
    songAuthor: document.querySelector(".song-author"),
    albumInfo: document.querySelector(".album-info"),
    progressOuter: document.querySelector(".progress-bar-outer"),
    progressInner: document.querySelector(".progress-bar-inner"),
    songTimer: document.querySelector(".timer"),
    songDuration: document.querySelector(".duration"),
    playBtn: document.querySelector(".play"),
    pauseBtn: document.querySelector(".pause"),
    duration: null,
    currentSong: 0,
    isPlayed: false,

    musicInit: function (item) {
        this.audio.src = item.file;
        this.songTitle.innerText = item.title;
        this.songAuthor.innerText = item.author;
        this.albumInfo.innerText = `${item.album} (${item.year})`;
        this.audio.onloadeddata = () => {
            this.songDuration.innerText = this.timeStr(this.audio.duration);
            this.getProgress();
        };
        this.visualBlock.style.background = `url("${item.cover}")  no-repeat center / cover`;
        this.rollText(this.titleWrapper, this.songTitle);
        this.rollText(this.authorWrapper, this.songAuthor);
    },

    musicPlay: function () {
        this.audio.play()
        this.isPlayed = true;
        this.playBtn.style.display = "none";
        this.pauseBtn.style.display = "block";

    },
    musicPause: function () {
        this.audio.pause();
        this.isPlayed = false;
        this.playBtn.style.display = "block";
        this.pauseBtn.style.display = "none";
    },

    prevSong: function () {
        this.currentSong--;
        if (this.currentSong < 0) this.currentSong = musicBase.length - 1;
        this.musicInit(musicBase[this.currentSong]);
        if (this.isPlayed === true) this.musicPlay();
    },

    nextSong: function () {
        this.currentSong++
        if (this.currentSong >= musicBase.length) this.currentSong = 0;
        this.musicInit(musicBase[this.currentSong]);
        if (this.isPlayed === true) {
            this.musicPlay();
        }
    },

    getProgress: function () {
        this.audio.addEventListener("timeupdate", (e) => {
            let { duration, currentTime } = e.srcElement;
            this.songTimer.innerText = this.timeStr(currentTime)
            this.progressInner.style.width = `${currentTime / duration * 100}%`;
            if (currentTime == duration) {
                if (this.isPlayed) this.nextSong();
                else return;
            }
        })
    },

    setProgress: function (e) {
        let offsetX = e.offsetX;
        let duration = this.audio.duration;
        this.audio.currentTime = (offsetX / this.progressOuter.clientWidth) * duration;
        this.getProgress();
    },

    rollText: function (outer, inner) {
        inner.style.width = "fit-content";
        inner.style.animation = "";
        inner.style.transform = "translate(0, 0)";
        inner.style.width = "fit-content";
        if (inner.clientWidth > outer.clientWidth) {
            document.body.style.cssText = `--rollText: -${this.songTitle.clientWidth - outer.clientWidth}px`;
            inner.style.animation = "rollText 10s ease infinite";
        }
    },

    changeVolume: function (value) {
        this.audio.volume = value;
    },

    timeStr: function (time) {
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time - (minutes * 60));
        if (seconds < 10) seconds = `0${seconds}`
        return `${minutes}:${seconds}`;
    },
}