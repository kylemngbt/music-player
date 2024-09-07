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