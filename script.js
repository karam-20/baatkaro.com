var settingMenu = document.querySelector(".setting-menu");
var darkBtn = document.getElementById("dark-mode-btn");

function settingMenuToggle() {
  settingMenu.classList.toggle("setting-menu-height");
}

darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
};
