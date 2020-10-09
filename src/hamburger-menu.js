function toggleHamburguerMenu() {
  const toggler = document.querySelector('.toggler');
  const togglerIcon = document.querySelector('.toggler__icon')
  const popupWindow = document.querySelector('.popup-window')

  toggler.classList.toggle('toggler--open-menu');
  togglerIcon.classList.toggle('toggler__icon--open-menu');
  popupWindow.classList.toggle('popup-window--open-menu');
}

function setHamburgerMenuEvents(event) {
  const toggler = document.querySelector('.toggler');

  const isOpen = toggler.classList.contains('toggler--open-menu');

  setBodyOverflow(isOpen);
  setHamburgerMenuTabIndex(isOpen);
  
  const popupWindow = document.querySelector('.popup-window');

  if(isOpen) {
    popupWindow.addEventListener('click', closeHamburgerMenu);
    popupWindow.addEventListener('keydown', keydownCloseHamburgerMenu);
  }
  else {
    popupWindow.removeEventListener('click', closeHamburgerMenu);
    popupWindow.removeEventListener('keydown', keydownCloseHamburgerMenu);
  }
}

function setHamburgerMenuTabIndex (isOpen) {
  navLinks = document.querySelectorAll('.popup-window .navbar__link');

  if(isOpen) {
    navLinks.forEach((navLink) => {
      navLink.setAttribute('tabindex', '0')
      navLink.setAttribute('aria-hidden', 'false')
    });   
  }
  else {
    navLinks.forEach((navLink) => {
      navLink.setAttribute('tabindex', '-1')
      navLink.setAttribute('aria-hidden', 'true')
    });  
  }
}

function setHamburgerMenuTrapFocus() {

}

function setBodyOverflow (isOpen) {
  if(isOpen) {
    document.body.style.overflow = 'hidden';
  }
  else {
    document.body.style.overflow = 'visible';
  }
}

function closeHamburgerMenu(event) {
  const anchor = event.target.closest('a');
  const div = event.target.closest('div');

  if(anchor?.nodeName === 'A' || div?.nodeName === 'DIV') {
    toggleHamburguerMenu();
  }
}

function keydownCloseHamburgerMenu(event) {
  if(!isKeyValid(event, event.code)) {
    return false;
  }
  closeHamburgerMenu(event);
}

function resizeHamburgerMenuTabIndex() {
  const viewportWidth = document.documentElement.clientWidth;

  if(viewportWidth <= 894) {
    const toggler = document.querySelector('.toggler');
    const isOpen = toggler.classList.contains('toggler--open-menu');

    setHamburgerMenuTabIndex(false || isOpen);
  }
  else {
    setHamburgerMenuTabIndex(true);
  }
}

const toggler = document.querySelector('.toggler');

toggler.addEventListener('click', (event) => {
  toggleHamburguerMenu();
  setHamburgerMenuEvents(event);
});


window.addEventListener('resize', () => {
  resizeHamburgerMenuTabIndex();
})

resizeHamburgerMenuTabIndex();