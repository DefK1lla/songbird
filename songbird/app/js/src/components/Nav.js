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
      navLink.href = elem.hash;
      navLink.textContent = elem.title.toUpperCase();
      navItem.append(navLink);

      if (elem.isLocale) {
        navItem.addEventListener('click', this.handleLocaleClick);
      }

      return navItem;
    });

    navList.append(...navElems);
  }

  handleLocaleClick = (e) => {
    console.log('change locale')
  }
}

customElements.define('nav-component', Nav, { extends: 'nav' });

export default Nav;