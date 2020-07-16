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