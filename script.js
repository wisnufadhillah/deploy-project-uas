// ? hamburger menu and hidden box
var buttonClicked = false;

document.querySelector('.hidden__button').addEventListener('click', function () {
	var spans = document.querySelectorAll('.hidden__hamburger');
	var box = document.querySelector('.hidden__box');

	if (!buttonClicked) {
		spans[0].style.transform = 'translateY(7px) rotate(45deg)';
		spans[1].style.display = 'none';
		spans[2].style.transform = 'translateY(-1px) rotate(-45deg)';
		box.style.display = 'block';
		box.style.transform = 'transform: scale(1) translateX(100%);';
		buttonClicked = true;
	} else {
		spans[0].style.transform = '';
		spans[1].style.display = 'block';
		spans[2].style.transform = '';
		box.style.display = 'none';
		box.style.transform = 'transform: scale(0) translateX(-100%);';
		buttonClicked = false;
	}
});

// ? tombol totop
var toTop = document.getElementById('toTop');

toTop.addEventListener('click', function () {
	window.scrollTo(0, 0);
});

// ? animasi pada navbar
const nav = document.getElementById('navbar');
let oldValue = 0;
let animation_height = 100;
let small_screen_height = 80;

window.addEventListener('scroll', function () {
	let newValue = window.scrollY;
	if (oldValue - newValue < 0 && newValue > animation_height) {
		// nav.style.top = '-100px';
		nav.style.transform = 'translateY(-100px)';
	} else if (oldValue - newValue > 0) {
		setTimeout(() => {
			// nav.style.top = '0px';
			nav.style.transform = '';
		}, 100);
	}

	if (window.innerWidth <= 600) {
		animation_height = small_screen_height;
	}

	oldValue = newValue;
});
