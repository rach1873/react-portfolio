import React from "react";
import Project from "../components/Project";
import { useNavigate } from "react-router-dom";

const applications = [
  {
    title: "Movie App",
    tech: "HTML, CSS, JavaScript",
    description:
      "Mock streaming site with users can watch their favorite movies",
    link: "https://movie-app-database.netlify.app",
    img: "bg-movie",
  },
  {
    title: "Calculator App",
    tech: "HTML, CSS, JavaScript",
    description: "Use this app to calculate basic math",
    link: "https://calculator-2-app.netlify.app",
    img: "bg-calculator",
  },

  {
    title: "Joke Teller App",
    tech: "HTML, CSS, JavaScript",
    description: "Press button and it verbally tells a joke.",
    link: "https://super-choux-6f103e.netlify.app",
    img: "bg-jokeapp",
  },
  {
    title: "BookMarker App",
    tech: "HTML, CSS, JavaScript",
    description: "Allows you to save online sites.",
    link: "https://bookmark-items-app.netlify.app",
    img: "bg-book",
  },
  {
    title: "Calendar App",
    tech: "HTML, CSS, JavaScript",
    description: "Set reminders and current with this calendar app.",
    link: "https://calendar-htmlcssjavascript-app.netlify.app",
    img: "bg-calendar",
  },
  {
    title: "Math Game",
    tech: "HTML, CSS, JavaScript",
    description:
      "Wanna practice your math skills?  Try this game. Ideal for children.",
    link: "https://math-game-app.netlify.app",
    img: "bg-mathgame",
  },
];

// flex flex-wrap justify-center

const Projects = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen w-screen gap-8 p-8 flex flex-wrap justify-center bg-gradient-to-r from-blue-600 to-emerald-600">
      {applications.map((x) => (
        <Project
          key={x.title}
          title={x.title}
          tech={x.tech}
          description={x.description}
          link={x.link}
          img={x.img}
        />
      ))}
      <button
        className="absolute top-1/2 left-4 border-2 p-2 cursor-pointer bg-gradient-to-r from-blue-600 to-emerald-600 active:scale-125 duration-500"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </main>
  );
};

export default Projects;
