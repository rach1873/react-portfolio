import Project from "../components/Project";
import weatherapp from "../images/projectimg/weatherapp.png";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const projects = [
  {
    title: "Weather App",
    tech: "React, Tailwindcss",
    description: "View current weather or forecast for any American city",
    link: "https://react-weather-app-sable-nu.vercel.app",
    img: "bg-weatherapp",
    git: "https://github.com/rach1873/React-Weather-App",
  },
  {
    title: "Recipe App",
    tech: "React, Tailwindcss",
    description: "Type any food item to get a list of recipes.",
    link: "https://recipe-app-htmlcssjs.netlify.app",
    img: "bg-recipeapp",
    git: "",
  },
];

const Rproject = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen p-8 flex gap-4 flex-wrap justify-center bg-gradient-to-r from-blue-600 to-emerald-600">
      {projects.map((x) => (
        <Project
          key={x.title}
          title={x.title}
          tech={x.tech}
          description={x.description}
          link={x.link}
          img={x.img}
          git={x.git}
        />
      ))}
      <BackButton />
    </main>
  );
};

export default Rproject;
