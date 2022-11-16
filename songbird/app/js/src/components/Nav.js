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
      navLink.href = '#/' + elem.split(' ').join('-').toLowerCase();
      navLink.innerHTML = elem.toUpperCase();
      navItem.append(navLink);
      return navItem;
    });

    navList.append(...navElems);
  }
}

customElements.define('nav-component', Nav, { extends: 'nav' });

export default Nav;