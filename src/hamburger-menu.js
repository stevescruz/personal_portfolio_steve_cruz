function toggleHamburguerMenu() {
  const toggler = document.querySelector('.toggler');
  const togglerIcon = document.querySelector('.toggler__icon')
  const popupWindow = document.querySelector('.popup-window')

  // const togglerChangeEvent = new Event('change');
  
  toggler.classList.toggle('toggler--open-menu');
  togglerIcon.classList.toggle('toggler__icon--open-menu');
  popupWindow.classList.toggle('popup-window--open-menu');
}

function setHamburgerMenuEvents(event) {
  const toggler = document.querySelector('.toggler');

  const isOpen = toggler.classList.contains('toggler--open-menu');
  
  console.log('isOpen:', isOpen);

  setBodyOverflow(isOpen);
  setHamburgerMenuTabIndex(isOpen);
  
  const popupWindow = document.querySelector('.popup-window');

  if(isOpen) {
    popupWindow.addEventListener('click', closeHamburgerMenu);
    popupWindow.addEventListener('keydown', keydownCloseHamburgerMenu);

    console.log('opened');
  }
  else {
    popupWindow.removeEventListener('click', closeHamburgerMenu);
    popupWindow.removeEventListener('keydown', keydownCloseHamburgerMenu);

    console.log('closed');
  }

}

function setHamburgerMenuTabIndex (isOpen) {
  navLinks = document.querySelectorAll('.popup-window .navbar__link');

  if(isOpen) {
    navLinks.forEach((navLink) => {
      navLink.setAttribute('tabindex', '0')
    });   
  }
  else {
    navLinks.forEach((navLink) => {
      navLink.setAttribute('tabindex', '-1')
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

const toggler = document.querySelector('.toggler');

toggler.addEventListener('click', (event) => {
  toggleHamburguerMenu();
  setHamburgerMenuEvents(event);
});