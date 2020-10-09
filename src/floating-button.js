const floatingButton = document.querySelector('.floating-button');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    floatingButton.classList.add('floating-button--active')
  }
  else {
    floatingButton.classList.remove('floating-button--active')
    floatingButton.blur();
  }
});

floatingButton.addEventListener('click', () => {
  floatingButton.blur();
})