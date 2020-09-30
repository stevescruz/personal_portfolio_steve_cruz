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
  const carouselPrevButton = document.querySelector('.carousel__button--left');
  const carouselNextButton = document.querySelector('.carousel__button--right');

  carouselPrevButton.addEventListener('click', previous);
  carouselNextButton.addEventListener('click', next);
}

function init() {
  slidesData.forEach(({title, image, description}) => {

    addSlide(title, image, description);
  });

  updateSlides();

  addEventListeners()
}

init();