class Container extends HTMLDivElement {
  constructor() {
    super();
    this.className = 'container';
  }
}

customElements.define('container-component', Container, { extends: 'div' });

export default Container;