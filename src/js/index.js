// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css"
// new AirDatepicker('.element')

"use strict";

import "./language/index.js";


export const loading = document.querySelector('.loading')









// fetch(${ url } / api / hero ? populate =*)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then(({ data }) => {
// 		const heroName = document.querySelector('.hero__name');
// 		heroName.innerHTML = data.name;
// 		const heroLastName = document.querySelector('.hero__lastName');
// 		heroLastName.innerHTML = data.lastname;
// 		const heroDesc = document.querySelector('.hero__descr');
// 		heroDesc.innerHTML = data.description;
// 		const img_desktop = document.querySelector('.hero__picture source');
// 		const img_mobile = document.querySelector('.hero__img');
// 		img_desktop.srcset = url + data.img_desktop.url;
// 		img_mobile.src = url + data.img_mobile.url;

// 	})

// console.log(fetch("http://localhost:1337/api/hero?populate=*"));

const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
	burger.classList.toggle("burger_active");
	nav.classList.toggle("nav_active");
});

function slider(elem) {
	const slider = document.querySelector(`[data-slider="${elem}"]`);
	const sliderList = slider.querySelector(".slider__list");
	const sliderSlides = slider.querySelectorAll(".slider__slide");
	const sliderButtonPrev = slider.querySelector(".slider__button_prev");
	const sliderButtonNext = slider.querySelector(".slider__button_next");

	sliderSlides.forEach((slide) => {
		sliderButtonPrev.addEventListener("click", () => {
			sliderList.scrollBy({
				left: -slide.offsetWidth,
				behavior: "smooth",
			});
			if (sliderList.scrollLeft === 0) {
				sliderList.scrollBy({
					left: sliderList.scrollWidth - sliderList.offsetWidth,
				});
			}
		});

		sliderButtonNext.addEventListener("click", () => {
			sliderList.scrollBy({
				left: slide.offsetWidth,
				behavior: "smooth",
			});

			console.log(Math.floor(sliderList.scrollLeft));
			console.log(sliderList.scrollWidth - sliderList.offsetWidth);

			if (
				Math.round(sliderList.scrollLeft) ===
				sliderList.scrollWidth - sliderList.offsetWidth
			) {
				sliderList.scrollLeft = 0;
			}
		});
	});

	return slider;
}

slider("portfolio");

//* 1st version

// function popUp() {
// 	button.addEventListener("click", () => {
// 		popup.classList.add("popup_open");
// document.body.style.paddingRight =
// 	window.innerWidth - document.body.clientWidth + "px";
// popup.style.paddingRight =
// 	window.innerWidth - document.body.clientWidth + "px";
// document.body.style.overflow = "hidden";
// Array.from(document.body.children).forEach((elem) => {
// 	elem.setAttribute("inert", "");
// 	popup.removeAttribute("inert");
// });
// 	});
// 	close.addEventListener("click", () => {
// 		popup.classList.remove("popup_open");
// 	popup.style.paddingRight = 0;
// 	document.body.style.overflow = "auto";
// 	document.body.style.paddingRight = 0;
// 	Array.from(document.body.children).forEach((elem) => {
// 		elem.removeAttribute("inert");
// 		popup.setAttribute("inert", "");
// 	});
// });
// 	window.addEventListener("click", (event) => {
// 		if (event.target == popup) {
// 			popup.classList.remove("popup_open");
// 			popup.style.paddingRight = 0;
// 			document.body.style.overflow = "auto";
// 			document.body.style.paddingRight = 0;
// 			Array.from(document.body.children).forEach((elem) => {
// 				elem.removeAttribute("inert");
// 				popup.setAttribute("inert", "");
// 			});
// 		}
// 	});
// 	send.addEventListener("click", () => {
// 		popup.classList.remove("popup_open");
// 		popup.style.paddingRight = 0;
// 		document.body.style.overflow = "auto";
// 		document.body.style.paddingRight = 0;
// 		Array.from(document.body.children).forEach((elem) => {
// 			elem.removeAttribute("inert");
// 			popup.setAttribute("inert", "");
// 		});
// 	});
// }

// popUp(".popup");

//* 2nd version

// const popup = document.querySelector(".popup");
// const button = document.querySelector(".footer__btn");
// const close = document.querySelector(".popup__button");
// const send = document.querySelector(".form__button");

// function closeOpen() {
// 	if (!popup.classList.contains("popup_open")) {
// 		popup.classList.add("popup_open");
// 		document.body.style.paddingRight =
// 			window.innerWidth - document.body.clientWidth + "px";
// 		popup.style.paddingRight =
// 			window.innerWidth - document.body.clientWidth + "px";
// 		document.body.style.overflow = "hidden";
// 		Array.from(document.body.children).forEach((elem) => {
// 			elem.setAttribute("inert", "");
// 			popup.removeAttribute("inert");
// 		});
// 	} else {
// 		popup.classList.remove("popup_open");
// 		popup.style.paddingRight = 0;
// 		document.body.style.overflow = "auto";
// 		document.body.style.paddingRight = 0;
// 		Array.from(document.body.children).forEach((elem) => {
// 			elem.removeAttribute("inert");
// 			popup.setAttribute("inert", "");
// 		});
// 	}
// }

// button.addEventListener("click", () => {
// 	closeOpen();
// });
// close.addEventListener("click", () => {
// 	closeOpen();
// });
// send.addEventListener("click", () => {
// 	closeOpen();
// });
// window.addEventListener("click", (event) => {
// 	if (event.target == popup) {
// 		closeOpen();
// 	}
// });

//* 3rd version boolean

// const popup = document.querySelector(".popup");
// const button = document.querySelector(".footer__btn");
// const close = document.querySelector(".popup__button");
// const send = document.querySelector(".form__button");

// let isOpen = false;

// function openPopup() {
// 	isOpen = true;
// 	popup.classList.add("popup_open");
// 	const scrollbarWidth = window.innerWidth - document.body.clientWidth + "px";
// 	document.body.style.paddingRight = scrollbarWidth;
// 	popup.style.paddingRight = scrollbarWidth;
// 	document.body.style.overflow = "hidden";
// 	Array.from(document.body.children).forEach((elem) => {
// 		elem.setAttribute("inert", "");
// 	});
// 	popup.removeAttribute("inert");
// }

// function closePopup() {
// 	isOpen = false;
// 	popup.classList.remove("popup_open");
// 	popup.style.paddingRight = 0;
// 	document.body.style.overflow = "auto";
// 	document.body.style.paddingRight = 0;
// 	Array.from(document.body.children).forEach((elem) => {
// 		elem.removeAttribute("inert");
// 	});
// 	popup.setAttribute("inert", "");
// }

// function togglePopup() {
// 	if (isOpen) {
// 		closePopup();
// 	} else {
// 		openPopup();
// 	}
// }

// button.addEventListener("click", togglePopup);
// close.addEventListener("click", closePopup);
// send.addEventListener("click", closePopup);
// window.addEventListener("click", (event) => {
// 	if (event.target === popup) {
// 		closePopup();
// 	}
// });

//* 4th version boolean

const popup = document.querySelector(".popup");
const button = document.querySelector(".footer__btn");
const close = document.querySelector(".popup__button");
const send = document.querySelector(".form__button");

let isOpen = false;

function togglePopup() {
	isOpen = !isOpen;

	if (isOpen) {
		popup.classList.add("popup_open");
		const scrollbarWidth = window.innerWidth - document.body.clientWidth + "px";
		document.body.style.paddingRight = scrollbarWidth;
		popup.style.paddingRight = scrollbarWidth;
		document.body.style.overflow = "hidden";
		Array.from(document.body.children).forEach((elem) => {
			elem.setAttribute("inert", "");
		});
		popup.removeAttribute("inert");
	} else {
		popup.classList.remove("popup_open");
		popup.style.paddingRight = 0;
		document.body.style.overflow = "auto";
		document.body.style.paddingRight = 0;
		Array.from(document.body.children).forEach((elem) => {
			elem.removeAttribute("inert");
		});
		popup.setAttribute("inert", "");
	}
}

button.addEventListener("click", togglePopup);
close.addEventListener("click", togglePopup);
send.addEventListener("click", togglePopup);
window.addEventListener("click", (event) => {
	if (event.target === popup) {
		togglePopup();
	}
});


