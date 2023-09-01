import React from "react";
import Skills from "../components/Skills";
import html from "../images/skills/html.svg";
import css from "../images/skills/css.svg";
import firebase from "../images/skills/firebase.svg";
import javascript from "../images/skills/javascript.svg";
import mysql from "../images/skills/mysql.svg";
import nextjs from "../images/skills/nextjs.svg";
import nodejs from "../images/skills/nodejs.svg";
import react from "../images/skills/react.svg";
import tailwindcss from "../images/skills/tailwindcss.svg";
import typescript from "../images/skills/typescript.svg";
import github from "../images/skills/github.png";
import { HandRaisedIcon } from "@heroicons/react/24/outline";

const icons = [
  {
    img: html,
    title: "HTML",
  },
  {
    img: css,
    title: "CSS",
  },
  {
    img: javascript,
    title: "JavaScript",
  },
  {
    img: tailwindcss,
    title: "Tailwindcss",
  },
  {
    img: react,
    title: "React",
  },
  {
    img: nextjs,
    title: "Nextjs",
  },
  {
    img: typescript,
    title: "TypeScript",
  },
  {
    img: firebase,
    title: "Firebase",
  },
  {
    img: nodejs,
    title: "Nodejs",
  },
  {
    img: mysql,
    title: "MySql",
  },
  {
    img: github,
    title: "GitHub",
  },
];

const About = () => {
  return (
    <main className="min-h-screen p-8 grid grid-cols-2 grid-row-2 gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 max-lg:grid-cols-1">
      <section className="flex flex-col items-center justify-center">
        <div className="spinName border-dashed border-2 border-seafoam text-seafoam p-16 rounded-full">
          <h1 className="text-9xl text-center">BS</h1>
          <p className="text-center">Brandon Smith</p>
        </div>
      </section>
      <section className="flex flex-col justify-center space-y-4 text-white">
        <div className="flex items-center space-x-4">
          <HandRaisedIcon className="w-12 h-12 rotate-45 animate-wave text-yellow-500" />
          <p className="text-xl">Hello</p>
        </div>

        <h1 className="underline">Intro</h1>
        <p>
          I am a self-taught developer with knowledge in HTML, CSS, JavaScript,
          React, Nextjs, and SQL.
        </p>
        <h1 className="underline">Work History</h1>
        <p>
          I've been at Valu Merchandisers in Memphis,TN for 12 years. In
          September 2011, I started as a module stocker and quickly transitioned
          as a Inventory Lead in 2016. In 2017, I was promoted as Inventory
          Supervisor, which I still hold.
        </p>
        <h1 className="underline">Coding Journey</h1>
        <p>
          When I got promoted as an inventory lead, I noticed a passion for
          coding. Starting in 2016, I was introduced to SQL by my mananger. I
          used this scripting language on a daily basis as an Inventory
          Lead/Supervisor. This allowed me to understand the syntax, get
          real-time practice, and work with a database. In 2019, I entered world
          of HTML, CSS, and JavaScript. I've built projects to my enhanced
          skills, which led to learning React and Nextjs.
        </p>
      </section>
      <section className="text-seafoam row-span-2 col-span-full flex flex-col items-center justify-center">
        <h1 className="underline">Skills</h1>
        <div className="grid grid-cols-4 grid-rows-2">
          {icons.map((x) => (
            <Skills key={x.title} img={x.img} title={x.title} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
