import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";
import { FaceSmileIcon } from "@heroicons/react/24/solid";
import { WrenchIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="bg-blue-400 flex justify-between p-4 items-center max-md:justify-center">
      <div className="container-2 max-md:hidden">
        <div className="c c-1"></div>
        <div className="c c-2"></div>
        <div className="text-white text-2xl">BS</div>
      </div>
      <div className="space-x-4 flex items-center justify-center">
        <Link to="/" className="text-white hover:underline flex space-x-2">
          <HomeIcon className="h-6 w-6" />
          <p>Home</p>
        </Link>
        <Link to="/about" className="text-white hover:underline flex space-x-2">
          <FaceSmileIcon className="h-6 w-6" />
          <p>About</p>
        </Link>
        <Link
          to="/projects"
          className="text-white hover:underline flex space-x-2"
        >
          <WrenchIcon className="h-6 w-6" />
          <p>Projects</p>
        </Link>
        <Link
          to="/contact"
          className="text-white hover:underline flex space-x-2"
        >
          <EnvelopeIcon className="h-6 w-6" />
          <p>Contact</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
