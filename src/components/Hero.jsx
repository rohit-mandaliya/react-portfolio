import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";

function Hero() {
  return (
    <div className="w-full flex flex-wrap-reverse md:py-40 py-28" id="about">
      <div className="md:w-1/2 w-full leading-6 xl:mt-0 mt-10">
        <h1 className="xl:text-5xl md:text-3xl font-semibold md:text-start text-center text-2xl text-white mb-3">
          <span className="leading-snug">
            I am <br /> Rohit Mandaliya
          </span>
        </h1>
        <p className="text-white text-center flex xl:text-4xl md:text-2xl text-xl font-semibold">
          I am a &nbsp;
          <span className="text-pink-500">
            <TypewriterComponent
              options={{
                cursorClassName: "flex-wrap blink",
                strings: [
                  "Backend Developer",
                  "Laravel Developer",
                  "Programmer",
                  "Coder",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
        <p className="text-gray-400 xl:text-xl md:text-sm text-xs mt-4 mb-5">
          <span className="leading-8">
            Enthusiastic and seasoned{" "}
            <span className="text-pink-500">Backend Developer</span> with a
            passion for creating seamless and dynamic web experiences. Eager to
            expand my skill set and take on the challenges of{" "}
            <span className="text-pink-500">Full Stack Development</span>
            &nbsp;combining my proficiency in backend technologies, particularly{" "}
            <span className="text-pink-500">Laravel</span>, with a keen interest
            in front-end technologies like{" "}
            <span className="text-pink-500">React Js</span>.
          </span>
        </p>
        <a
          href="../src/rohit-mandaliya-resume.pdf"
          download="resume.pdf"
          className="group text-pink-500 text-center flex w-fit p-3 px-6 border border-pink-500 rounded-lg cursor-pointer duration-500"
        >
          Resume
          <FaArrowAltCircleDown className="mt-1 ml-[-20px] group-hover:opacity-100 opacity-0 group-hover:ml-3 duration-500" />
        </a>
      </div>

      <div className="md:w-1/2 w-full flex justify-center mt-4 mb:mb-0">
        <img
          src="/images/profile.png"
          alt="Profile Pic"
          className="rounded-3xl md:h-96 w-70 h-64 shadow-sm shadow-purple-500"
        />
      </div>
    </div>
  );
}

export default Hero;
