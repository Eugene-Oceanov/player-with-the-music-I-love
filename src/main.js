import { musicBase } from "./js/musicBase.js"
// import { playerLogic } from "./js/playerLogic.js"
import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'

const player = document.querySelector(".player"),
    audio = document.querySelector(".audio"),
    visualBlock = document.querySelector(".visual-block"),
    songTitle = document.querySelector(".song-title"),
    songAuthor = document.querySelector(".author-title"),
    albumInfo = document.querySelector(".album-info"),
    progressBarOuter = document.querySelector(".progress-bar-outer"),
    progressBarInnerr = document.querySelector(".progress-bar-inner"),
    prevBtn = document.querySelector(".prev"),
    playBtn = document.querySelector(".play"),
    pauseBtn = document.querySelector(".pause"),
    nextBtn = document.querySelector(".next");

const wavesurfer = WaveSurfer.create({
    container: '.visual-block',
    waveColor: '#4F4A85',
    progressColor: '#fff',
    url: './assets/music/Enter Shikari - The King.mp3',
})

let currentSong = 0,
    isPlayed = false;

musicInit(musicBase[currentSong]);

playBtn.onclick = () => musicPlay();
pauseBtn.onclick = () => musicPause();
nextBtn.onclick = () => nextSong();
prevBtn.onclick = () => prevSong();


function musicInit(item) {
    songTitle.innerText = item.title;
    songAuthor.innerText = item.author;
    albumInfo.innerText = `${item.album} (${item.year})`
    audio.src = `./assets/music/${getFileName(item)}.mp3`;
}

function musicPlay() {
    // audio.play();
    isPlayed = true
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    wavesurfer.on('interaction', () => {
        // audio.play();
        wavesurfer.play()
    })
}

function musicPause() {
    // audio.pause();
    isPlayed = false;
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";
    wavesurfer.on('interaction', () => {
        wavesurfer.stop()
    })
}

function nextSong() {
    currentSong++
    if (currentSong >= musicBase.length) currentSong = 0;
    musicInit(musicBase[currentSong]);
    if (isPlayed === true) musicPlay();
}

function prevSong() {
    currentSong--
    if (currentSong <= 0) currentSong = musicBase.length - 1;
    musicInit(musicBase[currentSong]);
    if (isPlayed === true) musicPlay();
}

function getFileName(item) {
    let fileName = `${item.author} - ${item.title}`;
    console.log(fileName)
    return fileName;
}

// const wavesurfer = WaveSurfer.create({
//     container: '.visualBlock',
//     waveColor: '#4F4A85',
//     progressColor: '#383351',
//     url: '/audio.mp3',
// })
