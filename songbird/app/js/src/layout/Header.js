import navRu from '../content/navigation/ru.json';
import navEn from '../content/navigation/en.json';

import Container from '../components/Container';
import Nav from '../components/Nav';

import LocalStorage from '../utils/localStorage';

class Header {
  constructor() {
    const locale = LocalStorage.getLocale() || 'en';

    this.navList = locale === 'en' ? navEn : navRu;
    this.navList.find(elem => elem.isLocale).title = locale;

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