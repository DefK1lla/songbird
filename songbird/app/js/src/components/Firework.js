class Firework extends HTMLDivElement {
  constructor(score) {
    super();

    for (let i = 0; i < 3; i++) {
      const firework = document.createElement('div');
      firework.className = 'firework';
      firework.id = 'firework' + (i + 1);

      for (let j = 0; j < 12; j++) {
        const explosion = document.createElement('div');
        explosion.className = 'explosion';
        firework.append(explosion);
      }

      this.append(firework);
    }
  }
}

customElements.define('firework-component', Firework, { extends: 'div' });

export default Firework;