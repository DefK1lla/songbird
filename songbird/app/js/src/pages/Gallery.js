import Birds from "../components/Birds";

class Gallery {
  constructor() {
    this.page = document.createElement('div');
    this.page.className = 'gallery';

    this.birds = new Birds();
    this.page.append(this.birds);
  }

  render = () => {
    const page = document.querySelector('.page');
    page.innerHTML = '';
    page.append(this.page);
  };
}

export default new Gallery();