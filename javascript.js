const toggleButton = document.getElementById("toggleButton");
const navbar = document.querySelector(".navbar");
const accordionButtons = document.querySelectorAll(".accordion-button");
const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const sliderScreen = document.querySelector('.sliderScreen');
const prevBtnScreen = document.getElementById('prevScreen');
const nextBtnScreen = document.getElementById('nextScreen');
const textArea = document.querySelector(".text-area");
const textArea1 = document.querySelector(".text-area1");
const slideWidthScreen = 320;
const slideWidth = 366;
let currentIndexScreen = 0;
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
	toggleButton.addEventListener("click", function () {
		if (navbar.style.display === "flex") {
			navbar.style.display = "none";
		} else {
			navbar.style.display = "flex";
		}
	});
});
document.addEventListener("DOMContentLoaded", function () {
	accordionButtons.forEach((button) => {
		button.addEventListener("click", function () {
			const item = this.parentElement;

			if (item.classList.contains("open")) {
				item.classList.remove("open");
			} else {
				item.classList.add("open");
			}
		});
	});
});

nextBtn.addEventListener('click', () => {
	currentIndex = Math.min(currentIndex + 1, 2);
	updateSlider();
});
prevBtn.addEventListener('click', () => {
	currentIndex = Math.max(currentIndex - 1, 0);
	updateSlider();
});

function updateSlider() {
	const translateX = -currentIndex * slideWidth;
	slider.style.transform = `translateX(${translateX}px)`;
}
updateSlider();
nextBtnScreen.addEventListener('click', () => {
	currentIndexScreen = Math.min(currentIndexScreen + 1, 1);
	updateSliderScreen();
});
prevBtnScreen.addEventListener('click', () => {
	currentIndexScreen = Math.max(currentIndexScreen - 1, 0);
	updateSliderScreen();
});
function updateSliderScreen() {
	const translateXScreen = -currentIndexScreen * slideWidthScreen;
	sliderScreen.style.transform = `translateX(${translateXScreen}px)`;
}
updateSliderScreen();
document.addEventListener("DOMContentLoaded", function () {
	textArea.addEventListener("focus", function () {
		if (this.placeholder) {
			this.placeholder = this.dataset.altPlaceholder; // Set the alternate placeholder text
			this.classList.add("alt-placeholder");
		}
	});
	textArea.addEventListener("blur", function () {
		if (!this.value) {
			this.classList.remove("alt-placeholder");
			this.placeholder = "Why are you contacting us?"; // Restore the initial placeholder text when the textarea is blurred and no text is entered
		}
	});
});
document.addEventListener("DOMContentLoaded", function () {
	textArea1.addEventListener("focus", function () {
		if (this.placeholder) {
			this.placeholder = this.dataset.altPlaceholder; // Set the alternate placeholder text
			this.classList.add("alt-placeholder");
		}
	});
	textArea1.addEventListener("blur", function () {
		if (!this.value) {
			this.classList.remove("alt-placeholder");
			this.placeholder = "Other - please specify?"; // Restore the initial placeholder text when the textarea is blurred and no text is entered
		}
	});
});



