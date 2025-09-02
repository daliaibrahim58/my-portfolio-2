// ------------------ Types ------------------

export interface NavItem {
  name: string;
  link: string;
}

export interface GridItem {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  links?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface Company {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}

export interface WorkExperience {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
}

export interface SocialMedia {
  id: number;
  img: string;
  url: string;
}

// ------------------ Data ------------------

export const navItems: NavItem[] = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems: GridItem[] = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a Next.js projects",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "HTML & CSS Beginner Project",
    des: "One of my first projects while learning web development. Built with pure HTML and CSS to practice layouts and styling, not yet responsive.",
    img: "/firstpro.png",
    iconLists: ["/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/Template_one/",
  },
  {
    id: 2,
    title: "HTML & CSS Beginner Project",
    des: "One of my second projects while learning web development. Built with pure HTML and CSS to practice layouts and styling, not yet responsive.",
    img: "/secondpro.png",
    iconLists: ["/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/Template_TWO/",
  },
  {
    id: 3,
    title: "HTML & CSS Beginner Project",
    des: "One of my third projects while learning web development. Built with pure HTML and CSS to practice layouts and styling, not yet responsive.",
    img: "/thirdpro.png",
    iconLists: ["/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/Template-three/",
  },
  {
    id: 4,
    title: "JavaScript War Game",
    des: "A simple war card game built with JavaScript. Players can attack, take health points, see the winner, and restart the game to play again.",
    img: "/wargame.png",
    iconLists: ["/javascript-1.svg", "/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/simple-war-game/",
  },
  {
    id: 5,
    title: "JavaScript OOP Quiz App",
    des: "A quiz application built with JavaScript OOP. Fetches questions from an API, allows selecting categories, submitting answers, and viewing results for each quiz attempt.",
    img: "/quizapp.png",
    iconLists: ["/javascript-1.svg", "/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/Quiz-App/",
  },
  {
    id: 6,
    title: "JavaScript E-Commerce Cart",
    des: "A fully functional e-commerce cart built with pure JavaScript. Features adding products, updating quantities, deleting items, adding to favorites, and user login with information saved in localStorage to maintain session across page reloads.",
    img: "/ecommerce.png",
    iconLists: ["/javascript-1.svg", "/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/E-commerce-shopping-cart/",
  },
  {
    id: 7,
    title: "React Vite To-Do List",
    des: "A To-Do List application built with React and Vite. Features task creation, deletion, and management using Material-UI components, with unique IDs generated via uuid and gh-pages deployment for hosting.",
    img: "/todo.png",
    iconLists: [
      "/react-2.svg",
      "/vitejs.svg",
      "/javascript-1.svg",
      "/material-ui-1.svg",
    ],
    link: "https://daliaibrahim58.github.io/to_do_list/",
  },
  {
    id: 8,
    title: "Weather Application Project",
    des: "A complete weather app project with React and Vite including setup, UI design, API integration, and localization. Features fetching weather data from a JSON file, building user interfaces with React and Tailwind, using Material-UI components, Moment.js for date/time formatting, and i18next for multi-language support.",
    img: "/wheather.png",
    iconLists: [
      "/react-2.svg",
      "/tail.svg",
      "/javascript-1.svg",
      "/material-ui-1.svg",
      "/momentjs.svg",
    ],
    links: "https://daliaibrahim58.github.io/weather-project/",
    link: "",
  },
  {
    id: 9,
    title: "React Redux Toolkit Tutorials",
    des: "A series covering Redux Toolkit basics, slices, async thunks, middleware, and RTK Query, using a local JSON file as a data source to simulate a database.",
    img: "/redux.png",
    iconLists: ["/react-2.svg", "/redux.svg", "/ts.svg", "/javascript-1.svg"],
    link: "https://daliaibrahim58.github.io/redux-app/",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Collaborating with Dalia was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dalia's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dalia is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Dalia was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dalia's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dalia is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Dalia was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dalia's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dalia is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Dalia was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dalia's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dalia is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Dalia was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dalia's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dalia is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies: Company[] = [
  { id: 1, name: "cloudinary", img: "/cloud.svg", nameImg: "/cloudName.svg" },
  { id: 2, name: "appwrite", img: "/app.svg", nameImg: "/appName.svg" },
  { id: 3, name: "HOSTINGER", img: "/host.svg", nameImg: "/hostName.svg" },
  { id: 4, name: "stream", img: "/s.svg", nameImg: "/streamName.svg" },
  { id: 5, name: "docker.", img: "/dock.svg", nameImg: "/dockerName.svg" },
];

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia: SocialMedia[] = [
  { id: 1, img: "/git.svg", url: "https://github.com/daliaibrahim58" },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/DaliaIb582005?t=3vgIzoIIG_twz0ymeWUIrw&s=09",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/dalia-ibrahim-5883782b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];
