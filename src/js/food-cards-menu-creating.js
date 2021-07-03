import foodCards from "../templates/food-cards.hbs"
import menu from "../menu.json";


const switcher = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const THEME = 'theme';

const cardList = document.querySelector('.js-menu');
const cardMarkup = createFoodCardsMarkup(menu);

cardList.insertAdjacentHTML('beforeend',cardMarkup);
switcher.addEventListener('change', onSwitcherChange);


setTheme();

function onSwitcherChange() {
    body.classList.toggle(Theme.DARK);
    body.classList.toggle(Theme.LIGHT);

    const theme = body.classList.value;
    localStorage.setItem(THEME, theme);
    return switcher.checked
    
    
};


function setTheme() {
    switcher.setAttribute("checked", "true");
    body.classList.value = Theme.LIGHT;
    const savedTheme = localStorage.getItem(THEME);

    if (savedTheme) {
        body.classList.value = savedTheme;
        if (savedTheme === "dark-theme") {
            switcher.removeAttribute("checked", "true")
        };
    }
};


function createFoodCardsMarkup(menu) {
  return  foodCards(menu)
    
};

