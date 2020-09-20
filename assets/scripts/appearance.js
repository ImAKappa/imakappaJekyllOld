---
---
/* Toggle Switch
Code courtesy of Ananya Neogi
Source: https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
*/

let toggleSwitch = document.querySelector('.switcheroo input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); //add this
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); //add this
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


const currentTheme = localStorage.getItem('theme') || null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Dropdown Nav for Mobile
let dropdown = document.querySelector('.drop-btn');
let dropContent = document.querySelector('.main-nav');
let overlayBlur = document.querySelector('.overlay');

dropdown.onclick = function() {
  dropContent.classList.toggle("show-nav");
  overlayBlur.classList.toggle("overlay-blur");
}

window.onclick = function(event) {
  if (event.target != dropdown) {
    if (dropContent.classList.contains('show-nav')) {
      dropContent.classList.remove('show-nav');
      overlayBlur.classList.remove("overlay-blur");
    }
  }
  
  if (event.target != ratingBtns[0] && 
    event.target != ratingBtns[1] &&
    event.target != ratingBtns[2] &&
    event.target != ratingBtns[3] &&
    event.target != ratingBtns[4]) {
    for (i=0;i<ratingBtns.length;i++) {
      ratingExplanation[i].classList.remove('show-rating-expl');
    }
  }
}

// Rating system dropdowns

let ratingExplanation = document.querySelectorAll('.rating-explanation');
let ratingBtns = document.querySelectorAll('.rating-btn');

/** Easy Button */
ratingBtns[0].onclick = function() {
  ratingExplanation[0].classList.toggle('show-rating-expl');
}

/** Medium Button */
ratingBtns[1].onclick = function() {
  ratingExplanation[1].classList.toggle('show-rating-expl');
}

/** Intermediate Button */
ratingBtns[2].onclick = function() {
  ratingExplanation[2].classList.toggle('show-rating-expl');
}

/** Hard Button */
ratingBtns[3].onclick = function() {
  ratingExplanation[3].classList.toggle('show-rating-expl');
}

/** Advanced Button */
ratingBtns[4].onclick = function() {
  ratingExplanation[4].classList.toggle('show-rating-expl');
}

