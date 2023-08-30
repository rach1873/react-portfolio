import React from "react";
import study from "../images/study.png";
import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import html from "../images/skills/html.svg";
import css from "../images/skills/css.svg";
import js from "../images/skills/javascript.svg";
import react from "../images/skills/react.svg";
import nextjs from "../images/skills/nextjs.svg";
import tail from "../images/skills/tailwindcss.svg";
import nodejs from "../images/skills/nodejs.svg";
import github from "../images/skills/github.png";
import mysql from "../images/skills/mysql.svg";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <main className="min-h-screen text-white flex p-16 gap-4 bg-gradient-to-r from-blue-600 to-emerald-600">
      <div className="space-y-10">
        <h6>Hello, my name is </h6>
        <h1 className="text-4xl text-seafoam">
          <Typewriter
            onInit={(name) => name.typeString("Brandon Smith").start()}
          />
        </h1>
        <h3>Developer</h3>
        <p>
          I am very passionate about building things through code. Since you're
          here, please look around.
        </p>
        <div className="flex gap-4">
          <Link
            to="/resume"
            className="flex space-x-2 items-center p-6 bg-gradient-to-r from-emerald-600 to-orange-500 rounded-xl hover:-translate-y-2 duration-300 active:scale-75"
          >
            <UserIcon className="w-8 h-8" />
            Resume
          </Link>
          <Link
            to="/projects"
            className="flex space-x-2 p-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl hover:-translate-y-2 duration-300 active:scale-75"
          >
            <WrenchScrewdriverIcon className="w-8 h-8" />
            Projects
          </Link>
        </div>
        {/* <section className="move rounded-full w-1/2 h-1/2 border-dashed border-4 border-emerald-600 relative">
          <img
            src={html}
            alt="html"
            className="w-12 h-12 absolute left-1/2 top-0 -translate-x-1/2"
          />
          <img
            src={css}
            alt="css"
            className="w-12 h-12 absolute bottom-0 left-1/2 -translate-x-1/2"
          />
          <img
            src={js}
            alt="js"
            className="w-12 h-12 absolute top-1/2 right-0 -translate-y-1/2"
          />
          <img
            src={github}
            alt="github"
            className="w-12 h-12 absolute top-1/2 left-0 -translate-y-1/2"
          />
          <img
            src={react}
            alt="react"
            className="w-12 h-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src={nextjs}
            alt="nextjs"
            className="w-12 h-12 absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src={nodejs}
            alt="nodejs"
            className="w-12 h-12 absolute left-1/4 top-3/4 -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src={tail}
            alt="tail"
            className="w-12 h-12 absolute left-3/4 top-3/4 -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src={mysql}
            alt="mysql"
            className="w-12 h-12 absolute left-3/4 top-1/4 -translate-x-1/2 -translate-y-1/2"
          />
        </section> */}
      </div>

      <img
        src={study}
        alt="Image Not Found"
        className="rounded-xl opacity-60 max-lg:hidden"
      />
    </main>
  );
};

export default Home;
