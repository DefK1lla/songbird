import Container from "../components/Container";
import Card from "../components/Card";

class Question extends HTMLDivElement {
  constructor(obj) {
    super();

    this.className = 'question';

    this.container = new Container();
    this.append(this.container);

    this.inner = document.createElement('div');
    this.inner.className = 'question__inner';
    this.container.append(this.inner);

    this.text = document.createElement('p');
    this.text.className = 'question__text';
    this.text.textContent = 'Послушайте пение и выберите птицу из списка';
    this.inner.append(this.text);

    this.card = new Card(obj);

    this.card.classList.add('question__card');

    this.inner.append(this.card);
  }

}

customElements.define('question-component', Question, { extends: 'div' });

export default Question;