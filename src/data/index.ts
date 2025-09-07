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
    title: "JavaScript OOP Quiz App",
    des: "A quiz application built with JavaScript OOP. Fetches questions from an API, allows selecting categories, submitting answers, and viewing results for each quiz attempt.",
    img: "/quizapp.png",
    iconLists: ["/javascript-1.svg", "/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/Quiz-App/",
  },

  {
    id: 2,
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
    id: 3,
    title: "React Redux Toolkit Tutorials",
    des: "A series covering Redux Toolkit basics, slices, async thunks, middleware, and RTK Query, using a local JSON file as a data source to simulate a database.",
    img: "/redux.png",
    iconLists: ["/react-2.svg", "/redux.svg", "/ts.svg", "/javascript-1.svg"],
    link: "https://daliaibrahim58.github.io/redux-app/",
  },
  {
    id: 4,
    title: "🔍 Wikipedia Search API Integration",
    des: "A simple Next.js utility that fetches live Wikipedia results using the MediaWiki API. Returns page images, short extracts, and links for up to 20 search results.",
    img: "/wikires.png",
    iconLists: ["/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://wiki-rocket-khaki.vercel.app/",
  },
  {
    id: 5,
    title: "Next.js 13 Blog with Remote MDX Integration",
    des: "Build and deploy a modern blog using Next.js 13 with remote MDX files as content. Learn how to set up dynamic routes, static generation, and publish a fast, SEO-friendly blog.",
    img: "/blog.png",
    iconLists: ["/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://blog-posts-smoky.vercel.app/",
  },
  {
    id: 6,
    title: "📘 User & Posts Explorer with Next.js",
    des: "A Next.js project that fetches users from an API and lets you explore their posts with a clean, modern UI. Browse users, click a name, and instantly see all their posts styled beautifully.",
    img: "/users.png",
    iconLists: ["/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://get-users-brown.vercel.app/",
  },
  {
    id: 7,
    title: "✅ Full-Stack Todo List with Server Actions",
    des: "A Todo List app built with Next.js, React hooks, and server actions. Using a local JSON file as a data source to simulate a database, allowing you to add, edit, and delete todos seamlessly. A clean and responsive UI makes task management simple and efficient.",
    img: "/todonext.png",
    iconLists: ["/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://todo-list-next-sepia.vercel.app/",
  },
  {
    id: 8,
    title: "File Upload System with UploadThing in Next.js",
    des: "A modern file upload feature built in Next.js using UploadThing. Supports both button-based uploads and drag & drop uploads with live previews. Styled with Tailwind CSS, it provides a clean UI and seamless file handling experience.",
    img: "/uploadthing.png",
    iconLists: ["/tail.svg", "/ts.svg", "/next.svg", "UploadThing-Logo.svg"],
    link: "https://upload-thing-zeta.vercel.app/",
  },

  // ====== Not responsive projects moved to the end ======
  {
    id: 9,
    title: "JavaScript War Game",
    des: "A simple war card game built with JavaScript. Players can attack, take health points, see the winner, and restart the game to play again.",
    img: "/wargame.png",
    iconLists: ["/javascript-1.svg", "/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/simple-war-game/",
  },
  {
    id: 10,
    title: "Weather Application Project (Not Responsive)",
    des: "A complete weather app project with React and Vite including setup, UI design, API integration, and localization. Features fetching weather data from a JSON file, building user interfaces with React and Tailwind, using Material-UI components, Moment.js for date/time formatting, and i18next for multi-language support.",
    img: "/wheather.png",
    iconLists: [
      "/react-2.svg",
      "/tail.svg",
      "/javascript-1.svg",
      "/material-ui-1.svg",
      "/momentjs.svg",
    ],
    link: "https://daliaibrahim58.github.io/weather-project/",
  },
  {
    id: 11,
    title: "JavaScript E-Commerce Cart",
    des: "A fully functional e-commerce cart built with pure JavaScript. Features adding products, updating quantities, deleting items, adding to favorites, and user login with information saved in localStorage to maintain session across page reloads.",
    img: "/ecommerce.png",
    iconLists: ["/javascript-1.svg", "/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/E-commerce-shopping-cart/",
  },
  {
    id: 12,
    title: "HTML & CSS Beginner Project (Not Responsive)",
    des: "One of my first projects while learning web development. Built with pure HTML and CSS to practice layouts and styling, not yet responsive.",
    img: "/firstpro.png",
    iconLists: ["/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/Template_one/",
  },
  {
    id: 13,
    title: "HTML & CSS Beginner Project (Not Responsive)",
    des: "One of my second projects while learning web development. Built with pure HTML and CSS to practice layouts and styling, not yet responsive.",
    img: "/secondpro.png",
    iconLists: ["/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/Template_TWO/",
  },
  {
    id: 14,
    title: "HTML & CSS Beginner Project (Not Responsive)",
    des: "One of my third projects while learning web development. Built with pure HTML and CSS to practice layouts and styling, not yet responsive.",
    img: "/thirdpro.png",
    iconLists: ["/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/Template-three/",
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
    title: "Frontend Engineer Intern - Depi",
    desc: "Specialized in building React applications with solid knowledge in HTML, CSS, and JavaScript. Experienced in Git/GitHub for version control, Node.js for server-side scripting, and familiar with Docker & Kubernetes. Completed a capstone project integrating React and Node.js into a real-world web app.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Collaboration Projects",
    desc: "Worked closely with a team using Figma to design and implement frontend projects, ensuring clean UI/UX and smooth development workflow.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "ECPC Participation",
    desc: "Participated in the Egyptian Collegiate Programming Contest (ECPC), enhancing problem-solving and competitive programming skills within a team-based environment.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
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
