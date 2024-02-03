import React, { useState } from "react";
import { expTechnologies } from "../constants/constants";

function Experience() {
  const [technologies, setTechnologies] = useState(expTechnologies);

  return (
    <div className="md:py-20" id="experience">
      <div className="text-center">
        <p className="md:text-5xl text-3xl text-white">Experience</p>
        <p className="text-gray-500 mt-5">( Experience In Technologies )</p>
      </div>
      <div className="w-full grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mt-16">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className={`shadow-md rounded-2xl flex justify-center hover:scale-105 duration-500 ${tech.shadow}`}
          >
            <img src={tech.image} className="h-8 mt-5" />
            <p className={`text-xl p-6 ${tech.text}`}>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
