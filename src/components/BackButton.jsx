import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="absolute bottom-8 text-3xl border-2 border-white p-2 active:scale-125 duration-700 text-blue-400"
      onClick={() => navigate(-1)}
    >
      Go Back
    </button>
  );
};

export default BackButton;
