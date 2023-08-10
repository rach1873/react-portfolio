import html from "../images/skills/html.svg";
import css from "../images/skills/css.svg";
import js from "../images/skills/javascript.svg";
import react from "../images/skills/react.svg";
import next from "../images/skills/nextjs.svg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main className="text-white w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-emerald-600 space-y-8">
      <Link
        to="/projects/html"
        className="flex hover:scale-125 duration-700 cursor-pointer space-x-2"
      >
        <img src={html} alt="html" className="w-48 h-48" />
        <img src={css} alt="css" className="w-48 h-48" />
        <img src={js} alt="html" className="w-48 h-48" />
        <h1 className="self-center">HTML CSS and JavaScript</h1>
      </Link>
      <Link
        to="/projects/react"
        className="flex hover:scale-125 duration-700 cursor-pointer space-x-2"
      >
        <img src={react} alt="" className="w-48 h-48" />
        <h1 className="self-center">React</h1>
      </Link>
      <Link
        to="/projects/nextjs"
        className="flex hover:scale-125 duration-700 cursor-pointer space-x-2"
      >
        <img src={next} alt="" className="w-48 h-48" />
        <h1 className="self-center">Nextjs</h1>
      </Link>
    </main>
  );
};

export default Projects;
