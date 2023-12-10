
/*!
    AppTV Template
    Created on date: 11/28/2023
    Built on date: 12/4/2023
*/


// ========== LOADER
window.addEventListener('load', () => {
    setTimeout( () => {
        document.querySelector(".loader-warpper").classList.toggle("loader-warpper-hide");
    }, 5000);
});


// ========== NAVBAR
// SET TIME
function setTime() {
    var getTime = new Date();
    var timeH = getTime.getHours();
    var timeM = getTime.getMinutes();
    var setTime = document.querySelector("#setTime");

    setTime.innerHTML = timeH + ":" + timeM;
}
setInterval(setTime, 10);

// MENUBAR
function menubar() {
    document.getElementById("menubar").classList.toggle("menubar-display");
}
// DROPDOWN MENUBAR
function dropdownAvatar() {
    document.getElementById("dropdownAvatar").classList.toggle("avatar-dropdown-display");
}
function toggleOnOff() {
    document.getElementById("toggleOn").classList.toggle("toggle-on-display");
    document.getElementById("toggleOff").classList.toggle("toggle-off-display");
}


// ========== CHANGE BACKGROUND
var imageTarget1 = document.querySelector('#imageTarget1');
imageTarget1.addEventListener("mouseenter", () => {
    document.body.classList.toggle("change-background-1");
    var audio = new Audio("sounds/Click_07.wav");
    audio.play();
})
imageTarget1.addEventListener("mouseleave", () => {
    document.body.classList.toggle("change-background-1");
    var audio = new Audio("sounds/Click_07.wav");
    audio.pause();
})

var imageTarget2 = document.querySelector('#imageTarget2');
imageTarget2.addEventListener("mouseenter", () => {
    document.body.classList.toggle("change-background-2");
    var audio = new Audio("sounds/Click_07.wav");
    audio.play();
})
imageTarget2.addEventListener("mouseleave", () => {
    document.body.classList.toggle("change-background-2");
    var audio = new Audio("sounds/Click_07.wav");
    audio.pause();
})

var imageTarget3 = document.querySelector('#imageTarget3');
imageTarget3.addEventListener("mouseenter", () => {
    document.body.classList.toggle("change-background-3");
    var audio = new Audio("sounds/Click_07.wav");
    audio.play();
})
imageTarget3.addEventListener("mouseleave", () => {
    document.body.classList.toggle("change-background-3");
    var audio = new Audio("sounds/Click_07.wav");
    audio.pause();
})
var imageTarget4 = document.querySelector('#imageTarget4');
imageTarget4.addEventListener("mouseenter", () => {
    document.body.classList.toggle("change-background-4");
    var audio = new Audio("sounds/Click_07.wav");
    audio.play();
})

imageTarget4.addEventListener("mouseleave", () => {
    document.body.classList.toggle("change-background-4");
    var audio = new Audio("sounds/Click_07.wav");
    audio.pause();
})
var imageTarget5 = document.querySelector('#imageTarget5');
imageTarget5.addEventListener("mouseenter", () => {
    document.body.classList.toggle("change-background-5");
    var audio = new Audio("sounds/Click_07.wav");
    audio.play();
})
imageTarget5.addEventListener("mouseleave", () => {
    document.body.classList.toggle("change-background-5");
    var audio = new Audio("sounds/Click_07.wav");
    audio.pause();
})

var imageTarget6 = document.querySelector('#imageTarget6');
imageTarget6.addEventListener("mouseenter", () => {
    document.body.classList.toggle("change-background-6");
    var audio = new Audio("sounds/Click_07.wav");
    audio.play();
})
imageTarget6.addEventListener("mouseleave", () => {
    document.body.classList.toggle("change-background-6");
    var audio = new Audio("sounds/Click_07.wav");
    audio.pause();
})

var imageTarget7 = document.querySelector('#imageTarget7');
imageTarget7.addEventListener("mouseenter", () => {
    document.body.classList.toggle("change-background-7");
    var audio = new Audio("sounds/Click_07.wav");
    audio.play();
})
imageTarget7.addEventListener("mouseleave", () => {
    document.body.classList.toggle("change-background-7");
    var audio = new Audio("sounds/Click_07.wav");
    audio.pause();
})

var imageTarget8 = document.querySelector('#imageTarget8');
imageTarget8.addEventListener("mouseenter", () => {
    document.body.classList.toggle("change-background-8");
    var audio = new Audio("sounds/Click_07.wav");
    audio.play();
})
imageTarget8.addEventListener("mouseleave", () => {
    document.body.classList.toggle("change-background-8");
    var audio = new Audio("sounds/Click_07.wav");
    audio.pause();
})


// ========== PLAYER
// PLAYER VIDEO
var playerControlClick = document.querySelector(".player-video-body");
var video = document.querySelector("video");
var btnPause = document.querySelector("#btnPause");
var btnPlay = document.querySelector("#btnPlay");

function playerVideo() {
    setTimeout(() => {
        document.getElementById("playerVideo").classList.toggle("player-video-display");
    }, 3000)
    video.pause();
}
function playerControl() {
    playerControlClick.addEventListener("click", () => {
        document.getElementById("playerControl1").classList.toggle("player-control-display");
        document.getElementById("playerControl2").classList.toggle("player-control-display");
    })
}
function pauseVideo() {
    video.pause();
    btnPause.classList.toggle("player-control-btn-pause-display");
    btnPlay.classList.toggle("player-control-btn-play-display");
}
function playVideo() {
    video.play();
    btnPlay.classList.toggle("player-control-btn-play-display");
    btnPause.classList.toggle("player-control-btn-pause-display");
}