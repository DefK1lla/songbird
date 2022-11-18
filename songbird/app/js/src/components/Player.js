class Player extends HTMLDivElement {
  constructor() {
    super();
    this.className = 'player';

    const btn = document.createElement('button');
    btn.className = 'player__btn btn';
    this.append(btn);

    const progressBar = document.createElement('div');
    progressBar.className = 'player__progress-bar';
    const icon = document.createElement('img');
    icon.src = './assets/icons/player/play.svg';
    icon.className = 'player__icon';
    btn.append(icon);
    this.append(progressBar);
  }
}

customElements.define('player-component', Player, { extends: 'div' });

export default Player;