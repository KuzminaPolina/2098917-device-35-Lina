const menuButtonIcon = document.querySelector('.js-button-icon');
const menuButton = document.querySelector('.js-button');
const catalogMenu = document.querySelector('.bottom-navigation-catalog-dropdown');
const navigation = document.querySelector('.bottom-navigation');

function closeMenu () {
  menuButtonIcon.classList.remove('icon-minus');
  menuButtonIcon.classList.add('icon-plus');
  catalogMenu.classList.remove('open');
};

function openMenu () {
  menuButtonIcon.classList.remove('icon-plus');
  menuButtonIcon.classList.add('icon-minus');
  catalogMenu.classList.add('open');
}

const toggleMenu = () => {
  const onOpenMenuClick = (evt) => {
    if(evt.target.closest('.js-button')){
      if (menuButtonIcon.classList.contains('icon-minus')) {
        closeMenu();
      } else {
        openMenu();
      }
    }
  }
  navigation.addEventListener('click', onOpenMenuClick)
}

toggleMenu();
