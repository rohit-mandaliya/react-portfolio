import React, { useState } from "react";
import { githubProjects } from "../constants/constants";
import { FaArrowRight } from "react-icons/fa6";

function Projects() {
  const [projects, setProjects] = useState(githubProjects);

  return (
    <div className="md:py-20 py-20" id="projects">
      <div className="text-center">
        <p className="md:text-5xl text-3xl text-white">Projects</p>
        <p className="text-gray-500 mt-5">( Here are some of my projects )</p>
      </div>
      <div className="w-full grid xl:grid-cols-3 sm:grid-cols-2 gap-8 mt-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`text-center group p-6 static hover:scale-105 rounded-2xl border duration-500`}
          >
            <img
              src={project.image}
              className="h-45 w-96 mx-auto rounded-lg mt-2 border-white border"
            />
            <p className={`text-xl p-4 mx-auto text-white`}>{project.name}</p>
            <div className="group-hover:flex-wrap group-hover:h-auto flex-wrap group-hover:opacity-100 gap-3 group-hover:mt-0 flex opacity-0 h-0 mb-4">
              {project.tools.map((tool) => (
                <p className="p-2 border rounded-xl text-sm border-pink-400 text-pink-400">
                  {tool}
                </p>
              ))}
            </div>
            <p className={`text-sm mb-4 text-left text-gray-500`}>
              {project.desc}
            </p>
            <button className="group/button bg-gradient-to-r from-pink-300 to-pink-500 px-10 p-2 rounded-md">
              <a href={project.link} target="_blank" className="flex">
                Code
                <FaArrowRight className="group-hover/button:ml-3 duration-700 group-hover/button:opacity-100 opacity-0 ml-[-20px] mt-1" />
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
