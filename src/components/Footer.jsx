import React from "react";
import { FaCopyright, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="md:mt-10 mt-10 text-center flex-wrap md:flex md:justify-between justify-center mb-6">
      <p className="md:text-base text-white">
        © {new Date().getFullYear()} Rohit Mandaliya. All Rights Reserved.
      </p>
      <div className="text-white flex justify-center md:mt-0 mt-5 gap-3">
        <a
          href="https://www.linkedin.com/in/rohit-mandaliya-b12261217/"
          className="hover:scale-110 duration-300"
          target="_blank"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://twitter.com/RohitMandaliyaS"
          className="hover:scale-110 duration-300"
          target="_blank"
        >
          <FaXTwitter size={25} />
        </a>
        <a
          href="https://www.instagram.com/rohit_mandaliya21/"
          className="hover:scale-110 duration-300"
          target="_blank"
        >
          <FaInstagram size={25} />
        </a>
        <a
          href="https://github.com/rohit-mandaliya"
          className="hover:scale-110 duration-300"
          target="_blank"
        >
          <FaGithub size={25} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
