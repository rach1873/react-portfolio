import React from "react";
import study from "../images/study.png";

const Home = () => {
  return (
    <main className="min-h-screen text-white flex p-16 gap-4 bg-gradient-to-r from-blue-600 to-emerald-600">
      <div className="space-y-10">
        <h6>Hello, My name is </h6>
        <h1 className="text-4xl text-seafoam">Brandon Smith.</h1>
        <h3>Developer</h3>
        <p>
          I am very passionate about building things through code. Since you're
          here, please look around.
        </p>
      </div>

      <img src={study} alt="Image Not Found" />

      <div></div>
    </main>
  );
};

export default Home;
