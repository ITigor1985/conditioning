const refs = {
  btnDwn: document.querySelector('.down'),
  btnUp: document.querySelector('.up'),
  navServiceList: document.querySelector('.nav-service-list'),
  navMountingList: document.querySelector('.mounting-list'),
};

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
