import Question from "../components/Question";

const obj = {
  "id": 1,
  "name": "Raven",
  "species": "Corvus corax",
  "description": "Raven is a large bird. The body length reaches 70 centimeters, the wingspan is up to one and a half meters. Ravens inhabit the vicinity of the Tower. There is a belief in England that the day the black crows fly away from the Tower, the monarchy will collapse.",
  "image": "https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg",
  "audio": "https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
}

class Quiz {
  constructor() {
    this.page = document.createElement('div');
    this.page.className = 'quiz';

    this.question = new Question(obj);
    this.page.append(this.question);
  }

  render = () => {
    const page = document.querySelector('.page');
    page.innerHTML = '';
    page.append(this.page);
  };
}

export default new Quiz();