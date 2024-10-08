const progress = document.querySelector("#progress");
const song = document.querySelector("#song");
const ctrlIcon = document.querySelector("#ctrl-icon");
const playPauseBtn = document.querySelector("#play-pause");

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

playPauseBtn.addEventListener("click", playPause);

song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  },500)
}

progress.onchange = function() {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
}

