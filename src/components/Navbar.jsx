import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-400 flex justify-between p-4 items-center">
      <div className="container-2">
        <div className="c c-1"></div>
        <div className="c c-2"></div>
        <div className="text-white text-2xl">BS</div>
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-white hover:underline">
          About
        </Link>
        <Link to="/projects" className="text-white hover:underline">
          Projects
        </Link>
        <Link to="/contact" className="text-white hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
