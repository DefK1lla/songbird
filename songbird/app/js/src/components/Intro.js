import Container from "./Container";

class Intro extends HTMLDivElement {
  constructor() {
    super();

    this.className = 'intro';

    this.container = new Container();
    this.append(this.container);

    this.inner = document.createElement('div');
    this.inner.className = 'intro__inner';
    this.container.append(this.inner);

    this.img = document.createElement('img');
    this.img.className = 'intro__img';
    this.img.src = './assets/images/intro/bird.png';
    this.inner.append(this.img);

    this.text = document.createElement('p');
    this.text.className = 'intro__text';
    this.text.innerHTML = '<b>Songbird</b> is a quiz app for recognizing birds by their voices.';
    this.inner.append(this.text);

    this.links = document.createElement('div');
    this.links.className = 'intro__btns';
    this.inner.append(this.links);

    this.quizLink = document.createElement('a');
    this.quizLink.href = '#/quiz';
    this.quizLink.className = 'intro__btn btn';
    this.quizLink.textContent = 'Start quiz';
    this.links.append(this.quizLink);

    this.galleryLink = document.createElement('a');
    this.galleryLink.href = '#/gallery';
    this.galleryLink.className = 'intro__btn btn';
    this.galleryLink.textContent = 'View gallery';
    this.links.append(this.galleryLink);
  }
}

customElements.define('intro-component', Intro, { extends: 'div' });

export default Intro;