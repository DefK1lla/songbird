import en from '../content/intro/en.json';
import ru from '../content/intro/ru.json';

import Container from "./Container";

import LocalStorage from '../utils/localStorage';

class Intro extends HTMLDivElement {
  constructor() {
    super();

    const locale = LocalStorage.getLocale();

    this.content = locale === 'en' ? en : ru;

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
    this.text.innerHTML = this.content.text;
    this.inner.append(this.text);

    this.links = document.createElement('div');
    this.links.className = 'intro__btns';
    this.inner.append(this.links);

    this.quizLink = document.createElement('a');
    this.quizLink.href = '#/quiz';
    this.quizLink.className = 'intro__btn btn';
    this.quizLink.textContent = this.content.btns.quiz;
    this.links.append(this.quizLink);

    this.galleryLink = document.createElement('a');
    this.galleryLink.href = '#/gallery';
    this.galleryLink.className = 'intro__btn btn';
    this.galleryLink.textContent = this.content.btns.gallery;
    this.links.append(this.galleryLink);
  }
}

customElements.define('intro-component', Intro, { extends: 'div' });

export default Intro;