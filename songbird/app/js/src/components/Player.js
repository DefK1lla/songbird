import { formatSeconds } from "../utils/formateTime";

const PLAY_ICON = './assets/icons/player/play.svg';
const PAUSE_ICON = './assets/icons/player/pause.svg';

const testAudio = "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3"

class Player extends HTMLDivElement {
  constructor() {
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

    this.audio = new Audio(testAudio);
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
    this.progressBar.addEventListener('mousedown', this.handleRewindStart);
    this.progressBar.addEventListener('touchstart', this.handleRewindStart);
    this.progressContainer.append(this.progressBar);

    this.progress = document.createElement('div');
    this.progress.className = 'player__progress';
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

  handleRewindStart = (e) => {
    document.addEventListener('touchmove', this.handleRewind);
    document.addEventListener('touchend', this.handleRewindEnd);
    document.addEventListener('mousemove', this.handleRewind);
    document.addEventListener('mouseup', this.handleRewindEnd);
  };

  handleRewind = (e) => {
    if (!e.touches) e.preventDefault();
    this.isSliding = true;
    const offsetX = e.touches ? e.touches[0].pageX : e.pageX;
    const currentProgress = ((offsetX - this.progressBar.offsetLeft) / this.progressBar.clientWidth) * 100;
    this.progress.style.width = currentProgress + '%';
    const currentTime = (currentProgress * this.audio.duration) / 100;
    this.currentTime.innerHTML = formatSeconds(currentTime);
  };

  handleRewindEnd = (e) => {
    document.removeEventListener('mousemove', this.handleRewind);
    document.removeEventListener('touchmove', this.handleRewind);

    const offsetX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
    this.setProgress(offsetX - this.progressBar.offsetLeft);
    this.isSliding = false;

    document.removeEventListener('mouseup', this.handleRewindEnd);
    document.removeEventListener('touchend', this.handleRewindEnd);
  };

  handleProgress = (e) => {
    if (this.isSliding) return;
    const { duration, currentTime } = e.srcElement;
    this.progress.style.width = (currentTime / duration) * 100 + '%';
    this.currentTime.innerHTML = formatSeconds(currentTime);
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