const projectsCarousel = new Carousel('projectsCarousel');
const slidesData = [
  {
    title: 'Coca-Cola Landing Page',
    image: 'assets/project_3a.gif',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde expedita fugiat ex odio? Ullam quisquam odit blanditiis reiciendis officiis, veritatis cupiditate mollitia nostrum. Nemo, ratione sunt magnam odit itaque perferendis.',
  },
  {
    title: 'eBarber',
    image: 'assets/project_1a.gif',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde expedita fugiat ex odio? Ullam quisquam odit blanditiis reiciendis officiis, veritatis cupiditate mollitia nostrum. Nemo, ratione sunt magnam odit itaque perferendis.',
  },
  {
    title: 'Coca-Cola Landing Page',
    image: 'assets/project_3a.gif',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde expedita fugiat ex odio? Ullam quisquam odit blanditiis reiciendis officiis, veritatis cupiditate mollitia nostrum. Nemo, ratione sunt magnam odit itaque perferendis.',
  },
  {
    title: 'eBarber',
    image: 'assets/project_1a.gif',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde expedita fugiat ex odio? Ullam quisquam odit blanditiis reiciendis officiis, veritatis cupiditate mollitia nostrum. Nemo, ratione sunt magnam odit itaque perferendis.',
  }
];

function addEventListeners() {
  const carouselPrevButton = document.querySelector(`.${projectsCarousel.mainClassName} .carousel__button--left`);
  const carouselNextButton = document.querySelector(`.${projectsCarousel.mainClassName} .carousel__button--right`);

  carouselPrevButton.addEventListener('click', () => {
    projectsCarousel.previous();
  });
  carouselNextButton.addEventListener('click', () => {
    projectsCarousel.next();
  });
}

function init() {
  slidesData.forEach(({title, image, description}) => {

    projectsCarousel.addSlide(title, image, description);
  });

  projectsCarousel.updateSlides();

  addEventListeners()
}

init();