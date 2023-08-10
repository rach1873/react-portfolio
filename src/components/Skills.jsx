import React from "react";

const Skills = (props) => {
  return (
    <div className="p-2 rounded-lg flex flex-col justify-center items-center">
      <img src={props.img} className="w-8 h-8" />
      <h1>{props.title}</h1>
    </div>
  );
};

export default Skills;
