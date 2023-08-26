import React from "react";
import study from "../images/study.png";
import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

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
