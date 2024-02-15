// script.js
var myVideo = document.getElementById("video1");
var playPauseButton = document.getElementById("playPauseButton");
//Plays and pause button changing the text.
playPauseButton.addEventListener("click", function() {
    if (myVideo.paused) {
        myVideo.play();
        playPauseButton.textContent = "Pause";
    } else {
        myVideo.pause();
        playPauseButton.textContent = "Play";
    }
});
//Prevents the user from pausing or click on the video without button
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video1');
    video.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
})