// import * as flsFunctions from "./modules/functions.js";
// flsFunctions.isWebp();

// ============== Header
const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
const headerHeight = header.offsetHeight;
const introHeight = intro.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
	if (scrollDistance >= introHeight + headerHeight) {
		header.classList.add('fixed');
		intro.style.marginTop = `${headerHeight}px`;
	} else {
		header.classList.remove('fixed');
		intro.style.marginTop = null;
	}
	lastScrollTop = scrollDistance;
});

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (menuIcon.classList.contains('active')) {
				document.body.classList.remove('lock');
				menuIcon.classList.remove('active');
				menuBody.classList.remove('active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

// Menu
const menuIcon = document.querySelector('.menu__icon');
const page = document.querySelector('.page');
const menu = document.querySelector('.menu__body');
const menuClose = document.querySelector('.menu__close');
if (menuIcon) {
	menuIcon.addEventListener('click', function (e) {
		menuIcon.classList.add('active');
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

// 
document.addEventListener('DOMContentLoaded', () => {
	const contactTitle = document.querySelector('.contact__title');
	const contactContent = document.querySelector('.contact__content');
	const contactContainer = document.querySelector('.contact__container');
	if (contactTitle) {
		function replaceBtn() {
			if (document.documentElement.offsetWidth <= 768) {
				contactContainer.prepend(contactTitle);
			} else {
				contactContent.prepend(contactTitle);
			}
		}
		window.addEventListener('resize', replaceBtn);
		replaceBtn();
	}
});