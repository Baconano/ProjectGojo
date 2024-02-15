// script.js
var myVideo = document.getElementById("video1");
var playPauseButton = document.getElementById("playPauseButton");

playPauseButton.addEventListener("click", function() {
    if (myVideo.paused) {
        myVideo.play();
        playPauseButton.textContent = "Pause";
    } else {
        myVideo.pause();
        playPauseButton.textContent = "Play";
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video1');
    video.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
})