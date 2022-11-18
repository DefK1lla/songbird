import Container from "../components/Container";
import Player from "../components/Player";

class Gallery {
  constructor() {
    this.page = document.createElement('div');
    this.page.className = 'gallery';

    this.container = new Container();
    this.page.append(this.container);

    this.inner = document.createElement('div');
    this.inner.className = 'gallert__inner';
    this.container.append(this.inner);

    this.player = new Player();
    this.inner.append(this.player);
  }

  render = () => {
    const page = document.querySelector('.page');
    page.innerHTML = '';
    page.append(this.page);
  };
}

export default new Gallery();