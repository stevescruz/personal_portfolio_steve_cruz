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
    hamburgerMenuTrapFocus(isOpen);
  }
  else {
    popupWindow.removeEventListener('click', closeHamburgerMenu);
    popupWindow.removeEventListener('keydown', keydownCloseHamburgerMenu);
    hamburgerMenuTrapFocus(isOpen);
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

function cycleFocusToLast(event) {
  if (event.code === 'Tab' && event.shiftKey) {
    const lastElement = document.querySelector('.popup-window .navbar__list-item:last-of-type .navbar__link');
    event.preventDefault();
    lastElement.focus();
  }
}

function cycleFocusToFirst(event) {
   if (event.code === 'Tab' && event.shiftKey === false) {
    const firstElement = document.querySelector('.toggler');
    event.preventDefault();
    firstElement.focus();
  }
}

function hamburgerMenuTrapFocus(isOpen) {
  /*
  In a general approach it's necessary to check focusable elements, you need to check: 
    1. if it is a <a>, <button>, <input>, <textarea>, <select> or <details>
    2. if it has tabindex set to 0
    3. if it has tabindex set to a positive number
    4 . filter elements (like button) that can be disabled. Disabled elements are not focusable.
  */
  const firstElement = document.querySelector('.toggler');
  const lastElement = document.querySelector('.popup-window .navbar__list-item:last-of-type .navbar__link');

  if(isOpen) {
    firstElement.addEventListener('keydown', cycleFocusToLast);
    lastElement.addEventListener('keydown', cycleFocusToFirst);
  }
  else {
    firstElement.removeEventListener('keydown', cycleFocusToLast);
    lastElement.removeEventListener('keydown', cycleFocusToFirst);
  }
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