import ru from '../content/quizbar/ru.json';
import en from '../content/quizbar/en.json';

import Container from './Container';

import LocalStorage from '../utils/localStorage';

class QuizBar extends HTMLDivElement {
  constructor() {
    super();

    this.content = LocalStorage.getLocale() === 'en' ? en : ru;

    this.currentIndex = 0;


    this.className = 'quizbar';

    this.container = new Container();
    this.append(this.container);

    this.inner = document.createElement('div');
    this.inner.className = 'quizbar__inner';
    this.container.append(this.inner);

    this.items = this.content.map(elem => {
      const item = document.createElement('div');
      item.className = 'quizbar__item';
      item.textContent = elem;
      return item;
    });
    this.items[this.currentIndex].classList.add('quizbar__item_active');
    this.inner.append(...this.items);
  };

  next = () => {
    this.items[this.currentIndex].classList.remove('quizbar__item_active');
    this.currentIndex++;
    this.items[this.currentIndex].classList.add('quizbar__item_active');
  };
}

customElements.define('quizbar-component', QuizBar, { extends: 'div' });

export default QuizBar;