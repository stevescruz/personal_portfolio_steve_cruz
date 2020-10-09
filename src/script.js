const slidesData = [
  {
    title: 'Coca-Cola Landing Page',
    image: 'assets/project_3a.gif',
    tags: ["CSS", "JavaScript", "Responsivity", "A11y"],
    description: 'Landing page created with vanilla CSS and JavaScript to showcase responsive design, web accessibility good practices and fluid animations. It is important to create applications without using the popular frameworks to understand the magic under the hood.',
    github: 'https://github.com/stevescruz/landing-page_coca-cola',
    demo: 'https://stevescruz.github.io/landing-page_coca-cola/',
  },
  {
    title: 'eBarber Web',
    image: 'assets/project_1a.gif',
    tags: ["TypeScript", "ReactJS", "Node.js"],
    description: 'Schedule appointments with your favorite barber! Web front-end application and API back-end built with JavaScript at its core (ReactJS, Node.js and TypeScript), the app enables authentication with JWT Auth and manages data with PostgreSQL. The deployment environment was configured with Docker, set up ESLint and Prettier to ensure code quality, and all testing was created with Jest.',
    github: 'https://github.com/stevescruz/ebarber_web',
  },
  {
    title: 'eBarber API',
    image: 'assets/project_1a.gif',
    tags: ["TypeScript", "ReactJS", "Node.js"],
    description: 'Schedule appointments with your favorite barber! Web front-end application and API back-end built with JavaScript at its core (ReactJS, Node.js and TypeScript), the app enables authentication with JWT Auth and manages data with PostgreSQL. The deployment environment was configured with Docker, set up ESLint and Prettier to ensure code quality, and all testing was created with Jest.',
    github: 'https://github.com/stevescruz/ebarber_backend',
  },
  {
    title: 'Explore GitHub',
    image: 'assets/project_1a.gif',
    tags: ["TypeScript", "ReactJS", "Node.js"],
    description: 'Schedule appointments with your favorite barber! Web front-end application and API back-end built with JavaScript at its core (ReactJS, Node.js and TypeScript), the app enables authentication with JWT Auth and manages data with PostgreSQL. The deployment environment was configured with Docker, set up ESLint and Prettier to ensure code quality, and all testing was created with Jest.',
    github: 'https://github.com/stevescruz/explore_github',
    demo: 'https://stevescruz.github.io/explore_github/',
  },
];

const projectsCarousel = new Carousel('projectsCarousel', slidesData);