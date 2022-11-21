import Firework from '../components/Firework';
import Congratulation from '../components/Сongratulation';

import LocalStorage from '../utils/localStorage';

class Results {
  constructor() {
    this.page = document.createElement('div');
    this.page.className = 'results';

    this.firework = new Firework();
  }

  render = () => {
    const page = document.querySelector('.page');
    page.innerHTML = '';

    this.score = LocalStorage.getScore();

    if (!this.score) return location.hash = '#/';

    if (this.score > 5) {
      this.page.append(this.firework);
    } else {
      this.firework.remove();
    }

    this.congratulation?.remove();
    this.congratulation = new Congratulation(this.score);
    this.page.append(this.congratulation);

    page.append(this.page);

    LocalStorage.removeScore();
  };
}

export default new Results();;