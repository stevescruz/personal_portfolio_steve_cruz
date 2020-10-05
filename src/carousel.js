class Carousel {

  constructor(mainClassName) {
    this.slides = [];
    this.currentSlideIndex = null;
    this.mainClassName = mainClassName;

    this.addEventListeners();
  }

  addEventListeners() {
    const carouselPrevButton = document.querySelector(`.${this.mainClassName} .carousel__button--left`);
    const carouselNextButton = document.querySelector(`.${this.mainClassName} .carousel__button--right`);
    const carouselNav = document.querySelector(`.${this.mainClassName} .carousel__nav`);

    carouselPrevButton.addEventListener('click', () => {
      projectsCarousel.previous();
    });
    carouselNextButton.addEventListener('click', () => {
      projectsCarousel.next();
    });


    carouselNav.addEventListener('click', (event) => {
      const targetDotIndicator = event.target.closest('button');

      if (targetDotIndicator) {
        const dotIndicators = Array.from(document.querySelectorAll(`.${this.mainClassName} .carousel__dot-indicator`));
        const targetIndex = dotIndicators.findIndex((dotIndicator) => dotIndicator === targetDotIndicator);

        const currentSlide = this.slides[this.currentSlideIndex];
        const targetSlide = this.slides[targetIndex];
        this.currentSlideIndex = targetIndex;

        this.changeToTargetSlide(currentSlide, targetSlide);
        this.changeToTargetDotIndicator(targetDotIndicator);
      }
    });
  }

  addSlide(title, image, tags, description) {
    const carouselTrack = document.querySelector(`.${this.mainClassName} .carousel__track`);

    const carouselSlide = document.createElement('li');
    const slideTitle = document.createElement('p');
    const slideImage = document.createElement('img');
    const slideTagsContainer = document.createElement('ul');
    const slideDescription = document.createElement('p');
    const slideButton = document.createElement('button');

    tags.forEach((tag) => {
      const slideTag = document.createElement('li');
      slideTag.textContent = tag;
      slideTag.classList.add('tag');
      slideTagsContainer.appendChild(slideTag);
    });

    carouselSlide.classList.add('carousel__slide');

    slideTitle.textContent = title;

    slideImage.classList.add('carousel__image');
    slideImage.setAttribute('src', image);

    slideTagsContainer.classList.add('tags-container');

    slideDescription.textContent = description;

    slideButton.textContent = 'Read More';
    slideButton.classList.add('carousel__modal-button');
    slideButton.setAttribute("tabindex", "-1");
    slideButton.addEventListener('click', () => {
      const popUp = new PopUp();
      document.body.appendChild(popUp);
      popUp.show();
    });

    carouselSlide.appendChild(slideTitle);
    carouselSlide.appendChild(slideImage);
    carouselSlide.appendChild(slideTagsContainer);
    carouselSlide.appendChild(slideDescription);
    carouselSlide.appendChild(slideButton);

    carouselTrack.appendChild(carouselSlide);
  }

  next() {
    const currentSlide = this.slides[this.currentSlideIndex];

    this.loopAtLastSlide();

    const targetSlide = this.slides[this.currentSlideIndex];

    this.changeToTargetSlide(currentSlide, targetSlide);
    this.updateDot();
  }

  previous() {
    const currentSlide = this.slides[this.currentSlideIndex];

    this.loopAtFirstSlide();

    const targetSlide = this.slides[this.currentSlideIndex];

    this.changeToTargetSlide(currentSlide, targetSlide);
    this.updateDot();
    
  }

  loopAtFirstSlide() {
    if(this.currentSlideIndex === 0) {
      this.currentSlideIndex = this.slides.length - 1;
    }
    else {
      this.currentSlideIndex --;
    }
  }

  loopAtLastSlide() {
    if(this.currentSlideIndex === this.slides.length - 1) {
      this.currentSlideIndex = 0;
    }
    else {
      this.currentSlideIndex ++;
    }
  }

  changeToTargetSlide(currentSlide, targetSlide) {
    currentSlide.classList.remove('carousel__slide--current-slide')
    targetSlide.classList.add('carousel__slide--current-slide');
  }

  changeToTargetDotIndicator(targetDotIndicator) {
    const currentDotIndicator = document.querySelector(`.${this.mainClassName} .carousel__dot-indicator--current-slide`);
    currentDotIndicator.classList.remove('carousel__dot-indicator--current-slide');

    targetDotIndicator.classList.add('carousel__dot-indicator--current-slide');
  }

  updateSlides() {
    this.slides = document.querySelectorAll(`.${this.mainClassName} .carousel__slide`);

    if (this.currentSlideIndex === null && this.slides.length) {
      this.currentSlideIndex = 0;
      this.slides[0].classList.add('carousel__slide--current-slide');
    }

    this.hideShowDotIndicators();
    this.hideShowNavButtons();
  }

  updateDot() {
    if(this.slides.length >= 3) {
      const carouselDotIndicators = document.querySelectorAll(`.${this.mainClassName} .carousel__dot-indicator`);
      const targetDotIndicator = carouselDotIndicators[this.currentSlideIndex];
      this.changeToTargetDotIndicator(targetDotIndicator);
    }
  }

  hideShowDotIndicators() {
    const carouselNav = document.querySelector(`.${this.mainClassName} .carousel__nav`);

    if (this.slides.length >= 3) {
      carouselNav.classList.remove('--hidden');

      for(let i = 0; i < this.slides.length; i ++) {
        const carouselIndicator = document.createElement('button');
        carouselIndicator.classList.add('carousel__dot-indicator');

        if(i === this.currentSlideIndex) {
          carouselIndicator.classList.add('carousel__dot-indicator--current-slide');
        }

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

  hideShowNavButtons() {
    const carouselButtons = document.querySelectorAll(`.${this.mainClassName} > .carousel__button`);

    if (this.slides.length >= 2) {
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
  
}