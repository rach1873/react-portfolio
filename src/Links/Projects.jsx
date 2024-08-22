import html from "../images/skills/html.svg";
import css from "../images/skills/css.svg";
import js from "../images/skills/javascript.svg";
import react from "../images/skills/react.svg";
import next from "../images/skills/nextjs.svg";
import reactnative from "../images/skills/reactnative.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    // <main className="p-8 text-white w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-emerald-600 space-y-8">
    //   <Link
    //     to="/projects/html"
    //     className="flex hover:scale-125 duration-700 cursor-pointer space-x-2"
    //   >
    //     <img
    //       src={html}
    //       alt="html"
    //       className="w-48 h-48 max-md:w-32 max-md:h-32"
    //     />
    //     <img
    //       src={css}
    //       alt="css"
    //       className="w-48 h-48 max-md:w-32 max-md:h-32"
    //     />
    //     <img
    //       src={js}
    //       alt="html"
    //       className="w-48 h-48 max-md:w-32 max-md:h-32"
    //     />
    //     <h1 className="self-center">HTML CSS and JavaScript</h1>
    //   </Link>
    //   <Link
    //     to="/projects/react"
    //     className="flex hover:scale-125 duration-700 cursor-pointer space-x-2"
    //   >
    //     <img src={react} alt="" className="w-48 h-48 max-md:w-32 max-md:h-32" />
    //     <h1 className="self-center">React</h1>
    //   </Link>
    //   <Link
    //     to="/projects/nextjs"
    //     className="flex hover:scale-125 duration-700 cursor-pointer space-x-2"
    //   >
    //     <img src={next} alt="" className="w-48 h-48 max-md:w-32 max-md:h-32" />
    //     <h1 className="self-center">Nextjs</h1>
    //   </Link>
    //   <Link
    //     to="/projects/reactnative"
    //     className="hover:scale-125 duration-700 cursor-pointer space-x-2"
    //   >
    //     <img
    //       src={reactnative}
    //       alt=""
    //       className="w-48 h-48 max-md:w-32 max-md:h-32"
    //     />
    //     <h1 className="self-center">Nextjs</h1>
    //   </Link>
    // </main>
    <main className="grid grid-cols-2 p-8 place-items-center text-white min-h-screen bg-gradient-to-r from-blue-600 to-emerald-600 space-y-8 max-lg:grid-cols-1">
      <Link
        to="/projects/html"
        className="flex hover:scale-125 duration-700 cursor-pointer space-x-2"
      >
        <img
          src={html}
          alt="html"
          className="w-48 h-48 max-md:w-32 max-md:h-32"
        />
        <img
          src={css}
          alt="css"
          className="w-48 h-48 max-md:w-32 max-md:h-32"
        />
        <img
          src={js}
          alt="html"
          className="w-48 h-48 max-md:w-32 max-md:h-32"
        />
        <h1 className="self-center">HTML CSS and JavaScript</h1>
      </Link>
      <Link
        to="/projects/react"
        className="flex hover:scale-125 duration-700 cursor-pointer space-x-2"
      >
        <img src={react} alt="" className="w-48 h-48 max-md:w-32 max-md:h-32" />
        <h1 className="self-center">React</h1>
      </Link>
      <Link
        to="/projects/nextjs"
        className="flex hover:scale-125 duration-700 cursor-pointer space-x-2"
      >
        <img src={next} alt="" className="w-48 h-48 max-md:w-32 max-md:h-32" />
        <h1 className="self-center">Nextjs</h1>
      </Link>
      {/* <Link
        to="/projects/reactnative"
        className="flex hover:scale-125 duration-700 cursor-pointer space-x-2"
      >
        <img
          src={reactnative}
          alt=""
          className="w-48 h-48 max-md:w-32 max-md:h-32"
        />
        <div className="flex flex-col justify-center">
          <p>React</p>
          <p>Native</p>
        </div>
      </Link> */}
    </main>
  );
};

export default Projects;
