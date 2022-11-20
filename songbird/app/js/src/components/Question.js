import ru from '../content/question/ru.json';
import en from '../content/question/en.json';

import Container from '../components/Container';
import Card from '../components/Card';

import LocalStorage from '../utils/localStorage';

class Question extends HTMLDivElement {
  constructor(obj, score) {
    super();

    this.className = 'question';

    this.content = LocalStorage.getLocale() === 'en' ? en : ru;

    this.container = new Container();
    this.append(this.container);

    this.inner = document.createElement('div');
    this.inner.className = 'question__inner';
    this.container.append(this.inner);

    this.text = document.createElement('p');
    this.text.className = 'question__text';
    this.text.textContent = this.content.text;
    this.inner.append(this.text);

    this.card = new Card(obj);

    this.card.classList.add('question__card');

    this.inner.append(this.card);

    this.scoreContainer = document.createElement('div');
    this.scoreContainer.innerHTML = this.content.score;
    this.inner.append(this.scoreContainer);

    this.score = document.createElement('span');
    this.score.textContent = score;
    this.scoreContainer.append(this.score);
  }

  updateScore = (score) => {
    this.score.textContent = score;
  };
}

customElements.define('question-component', Question, { extends: 'div' });

export default Question;