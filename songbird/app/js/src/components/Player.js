import { formatSeconds } from "../utils/formateTime";

const PLAY_ICON = './assets/icons/player/play.svg';
const PAUSE_ICON = './assets/icons/player/pause.svg';

class Player extends HTMLDivElement {
  constructor(audioSrc) {
    super();

    this.isPlaying = false;
    this.isSliding = false;
    this.className = 'player';

    this.btn = document.createElement('button');
    this.btn.className = 'player__btn btn';
    this.btn.addEventListener('click', this.handleBtnClick);
    this.append(this.btn);

    this.icon = document.createElement('img');
    this.icon.src = PLAY_ICON;
    this.icon.className = 'player__icon';
    this.btn.append(this.icon);

    this.audio = new Audio(audioSrc);
    this.audio.addEventListener('timeupdate', this.handleProgress);
    this.audio.addEventListener('ended', this.handleEnd);
    this.audio.addEventListener('loadeddata', this.handleMetaLoad);

    this.progressContainer = document.createElement('div');
    this.progressContainer.className = 'player__progress-container';
    this.append(this.progressContainer);

    this.volumeInput = document.createElement('input');
    this.volumeInput.className = 'player__volume';
    this.volumeInput.type = 'range';
    this.volumeInput.min = 0;
    this.volumeInput.max = 100;
    this.volumeInput.value = 100;
    this.volumeInput.addEventListener('input', this.handleVolumeChange);
    this.progressContainer.append(this.volumeInput);

    this.progressBar = document.createElement('div');
    this.progressBar.className = 'player__progress-bar';
    this.progressContainer.append(this.progressBar);

    this.progress = document.createElement('input');
    this.progress.type = 'range';
    this.progress.value = 0;
    this.progress.className = 'player__progress';
    this.progress.addEventListener('input', this.handleProgressInput);
    this.progress.addEventListener('change', this.handleProgressChange);
    this.progressBar.append(this.progress);

    this.time = document.createElement('div');
    this.time.className = 'player__time';
    this.progressContainer.append(this.time);

    this.currentTime = document.createElement('span');
    this.currentTime.innerHTML = '0:00';
    this.time.append(this.currentTime);

    this.duration = document.createElement('span');
    this.time.append(this.duration);
  }

  handleMetaLoad = (e) => {
    this.progress.min = 0;
    this.progress.max = Math.ceil(this.audio.duration);
    this.progress.step = 1;
    this.duration.innerHTML = formatSeconds(this.audio.duration);
  };

  handleBtnClick = (e) => {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }

    this.isPlaying = !this.isPlaying;
  };

  handleVolumeChange = (e) => {
    this.audio.volume = e.target.value / 100;
  };

  handleProgressInput = (e) => {
    this.isSliding = true;
    this.paintProgress();
    this.currentTime.innerHTML = formatSeconds(e.target.value);
  };

  handleProgressChange = (e) => {
    this.audio.currentTime = e.target.value;
    this.isSliding = false;
  }

  paintProgress = () => {
    const { min, max, value } = this.progress;
    this.progress.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%';
  };

  handleProgress = (e) => {
    if (this.isSliding) return;
    this.progress.value = this.audio.currentTime;
    this.paintProgress();
    this.currentTime.innerHTML = formatSeconds(this.audio.currentTime);
  };

  setProgress = (newPos) => {
    const { duration } = this.audio;
    this.audio.currentTime = (newPos / this.progressBar.clientWidth) * duration;
  };

  handleEnd = (e) => {
    this.icon.src = PLAY_ICON;
    this.isPlaying = false;
  };

  play = () => {
    this.audio.play();
    this.icon.src = PAUSE_ICON;
  };

  pause = () => {
    this.audio.pause();
    this.icon.src = PLAY_ICON;
  };
}

customElements.define('player-component', Player, { extends: 'div' });

export default Player;