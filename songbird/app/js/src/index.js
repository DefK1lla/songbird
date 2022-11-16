import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import getPageHash from './utils/getPageHash';

const renderPage = {
  'start-game': () => {
    console.log('start');
  },
  'gallery': () => {
    console.log(gallery);
  }
}

function init() {
  Header.render();
  const page = getPageHash();
  if (page in renderPage) {
    renderPage[page]();
  } else {
    renderPage('start-game');
  }
  Footer.render();
}

document.addEventListener('DOMContentLoaded', init);