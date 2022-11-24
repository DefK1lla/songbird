import ru from '../content/birds/ru.json';
import en from '../content/birds/en.json';

import Question from '../components/Question';
import Answer from '../components/Answer';
import QuizBar from '../components/QuizBar';

import LocalStorage from '../utils/localStorage';

class Quiz {
  placeholder = {
    name: '******',
    image: './assets/images/question/mark.png',
  };

  constructor() {
    this.birds = LocalStorage.getLocale() === 'en' ? en : ru;
  }

  start = () => {
    this.page = document.createElement('div');
    this.page.className = 'quiz';

    this.quizbar = new QuizBar();
    this.page.append(this.quizbar);

    this.questionContainer = document.createElement('div');
    this.page.append(this.questionContainer);

    this.score = 0;
    this.step = 1;
    this.generateQuestion();
  };

  generateQuestion = () => {
    this.answers = [];
    this.isAnswered = false;
    this.correctAnswer = this.getRandomBird();
    this.correctAnswer.score = 5;
    this.answers.push(this.correctAnswer);

    for (let i = 1; i < 6; i++) this.answers.push(this.getRandomBird());
    this.shuffleAnswers();

    this.placeholder.audio = this.correctAnswer.audio;
    this.question = new Question(this.placeholder, this.score);
    this.questionContainer.append(this.question);

    this.answer = new Answer({
      options: this.answers,
      onCorrectAnswer: this.handleCorrectAnswer,
      onIncorrectAsnwer: this.handleIncorrectAsnwer,
      correctAnswer: this.correctAnswer,
      placeholder: this.placeholder,
      correctAnswer: this.correctAnswer,
      onNextClick: this.handleNextClick
    });
    this.page.append(this.answer);
  };

  handleNextClick = (e) => {
    if (!this.isAnswered) return;

    this.question.remove();
    this.answer.remove();

    if (this.step === 6) {
      LocalStorage.setScore(this.score);
      location.hash = '#/results';
    } else {
      this.step++;
      this.quizbar.next();
      this.generateQuestion();
    }
  };

  handleIncorrectAsnwer = () => {
    if (this.correctAnswer.score > 0) this.correctAnswer.score--;
  };

  handleCorrectAnswer = () => {
    this.isAnswered = true;
    this.score += this.correctAnswer.score;
    this.question.remove();
    this.question = new Question(this.correctAnswer, this.score);
    this.questionContainer.append(this.question);
  };

  getRandomBird = () => {
    const coordX = this.step - 1;
    const coordY = Math.round(0 - 0.5 + Math.random() * ((this.birds[coordX].length - 1) - 0 + 1));
    const bird = this.birds[coordX][coordY];
    const isExists = this.answers.find(answer => answer.name === bird.name);
    if (isExists) return this.getRandomBird();
    return bird;
  };

  shuffleAnswers = () => {
    this.answers.sort(() => Math.random() - 0.5);
  };

  render = () => {
    const page = document.querySelector('.page');
    page.innerHTML = '';
    this.start();
    page.append(this.page);
  };
}

export default new Quiz();