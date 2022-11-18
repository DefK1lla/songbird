import ru from './localization/ru.json';
import en from './localization/en.json';

import LocalStorage from '../../utils/localStorage';

import Container from '../../components/Container';
import Nav from '../../components/Nav';

class Header {
  constructor() {
    const locale = LocalStorage.getLocale() || 'en';
    this.navList = ['Start game', 'Gallery', locale];

    this.container = new Container();

    this.inner = document.createElement('div');
    this.inner.className = 'header__inner';
    this.container.append(this.inner);

    this.logo = document.createElement('img');
    this.logo.className = 'logo';
    this.logo.src = './assets/logo.svg';
    this.inner.append(this.logo);

    this.nav = new Nav(this.navList);
    this.inner.append(this.nav);
  }

  render = () => {
    document.querySelector('.header').append(this.container);
  };
}

export default new Header();