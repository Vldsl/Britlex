// import * as flsFunctions from "./modules/functions.js";
// flsFunctions.isWebp();

// Menu
const iconMenu = document.querySelector('.icon-menu');
const page = document.querySelector('.page');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		iconMenu.classList.add('active');
		document.body.classList.add('lock');
		menu.classList.add('active');
		page.classList.add('active_bg');
	});
	menuClose.addEventListener('click', () => {
		document.body.classList.remove('lock');
		menu.classList.remove('active');
		page.classList.remove('active_bg');
	});
	page.addEventListener('click', (e) => {
		document.body.classList.remove('lock');
		menu.classList.remove('active');
		page.classList.remove('active_bg');
	});
}

// ================== Replace header button
document.addEventListener('DOMContentLoaded', () => {
	const headerLink = document.querySelector('.header__link');
	const menuList = document.querySelector('.menu__list');
	const headerContainer = document.querySelector('.header__container');
	if (headerLink) {
		function replaceBtn() {
			if (document.documentElement.offsetWidth <= 993) {
				menuList.append(headerLink);
			} else {
				headerContainer.append(headerLink);
			}
		}
		window.addEventListener('resize', replaceBtn);
		replaceBtn();
	}
});