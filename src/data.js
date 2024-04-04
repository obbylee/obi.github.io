import nike from "./assets/nike.png";
import carhub from "./assets/carhub.png";
import hilink from "./assets/hilink.png";
import promptopia from "./assets/promptopia.png";
import sushiman from "./assets/sushiman.png";
import threads from "./assets/threads.png";

export const sosialMedia = [
  { name: "Github", url: "https://github.com/obbylee" },
  { name: "Linkedin", url: "https://www.linkedin.com/in/leeobby/" },
  { name: "Leetcode", url: "https://leetcode.com/leeobbyw/" },
  {
    name: "Youtube",
    url: "https://www.youtube.com/channel/UC8JE314YC0kPTeFbdHnwHCA",
  },
];
export const projects = [
  {
    title: "Nikke",
    url: "https://willowy-shortbread-572a5c.netlify.app/",
    description:
      "Site using React for seamless user experience about shoes product",
    techstack: ["Vite", "React", "Tailwindcss"],
    img: {
      alt: "website",
      url: nike,
    },
    github: "https://github.com/obbylee/portofolio/tree/main/nike",
  },
  {
    title: "Sushiman",
    url: "https://fancy-tartufo-5d408b.netlify.app/",
    description:
      "Build sushi restaurant site with React, boosting online presence",
    techstack: ["Frame motion", "Vite", "React", "Tailwindcss"],
    img: {
      alt: "website",
      url: sushiman,
    },
    github: "https://github.com/obbylee/portofolio/tree/main/sushiman",
  },
  {
    title: "Hilink Camp Area",
    url: "https://luminous-gelato-91c420.netlify.app/",
    description:
      "Created immersive hiking camp site, enhancing outdoor experiences.",
    techstack: ["NextJS", "React", "Tailwindcss"],
    img: {
      alt: "website",
      url: hilink,
    },
    github: "https://github.com/obbylee/portofolio/tree/main/traveluiux",
  },
  {
    title: "Promptopia",
    url: "https://promptopia-nine-tau.vercel.app/",
    description:
      "Build user-friendly platform for AI Promptopia sharing and collaboration.",
    techstack: ["MongoDB", "React", "Tailwindcss", "NextJS", "NextAuth"],
    img: {
      alt: "website",
      url: promptopia,
    },
    github: "https://github.com/obbylee/portofolio/tree/main/promptopia",
  },
  {
    title: "Threads Clone",
    url: "https://portofolio-seven-gamma.vercel.app/",
    description:
      "Build Threads clone sosial media where we can create or share post online",
    techstack: ["Clerk", "MongoDB", "React", "Tailwindcss", "NextJS"],
    img: {
      alt: "website",
      url: threads,
    },
    github: "https://github.com/obbylee/portofolio/tree/main/threads",
  },
];
