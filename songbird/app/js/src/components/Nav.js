import LocalStorage from '../utils/localStorage';

class Nav extends HTMLElement {
  constructor(list) {
    super();

    this.className = 'nav';

    const navList = document.createElement('ul');
    navList.className = 'nav__list';
    this.append(navList);

    const navElems = list.map(elem => {
      const navItem = document.createElement('li');
      navItem.className = 'nav__item';
      const navLink = document.createElement('a');
      navLink.className = 'nav__link';
      navLink.textContent = elem.title.toUpperCase();
      navItem.append(navLink);

      if (elem.isLocale) {
        this.locale = elem.title;
        navItem.addEventListener('click', this.handleLocaleClick);
      } else {
        navLink.href = elem.hash;
      }

      return navItem;
    });

    navList.append(...navElems);
  }

  handleLocaleClick = (e) => {
    LocalStorage.setLocale(this.locale === 'en' ? 'ru' : 'en');
    location.reload();
  }
}

customElements.define('nav-component', Nav, { extends: 'nav' });

export default Nav;