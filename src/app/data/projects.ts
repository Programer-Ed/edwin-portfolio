import Image from "next/image"; 
 
 export interface Project {
  title: string;
// tag: string;
  description: string;
   thumbnail: string;
   thumbnail2?: string;
   theme: string;
   type: string;
   sourceUrl?: string;
   liveUrl: string;
 }

 const projects: Project[] = [
{
    title: "Moodie",
    // tag: "mb",
    description: "A movie discovery app using the TMDB API. Search, view details, and save favorites. Built with React and styled with Tailwind.",
    thumbnail: "moviebox.png",
    theme: "rose",
    type: "absolute",
    sourceUrl: "https://github.com/Programer-Ed/moodie",
    liveUrl: "https://moodie-beryl.vercel.app/",
  },
  {
    title: "Recipe App",
    // tag: "rc",
    description: "FlavourQuest is a recipe discovery web app that lets users explore unique dishes, view ingredients, and get step-by-step cooking instructions—all in one sleek, easy-to-use interface.",
    thumbnail: "recipeimg.jpg",
    theme: "amber",
    type: "default",
    sourceUrl: "https://github.com/Programer-Ed/FlavourQuest",
    liveUrl: "https://programer-ed.github.io/FlavourQuest/",
  },
  {
    title: "Dark Room",
    // tag: "cms",
    description: "Collaboration to build a movie app",
    thumbnail: "stream.jpg",
    theme: "cyan",
    type: "default",
    sourceUrl: "https://github.com/BAKARIBUBU/DarkRoom",
    liveUrl: "https://darkroomfrontend.onrender.com/",
  },
  // {
  //   title: "E-Shop",
  //   // tag: "ec",
  //   description: "A modern e-commerce platform with dynamic product listings, search, and checkout. Built with React and Express.",
  //   thumbnail: "eshop.jpg",
  //   theme: "violet",
  //   type: "split",
  //   sourceUrl: "https://github.com/aoluoch/E-shop",
  //   liveUrl: "e-shop-opal-alpha.vercel.app",
  // }
];

 export default projects;
