import Container from "../../components/Container";

class Footer {
  constructor() {
    this.container = new Container();

    this.inner = document.createElement('div');
    this.inner.className = 'footer__inner';
    this.container.append(this.inner);

    this.schoolLink = document.createElement('a');
    this.schoolLink.href = 'https://rs.school/js/';
    this.schoolLink.target = '_blank';
    this.inner.append(this.schoolLink);

    this.schoolLogo = document.createElement('img');
    this.schoolLogo.className = 'school-logo';
    this.schoolLogo.src = './assets/school-logo.svg';
    this.schoolLink.append(this.schoolLogo);

    this.copy = document.createElement('p');
    this.copy.className = 'copy';
    this.copy.innerHTML = '© Copyright 2022.';
    this.inner.append(this.copy);

    this.ghLink = document.createElement('a');
    this.ghLink.href = 'https://github.com/defk1lla/';
    this.ghLink.target = '_blank';
    this.ghLink.className = 'footer__link link gh-link';
    this.ghLink.innerHTML = 'GitHub';
    this.inner.append(this.ghLink);
  }

  render = () => {
    document.querySelector('.footer').append(this.container);
  };
}

export default new Footer();