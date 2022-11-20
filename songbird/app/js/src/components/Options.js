class Options extends HTMLUListElement {
  constructor({ options, clickHandlerCreator }) {
    super();

    this.className = 'options card';

    this.items = options.map(option => {
      const item = document.createElement('li');
      item.className = 'options__item';
      item.textContent = option.name;
      item.addEventListener('click', clickHandlerCreator(option));
      this.append(item);
      return item;
    });
  };
}

customElements.define('answer-list-component', Options, { extends: 'ul' });

export default Options;