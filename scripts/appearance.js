// Switch between Light and Dark mode

const btn = document.querySelector('.switch-mode');

const stylesheetDark = document.styleSheets[0];
const stylesheetLight = document.styleSheets[1];

btn.onclick = function() {
  if (stylesheetDark.disabled === false) {
    stylesheetDark.disabled = true;
    stylesheetLight.disabled = false;
  } else if (stylesheetLight.disabled === false) {
    stylesheetLight.disabled = true;
    stylesheetDark.disabled = false;
  }
}