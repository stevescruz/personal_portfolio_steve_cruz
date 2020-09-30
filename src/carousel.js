let slides = [];
let currentSlide = null;

function updateSlides() {
  slides = document.querySelectorAll('.carousel__slide');

  if (currentSlide === null && slides.length) {
    currentSlide = 0;
    slides[0].classList.add('carousel__slide--current-slide');
  }

  setIndicators();
  setSlideButtons();
}

function setIndicators() {
  const carouselNav = document.querySelector('.carousel__nav');

  if (slides.length >= 3) {
    carouselNav.classList.remove('--hidden');

    for(let i = 0; i < slides.length; i ++) {
      const carouselIndicator = document.createElement('button');
      carouselIndicator.classList.add('carousel__dot-indicator');

      if(i === currentSlide) {
        carouselIndicator.classList.add('carousel__dot-indicator--current-slide');
      }

      carouselIndicator.setAttribute('data-number', i.toString())
      carouselIndicator.addEventListener('click', changeTo);

      carouselNav.appendChild(carouselIndicator);
    }
  }
  else {
    carouselNav.classList.add('--hidden');
    
    const carouselIndicators = carouselNav.childNodes;
    carouselIndicators.forEach((carouselIndicator) => {
      carouselNav.removeChild(carouselIndicator);
    });
  }
}

function setSlideButtons() {
  const carouselButtons = document.querySelectorAll('.carousel > .carousel__button');

  if (slides.length >= 2) {
    carouselButtons.forEach((carouselButton) => {
      carouselButton.classList.remove('--hidden');
    });
  }
  else {
    carouselButtons.forEach((carouselButton) => {
      carouselButton.classList.add('--hidden');
    });
  }
}

function addSlide(title, image, description) {
  const carouselTrack = document.querySelector('.carousel__track');

  const carouselSlide = document.createElement('li');
  const slideTitle = document.createElement('p');
  const slideImage = document.createElement('img');
  const slideDescription = document.createElement('p');
  const slideButton = document.createElement('button');

  carouselSlide.classList.add('carousel__slide');

  slideTitle.textContent = title;

  slideImage.classList.add('carousel__image');
  slideImage.setAttribute('src', image);

  slideDescription.textContent = description;

  slideButton.textContent = 'Read More';
  slideButton.classList.add('carousel__modal-button');
  slideButton.setAttribute("tabindex", "-1");

  carouselSlide.appendChild(slideTitle);
  carouselSlide.appendChild(slideImage);
  carouselSlide.appendChild(slideDescription);
  carouselSlide.appendChild(slideButton);

  carouselTrack.appendChild(carouselSlide);
}

function next() {
  slides[currentSlide].classList.remove('carousel__slide--current-slide');

  if(slides.length >= 3) {
    const carouselIndicators = document.querySelectorAll('.carousel__dot-indicator');
    carouselIndicators[currentSlide].classList.remove('carousel__dot-indicator--current-slide');
  }

  if(currentSlide === slides.length - 1) {
    currentSlide = 0;
  }
  else {
    currentSlide ++;
  }

  slides[currentSlide].classList.add('carousel__slide--current-slide');

  if(slides.length >= 3) {
    const carouselIndicators = document.querySelectorAll('.carousel__dot-indicator');
    carouselIndicators[currentSlide].classList.add('carousel__dot-indicator--current-slide');
  }
}

function previous() {
  slides[currentSlide].classList.remove('carousel__slide--current-slide');

  if(slides.length >= 3) {
    const carouselIndicators = document.querySelectorAll('.carousel__dot-indicator');
    carouselIndicators[currentSlide].classList.remove('carousel__dot-indicator--current-slide');
  }

  if(currentSlide === 0) {
    currentSlide = slides.length - 1;
  }
  else {
    currentSlide --;
  }

  slides[currentSlide].classList.add('carousel__slide--current-slide');

  if(slides.length >= 3) {
    const carouselIndicators = document.querySelectorAll('.carousel__dot-indicator');
    carouselIndicators[currentSlide].classList.add('carousel__dot-indicator--current-slide');
  }
}

function changeTo(event) {
  const currentIndicator = document.querySelector('.carousel__dot-indicator--current-slide');
  currentIndicator.classList.remove('carousel__dot-indicator--current-slide');

  slides[currentSlide].classList.remove('carousel__slide--current-slide');

  event.target.classList.add('carousel__dot-indicator--current-slide');
  currentSlide = parseInt(event.target.dataset.number);
  slides[currentSlide].classList.add('carousel__slide--current-slide');
  
}