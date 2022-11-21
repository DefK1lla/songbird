import ru from '../content/congratulation/ru.json';
import en from '../content/congratulation/en.json';

import Container from './Container';
import LocalStorage from '../utils/localStorage';

class Congratulation extends HTMLDivElement {
  constructor(score) {
    super();

    this.className = 'congratulation';

    this.content = LocalStorage.getLocale() === 'en' ? en : ru;

    this.container = new Container();
    this.append(this.container);

    this.inner = document.createElement('div');
    this.inner.className = 'congratulation__inner';
    this.container.append(this.inner);

    this.heading = document.createElement('h2');
    this.heading.className = 'congratulation__title';
    this.inner.append(this.heading);

    if (score === 30) {
      this.heading.textContent = this.content.absolute;
    } else {
      this.heading.textContent = this.content.won;
    }

    this.text = document.createElement('p');
    this.text.className = 'congratulation__text';
    this.text.textContent = this.content.text1 + score + this.content.text2;

    this.inner.append(this.text);

    this.btn = document.createElement('a');
    this.btn.className = 'congratulation__btn btn';
    this.btn.href = '#/quiz';
    this.btn.textContent = this.content.btn;
    this.inner.append(this.btn);
  }
}

customElements.define('congratulation-component', Congratulation, { extends: 'div' });


export default Congratulation;