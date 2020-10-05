const projectsCarousel = new Carousel('projectsCarousel');
const slidesData = [
  {
    title: 'Coca-Cola Landing Page',
    image: 'assets/project_3a.gif',
    tags: ["CSS", "JavaScript", "Responsivity"],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde expedita fugiat ex odio? Ullam quisquam odit blanditiis reiciendis officiis, veritatis cupiditate mollitia nostrum. Nemo, ratione sunt magnam odit itaque perferendis.',
  },
  {
    title: 'eBarber',
    image: 'assets/project_1a.gif',
    tags: ["TypeScript", "ReactJS", "Node.js"],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde expedita fugiat ex odio? Ullam quisquam odit blanditiis reiciendis officiis, veritatis cupiditate mollitia nostrum. Nemo, ratione sunt magnam odit itaque perferendis.',
  },
  {
    title: 'Coca-Cola Landing Page',
    image: 'assets/project_3a.gif',
    tags: ["CSS", "JavaScript", "Responsivity"],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde expedita fugiat ex odio? Ullam quisquam odit blanditiis reiciendis officiis, veritatis cupiditate mollitia nostrum. Nemo, ratione sunt magnam odit itaque perferendis.',
  },
  {
    title: 'eBarber',
    image: 'assets/project_1a.gif',
    tags: ["TypeScript", "ReactJS", "Node.js"],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde expedita fugiat ex odio? Ullam quisquam odit blanditiis reiciendis officiis, veritatis cupiditate mollitia nostrum. Nemo, ratione sunt magnam odit itaque perferendis.',
  }
];

function init() {
  slidesData.forEach(({title, image, tags, description}) => {

    projectsCarousel.addSlide(title, image, tags, description);
  });

  projectsCarousel.updateSlides();
}

init();