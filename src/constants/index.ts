export const techImage = [
  {
    title: "HTML",
    desc: "I use HTML to structure the content of web pages. It provides the basic framework for displaying text, images, and other elements on the web.",
    imgURL: '/techlogo/html.svg',
    alt: "html",
    className: "w-11 h-auto",
  },
  {
    title: "CSS",
    desc: "CSS helps me style and format the HTML content. It allows me to control layout, colors, fonts, and overall presentation of the website.",
    imgURL: '/techlogo/css.svg',
    alt: "css",
    className: "w-11 h-auto",
  },
  {
    title: "JavaScript",
    desc: "JavaScript is used for adding interactivity to web pages. It allows me to create dynamic and responsive features for the user.",
    imgURL: '/techlogo/javascript.svg',
    alt: "js",
    className: "w-12 h-auto",
  },
  {
    title: "Tailwind CSS",
    desc: "Tailwind CSS is a utility-first CSS framework that streamlines the design process and helps maintain a consistent and responsive design system.",
    imgURL: '/techlogo/tailwind.svg',
    alt: "tailwind",
    className: "w-12 h-auto",
  },
  {
    title: "React",
    desc: "I use React to build user interfaces for web applications. It offers a component-based architecture and allows for efficient rendering of data.",
    imgURL: '/techlogo/react.svg',
    alt: "react",
    className: "w-12 h-auto",
  },
  {
    title: "Next.js",
    desc: "Next.js is a React framework that simplifies server-side rendering and routing, improving SEO and performance in web applications.",
    imgURL: '/techlogo/nextjs.svg',
    alt: "nextjs",
    className: "w-12 h-auto",
  },
  {
    title: "Express",
    desc: "Express is a web application framework for Node.js. It helps me build scalable and robust server-side applications.",
    imgURL: '/techlogo/expressjs.svg',
    alt: "ex",
    className: "w-12 h-auto",
  },
  {
    title: "Node.js",
    desc: "Node.js is used as the server runtime for JavaScript. It enables building server-side applications with the same language as the client-side, promoting code reuse.",
    imgURL: '/techlogo/nodejs.svg',
    alt: "nodejs",
    className: "w-14 h-auto",
  },
  {
    title: "MongoDB",
    desc: "MongoDB is a NoSQL database that provides flexible data storage for web applications, making it easier to handle unstructured data and scale as needed.",
    imgURL: '/techlogo/mongodb.svg',
    alt: "mongodb",
    className: "w-12 h-auto",
  },
  {
    title: "PHP",
    desc: "PHP is a server-side scripting language that I use for building dynamic web applications and connecting to databases like MySQL.",
    imgURL: '/techlogo/php.svg',
    alt: "php",
    className: "w-16 h-auto",
  },
  {
    title: "Laravel",
    desc: "Laravel is a PHP web application framework that simplifies common tasks like routing, authentication, and caching, making development more efficient.",
    imgURL: '/techlogo/laravel.svg',
    alt: "laravel",
    className: "w-12 h-auto",
  },
  {
    title: "MySQL",
    desc: "MySQL is a widely used relational database management system (RDBMS) that I use to store structured data for web applications.",
    imgURL: '/techlogo/sqll.svg',
    alt: "mySQL",
    className: "w-12 h-auto",
  },
];


export const links = {
  github: "https://github.com/riellll",
  linkedin: "https://www.linkedin.com/in/gabriel-noe-napiere-88009525a/",
  resume: "https://drive.google.com/file/d/1ZfstMQchKYjGlDkFyk6Gr0WUvF1XUWkT/view?usp=sharing",
  email: "griel034@gmail.com",
};

type Project = {
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  image?: string;
  demo?: string;
  source?: string;
  // the code can't be shared, so show a "Private repository" note instead of a link
  isPrivate?: boolean;
};

export const projects: Project[] = [
  {
    title: "Spendwise",
    subtitle: "Bank Statement Spending Insights",
    desc: "Turns PDF bank statements into spending insights: upload a statement and every transaction is extracted into dashboards, analytics, and CSV reports. Includes a Claude-powered assistant that logs expenses from chat or receipt photos, plus a Pro plan paid through PayMongo.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Claude API", "PayMongo"],
    image: "/spendwise.png",
    demo: "https://credit-management-eta.vercel.app/",
    isPrivate: true,
  },
  {
    title: "Cinezone",
    subtitle: "Movie Collection App",
    image: "/proj1.PNG",
    desc: "A movie collection app for searching favorite films and discovering hidden gems across genres, eras, and cultures. Built with React and Next.js on the MovieDB API.",
    tags: ["React", "JavaScript", "Next.js", "Tailwind CSS"],
    demo: "https://cinezone-x.vercel.app/",
    source: "https://github.com/riellll/cinezoneX",
  },
  {
    title: "TechStack",
    subtitle: "Tech News & Community Q&A",
    image: "/proj2.PNG",
    desc: "A tech community app that pairs the latest tech news with Stack Overflow Q&A. Built with React and Next.js using the TechNews API.",
    tags: ["React", "JavaScript", "Next.js", "Tailwind CSS"],
    demo: "https://techstack-ucode.vercel.app/",
  },
  {
    title: "Kodejobs",
    subtitle: "Job Posting Platform",
    image: "/proj3.PNG",
    desc: "A job board where companies post openings and showcase themselves to candidates. Built with Next.js on a Node.js and Express backend.",
    tags: ["React", "JavaScript", "Next.js", "Tailwind CSS", "Node.js", "Express"],
    demo: "https://kodejob-2pa9.vercel.app/",
    source: "https://github.com/riellll/kodejob.git",
  },
  {
    title: "ThreadSync",
    subtitle: "Threaded Social Platform",
    image: "/proj4.PNG",
    desc: "A social platform built around threaded conversations, where users share text and images, join discussions, and manage their profiles. Built with Next.js and MongoDB.",
    tags: ["React", "JavaScript", "Next.js", "Tailwind CSS", "MongoDB"],
    demo: "https://threadsync.vercel.app/",
    source: "https://github.com/riellll/threadsync",
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "US-based Real Estate Technology Company",
    period: "Jul 2024 — Sep 2026",
    desc: "Built and maintained full-stack features across multiple applications and services for a real estate platform, including property workflows, offers, billing, and authentication. Worked with Next.js, React, TypeScript, Node.js, PostgreSQL, and third-party integrations.",
  },
  {
    role: "Software Engineer Intern",
    company: "OneLot",
    period: "Jan 2024 — Apr 2024",
    desc: "Developed and maintained features for real estate-related applications, collaborating with the team across both frontend and backend development.",
  },
];

export const technologies = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "REST APIs",
  "Tailwind CSS",
  "Git",
  "Docker",
  "Vercel",
  "MCP",
  "Claude",
];

export const navbarItem = [
  { value: "project", label: "Projects" },
  { value: "experience", label: "Experience" },
  { value: "about", label: "About" },
];
