import React, { useState, useEffect } from "react";
import resume from "../pdf/resume.pdf";

const Resume = () => {
  const h = window.innerHeight;
  const [moved, setMoved] = useState(false);

  return (
    <main className="w-screen min-h-screen">
      <object
        width="100%"
        height={h}
        data={resume}
        type="application/pdf"
      ></object>
    </main>
  );
};

export default Resume;
