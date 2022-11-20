import Header from './layout/Header';
import Footer from './layout/Footer';

import Gallery from './pages/Gallery';
import Index from './pages/Index';

import LocalStorage from './utils/localStorage';
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
  window.scrollTo(0, 0);
  if (page in renderPage) {
    renderPage[page]();
  } else {
    renderPage['index']();
  }
}

function init() {
  document.documentElement.lang = LocalStorage.getLocale();
  Header.render();
  const page = getPageHash();
  changePage();
  Footer.render();
  window.addEventListener('hashchange', changePage);
}

document.addEventListener('DOMContentLoaded', init);