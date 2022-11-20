import Intro from "../components/Intro";

class Index {
  constructor() {
    this.page = document.createElement('div');
    this.page.className = 'index';

    this.intro = new Intro();
    this.page.append(this.intro);
  }

  render = () => {
    const page = document.querySelector('.page');
    page.innerHTML = '';
    page.append(this.page);
  };
}

export default new Index();