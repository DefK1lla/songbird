import Player from './Player';

class Card extends HTMLDivElement {
  constructor(obj) {
    super();
    this.className = 'card';

    this.header = document.createElement('div');
    this.header.className = 'card__header';
    this.append(this.header);

    this.name = document.createElement('div');
    this.name.innerHTML = obj.name;
    this.name.className = 'card__name';
    this.header.append(this.name);

    if (obj.species) {
      this.species = document.createElement('div');
      this.species.innerHTML = obj.species;
      this.species.className = 'card__species';
      this.header.append(this.species);
    }

    if (obj.image) {
      this.media = document.createElement('div');
      this.media.className = 'card__media';
      this.append(this.media);

      this.image = document.createElement('img');
      this.image.src = obj.image;
      this.image.className = 'card__img';
      this.media.append(this.image);
    }

    this.body = document.createElement('div');
    this.body.className = 'card__body';
    this.append(this.body);

    if (obj.description) {
      this.description = document.createElement('p');
      this.description.innerHTML = obj.description;
      this.description.className = 'card__description';
      this.body.append(this.description);
    }

    if (obj.audio) {
      this.player = new Player(obj.audio);
      this.player.classList.add('card__audio');
      this.body.append(this.player);
    }
  }
}

customElements.define('card-component', Card, { extends: 'div' });

export default Card;