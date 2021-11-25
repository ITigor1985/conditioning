const refs = {
  btnDwn: document.querySelector('.down'),
  btnUp: document.querySelector('.up'),
  navServiceList: document.querySelector('.nav-service-list'),
  navMountingList: document.querySelector('.mounting-list'),
  btnDwnMount: document.querySelector('.downMount'),
  btnUpMount: document.querySelector('.upMount'),
  btnOpenNav: document.querySelector('.openNav'),
  btnCloseNav: document.querySelector('.closeNav'),
  nav: document.querySelector('nav'),
};

refs.btnOpenNav.addEventListener('click', openNav);
function openNav() {
  refs.nav.classList.remove('is-hidden');
  refs.btnOpenNav.classList.add('is-hidden');
  refs.btnCloseNav.classList.remove('is-hidden');
}
refs.btnCloseNav.addEventListener('click', closeNav);
function closeNav() {
  refs.nav.classList.add('is-hidden');
  refs.btnOpenNav.classList.remove('is-hidden');
  refs.btnCloseNav.classList.add('is-hidden');
}

refs.btnDwn.addEventListener('click', dropDown);
function dropDown() {
  refs.btnDwn.classList.add('is-hidden');
  refs.navServiceList.classList.remove('is-hidden');
  refs.btnUp.classList.remove('is-hidden');
}
refs.btnUp.addEventListener('click', dropUp);
function dropUp() {
  refs.btnDwn.classList.remove('is-hidden');
  refs.navServiceList.classList.add('is-hidden');
  refs.btnUp.classList.add('is-hidden');
}

refs.btnDwnMount.addEventListener('click', dropDownMount);
function dropDownMount() {
  refs.btnDwnMount.classList.add('is-hidden');
  refs.navMountingList.classList.remove('is-hidden');
  refs.btnUpMount.classList.remove('is-hidden');
}
refs.btnUpMount.addEventListener('click', dropUpMount);
function dropUpMount() {
  refs.btnDwnMount.classList.remove('is-hidden');
  refs.navMountingList.classList.add('is-hidden');
  refs.btnUpMount.classList.add('is-hidden');
}

const screenWidth = window.screen.width;
if (screenWidth >= 1440) {
  refs.nav.classList.remove('is-hidden');
}
