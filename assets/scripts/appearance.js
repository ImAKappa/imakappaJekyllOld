---
---
/* Theme Toggle Switch
Code courtesy of Ananya Neogi
Source: https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
*/

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem("theme", "dark"); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem("theme", "light"); //add this
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') || null;

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
    }
}

// Dropdown Nav for Mobile
const dropDown = document.querySelector(".drop-btn");
const dropContent = document.querySelector(".main-nav");
const overlayBlur = document.querySelector(".overlay");

dropDown.addEventListener("click", dropDownToggle);

function dropDownToggle() {
  dropContent.classList.toggle("show-nav");
  overlayBlur.classList.toggle("overlay-blur");
}

/** Window Click Manager */
const windowScreen = window;

/** Closes nav on window click */
windowScreen.addEventListener("click", function(event) {
  if (event.target != dropDown) {
    if (dropContent.classList.contains("show-nav")) {
      dropContent.classList.remove("show-nav");
      overlayBlur.classList.remove("overlay-blur");
    }
  }
});

windowScreen.addEventListener("click", function(event) {
  let page = document.body.classList;
  if (page.contains("sheets")) {
    if (event.target != ratingBtns[0] &&
      event.target != ratingBtns[1] &&
      event.target != ratingBtns[2] &&
      event.target != ratingBtns[3] &&
      event.target != ratingBtns[4]) {
      displayRatingExplanation(-1);
    }
  }
});

// Rating system dropdowns
const ratingBtns = document.querySelectorAll(".rating-btn");
const ratingExplanation = document.querySelector(".rating-explanation");

/** Adds click event to every difficulty rating btn. Passes the specific
 * button ID to the display rating function
 */
function addEventsToRatingBtns() {
  
  for (i=0;i<ratingBtns.length;i++) {
    ratingBtns[i].addEventListener("click", function(a) {
      return function() {
        displayRatingExplanation(a);
      }
    }(i));
  }
}

/** Initializes clik events on difficulty rating buttons */
addEventsToRatingBtns();

/** Determines what text to display depending on rating button (or window) click */
function displayRatingExplanation(btnId) {
  switch(btnId) {
    case 0:
      ratingExplanation.textContent = `Easy pieces have intervals less than an octave,
       up to moderate tempos,
        and may not require independent hand coordination`
      ratingExplanation.className = "rating-explanation";
      ratingExplanation.classList.add("difficulty", "easy");
      break;
    case 1:
      ratingExplanation.textContent = `Medium pieces may have octaves,
      up to moderately-fast tempos,
       and may require some independent hand coordination`
       ratingExplanation.className = "rating-explanation";
       ratingExplanation.classList.add("difficulty", "medium");
      break;
    case 2:
      ratingExplanation.textContent = `Intermediate pieces may have octaves,
      up to fast tempos,
       and requires independent hand coordination`
      ratingExplanation.className = "rating-explanation";
      ratingExplanation.classList.add("difficulty", "intermediate");
      break;
    case 3:
      ratingExplanation.textContent = `Hard pieces usually have octaves or slightly larger,
      up to presto tempos,
      requires independent hand coordination, 
      and may have multiple voices per hand`
      ratingExplanation.className = "rating-explanation";
      ratingExplanation.classList.add("difficulty", "hard");
      break;
    case 4:
      ratingExplanation.textContent = `Advanced is hard but harder. 
      Pieces may go up to presto,
      Hands may gallop (cross-over each other),
      Some years of piano experience recommended.`
      ratingExplanation.className = "rating-explanation";
      ratingExplanation.classList.add("difficulty", "advanced");
      break;
    default:
      ratingExplanation.textContent = "Click/tap difficulty ratings for more detail"
      ratingExplanation.className = "rating-explanation";
  }
}


