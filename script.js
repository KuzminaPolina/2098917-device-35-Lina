const menuButtonIcon = document.querySelector('.js-button-icon');
const menuButton = document.querySelector('.js-button');
const catalogMenu = document.querySelector('.bottom-navigation-catalog-dropdown');
const navigation = document.querySelector('.bottom-navigation');
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

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

new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active-tab');
    })
    tabs.forEach(tab => {
      tab.classList.remove('services-item-active');
    })
    tab.classList.add('services-item-active')
    target.classList.add('active-tab');
  })
})
