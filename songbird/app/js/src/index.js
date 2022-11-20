import Header from './layout/Header';
import Footer from './layout/Footer';

import Gallery from './pages/Gallery';
import Index from './pages/Index';

import getPageHash from './utils/getPageHash';

const renderPage = {
  'index': Index.render,
  'start-game': () => {
    console.log('start');
  },
  'gallery': Gallery.render
};

function changePage(e) {
  const page = getPageHash();
  if (page in renderPage) {
    renderPage[page]();
  } else {
    renderPage['index']();
  }
}

function init() {
  Header.render();
  const page = getPageHash();
  changePage();
  Footer.render();
  window.addEventListener('hashchange', changePage);
}

document.addEventListener('DOMContentLoaded', init);