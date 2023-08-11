import React from "react";
import { useNavigate } from "react-router-dom";
import sadface from "../images/skills/sadface.png";

const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <main className="text-white w-screen min-h-screen flex items-center justify-center flex-col space-y-8 bg-gradient-to-r from-blue-600 to-emerald-600">
      <img src={sadface} alt="sadface" className="w-48 h-48" />
      <h1 className="text-3xl">Status:404</h1>
      <h1 className="text-3xl">Page Not Found</h1>
      <button
        onClick={() => navigate("/")}
        className="text-3xl bg-gradient-to-r from-blue-600 to-emerald-600 p-4 border-solid border-2 border-white"
      >
        Return Home
      </button>
    </main>
  );
};

export default NoMatch;
