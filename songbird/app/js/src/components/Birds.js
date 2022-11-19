import Container from "./Container";
import Card from "./Card";

import LocaleStorage from '../utils/localStorage';

import en from '../content/birds/en.json';
import ru from '../content/birds/ru.json';

class Birds extends HTMLDivElement {
  constructor() {
    super();

    this.className = 'birds';

    this.container = new Container();
    this.append(this.container);

    this.inner = document.createElement('div');
    this.inner.className = 'birds__inner';
    this.container.append(this.inner);

    this.items = document.createElement('div');
    this.items.className = 'birds__items';
    this.inner.append(this.items);

    const locale = LocaleStorage.getLocale();

    if (locale === 'en') {
      this.birds = en;
    } else {
      this.birds = ru;
    }

    for (let birds of this.birds) {
      birds.forEach(bird => {
        console.log(bird)
        this.card = new Card(bird);
        this.items.append(this.card);
      });
    }
  }
}

customElements.define('birds-component', Birds, { extends: 'div' });

export default Birds;