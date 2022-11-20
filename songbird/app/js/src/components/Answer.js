import ru from '../content/answer/ru.json';
import en from '../content/answer/en.json';

import Card from './Card';
import Container from './Container';
import Options from './Options';

import LocalStorage from '../utils/localStorage';

class Answer extends HTMLDivElement {
  constructor({ options, placeholder, onNextClick, onCorrectAnswer, onIncorrectAsnwer, correctAnswer }) {
    super();

    this.content = LocalStorage.getLocale() === 'en' ? en : ru;

    this.className = 'answer';

    this.container = new Container();
    this.append(this.container);

    this.inner = document.createElement('div');
    this.inner.className = 'answer__inner';
    this.container.append(this.inner);

    this.onCorrectAnswer = onCorrectAnswer;
    this.onIncorrectAsnwer = onIncorrectAsnwer;
    this.correctAnswer = correctAnswer;
    this.isAnswered = false;

    this.optionsContainer = document.createElement('div');
    this.optionsContainer.className = 'options-container';
    this.inner.append(this.optionsContainer);

    this.options = new Options({
      options,
      clickHandlerCreator: this.clickHandlerCreator
    });
    this.optionsContainer.append(this.options);

    this.nextBtn = document.createElement('button');
    this.nextBtn.className = 'btn';
    this.nextBtn.textContent = this.content.nextBtn;
    this.nextBtn.addEventListener('click', onNextClick);
    this.nextBtn.disabled = true;
    this.optionsContainer.append(this.nextBtn);

    this.answerCard = new Card(placeholder);
    this.inner.append(this.answerCard);

    this.successAudio = new Audio('./assets/audio/answer/success.mp3');
    this.errorAudio = new Audio('./assets/audio/answer/error.mp3');
  }

  clickHandlerCreator = (answer) => {
    const answerComponent = this;
    return function (e) {
      answerComponent.answerCard.player.audio.pause();
      answerComponent.answerCard.remove();
      answerComponent.answerCard = new Card(answer);
      answerComponent.inner.append(answerComponent.answerCard);

      if (answerComponent.isAnswered) return;

      if (answer.name === answerComponent.correctAnswer.name) {
        answerComponent.successAudio.currentTime = 0;
        answerComponent.errorAudio.pause();
        answerComponent.successAudio.play();
        answerComponent.isAnswered = true;
        answerComponent.nextBtn.disabled = false;
        answerComponent.onCorrectAnswer();
        e.target.classList.add('options__item_correct');
      } else {
        answerComponent.errorAudio.currentTime = 0;
        answerComponent.successAudio.pause();
        answerComponent.errorAudio.play();
        answerComponent.nextBtn.disabled = true;
        answerComponent.onIncorrectAsnwer();
        e.target.classList.add('options__item_error');
      }
    }
  };
}

customElements.define('asnwer-component', Answer, { extends: 'div' });

export default Answer;