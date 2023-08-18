import musicapp from "../images/projectimg/musicapp.png";
import Project from "../components/Project";
import BackButton from "../components/BackButton";

const projects = [
  {
    title: "Music App",
    tech: "Nextjs, Tailwindcss, Firebase",
    description:
      "Teaches individuals about music.  Learn note reading, terms, and basic chords",
    link: "https://nextjs-music-app-ruddy.vercel.app/",
    img: "bg-musicapp",
  },
];

const Nproject = () => {
  return (
    <main className="min-h-screen p-8 flex gap-4 flex-wrap justify-center bg-gradient-to-r from-blue-600 to-emerald-600 space-y-8">
      {projects.map((x) => (
        <Project
          key={x.title}
          title={x.title}
          tech={x.tech}
          description={x.description}
          link={x.link}
          img={x.img}
        />
      ))}
      <BackButton />
    </main>
  );
};

export default Nproject;
