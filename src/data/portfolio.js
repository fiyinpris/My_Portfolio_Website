// All the portfolio content lives here, so text, links and projects
// can be updated without touching the layout components.
import {
  Code,
  Github,
  Instagram,
  Linkedin,
  Palette,
  Server,
  Wrench,
} from "lucide-react";

export const profile = {
  firstName: "Priscilla",
  fullName: "Olaleke Fiyinfoluwa Priscilla",
  role: "Frontend & Backend Developer",
  email: "fiyinolaleke@gmail.com",
  phone: "+234 813 5424 926",
  phoneHref: "tel:+2348135424926",
  location: "Nigeria",
  experience: "3 years",
  languages: ["English", "French"],
  cv: "/cv/my-resume.pdf",
  cvFileName: "Olaleke-Fiyinfoluwa-CV.pdf",
};

export const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contacts" },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/fiyinpris", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/olaleke-fiyin-453528291",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_f_pris",
    icon: Instagram,
  },
];

export const skills = [
  {
    name: "HTML/CSS",
    level: 90,
    description:
      "Crafting responsive, pixel-perfect interfaces with modern CSS techniques",
    category: "frontend",
    icon: Palette,
  },
  {
    name: "JavaScript",
    level: 85,
    description: "Building interactive experiences with vanilla JS and ES6+",
    category: "frontend",
    icon: Code,
  },
  {
    name: "React",
    level: 88,
    description:
      "Creating dynamic UIs with hooks, context, and modern React patterns",
    category: "frontend",
    icon: Code,
  },
  {
    name: "Node.js",
    level: 80,
    description: "Building scalable backend services and RESTful APIs",
    category: "backend",
    icon: Server,
  },
  {
    name: "Tailwind CSS",
    level: 90,
    description:
      "Designing modern, responsive, and visually appealing UIs efficiently using Tailwind utility classes.",
    category: "frontend",
    icon: Palette,
  },
  {
    name: "Git / GitHub",
    level: 85,
    description:
      "Version control and collaboration using Git and GitHub for efficient project management.",
    category: "tools",
    icon: Wrench,
  },
];

// From the CV: other languages and frameworks
export const toolkit = {
  proficient: ["Python"],
  familiar: ["Vue.js", "Angular", "Bootstrap", "Sass/SCSS"],
};

export const experience = [
  {
    role: "Frontend Developer",
    company: "Hackcity",
    period: "Sep 2023 – Dec 2023",
    location: "Ile-Ife, Nigeria",
    points: [
      "Participated in a real-life capstone project, gaining invaluable insights into the intricacies of the software development lifecycle.",
      "Mastered Tailwind CSS and JavaScript, acquiring hands-on experience in modern web development methodologies.",
      "Strengthened problem-solving skills through continuous assessment and feedback.",
    ],
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    keyProject: {
      title: "Classify — capstone clothing website",
      summary:
        "Led the team capstone project, building engaging interfaces with Tailwind CSS and JavaScript interactivity.",
      href: "https://capstone-project-eta-one.vercel.app",
    },
  },
];

// Tech lists come from each project's repository (package.json and imports)
export const projects = [
  {
    title: "Declutt",
    category: "Marketplace",
    status: "Live",
    image: "/projects/declutt.webp",
    description:
      "A marketplace for buying and selling pre-loved items, giving clutter a second life. It has listings with search, product pages, a cart, buyer and seller dashboards, an admin panel and in-app chat, all backed by Firebase authentication and a Firestore database.",
    tech: ["React", "Vite", "Tailwind CSS", "Firebase", "React Router"],
    liveUrl: "https://declutt.vercel.app",
    codeUrl: "https://github.com/fiyinpris/Declutt",
  },
  {
    title: "Saomi",
    category: "Brand website",
    status: "Live",
    image: "/projects/saomi.webp",
    description:
      "A luxury fragrance house website for Liquid Gold eau de parfum. A cinematic video hero, scent families and a collection showcase, hand-built without a framework and animated on scroll with vanilla JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://saomi-rho.vercel.app",
    codeUrl: "https://github.com/fiyinpris/Saomi",
  },
  {
    title: "my.LIGHTSTORE",
    category: "E-commerce",
    status: "Live",
    image: "/projects/my-lightstore.webp",
    description:
      "An online store for studio and content-creator lighting. Shoppers can browse and search products, save a wishlist, sign in with Google and check out with Paystack, with the catalogue stored in Firestore.",
    tech: ["React", "Vite", "Tailwind CSS", "Firebase", "Paystack", "EmailJS"],
    liveUrl: "https://my-website-chi-sage.vercel.app",
    codeUrl: "https://github.com/fiyinpris/MY-WEBSITE",
  },
];
