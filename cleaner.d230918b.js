const n={btnDwn:document.querySelector(".down"),btnUp:document.querySelector(".up"),navServiceList:document.querySelector(".nav-service-list"),navMountingList:document.querySelector(".mounting-list"),btnDwnMount:document.querySelector(".downMount"),btnUpMount:document.querySelector(".upMount"),btnOpenNav:document.querySelector(".openNav"),btnCloseNav:document.querySelector(".closeNav"),nav:document.querySelector("nav"),linkButton:document.querySelector(".cond-nav-item.service")};n.btnOpenNav.addEventListener("click",(function(){n.nav.classList.remove("is-hidden"),n.btnOpenNav.classList.add("is-hidden"),n.btnCloseNav.classList.remove("is-hidden")})),n.btnCloseNav.addEventListener("click",(function(){n.nav.classList.add("is-hidden"),n.btnOpenNav.classList.remove("is-hidden"),n.btnCloseNav.classList.add("is-hidden")})),n.btnDwn.addEventListener("click",(function(){n.btnDwn.classList.add("is-hidden"),n.navServiceList.classList.remove("is-hidden"),n.btnUp.classList.remove("is-hidden")})),n.btnUp.addEventListener("click",(function(){n.btnDwn.classList.remove("is-hidden"),n.navServiceList.classList.add("is-hidden"),n.btnUp.classList.add("is-hidden")})),n.btnDwnMount.addEventListener("click",(function(){n.btnDwnMount.classList.add("is-hidden"),n.navMountingList.classList.remove("is-hidden"),n.btnUpMount.classList.remove("is-hidden")}));n.btnUpMount.addEventListener("click",(function(){n.btnDwnMount.classList.remove("is-hidden"),n.navMountingList.classList.add("is-hidden"),n.btnUpMount.classList.add("is-hidden")}));const e=window.screen.width;e>=1440&&(console.log(e),n.nav.classList.remove("is-hidden"));
//# sourceMappingURL=cleaner.d230918b.js.map
