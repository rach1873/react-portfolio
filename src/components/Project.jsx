import React, { useState } from "react";

const Project = (props) => {
  const [hover, setHover] = useState(false);
  const result = hover ? `block` : `hidden`;

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div
      className={`w-96 h-96 ${props.img} bg-no-repeat bg-cover bg-center relative text-white text-1`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      key={props.title}
    >
      <div className={`${result} w-full h-full bg-zinc-500 space-y-12`}>
        <h1>Title: {props.title}</h1>
        <h1>Technologies: {props.tech}</h1>
        <h1>Description: {props.description}</h1>
        {/* <a
          href={props.link}
          className="block text-emerald-500 text-2xl brightness-125 animate-pulse"
          target="_blank"
        >
          Click Here to View
        </a> */}
        <div className="flex justify-center gap-4">
          <a
            href={props.link}
            className="bg-yellow-500 p-4 cursor-pointer hover:-translate-y-2 duration-500 rounded-xl"
            target="_blank"
          >
            View Project
          </a>
          <a
            href={props.git}
            className="bg-blue-600 p-4 cursor-pointer hover:-translate-y-2 duration-500 rounded-xl"
            target="_blank"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
