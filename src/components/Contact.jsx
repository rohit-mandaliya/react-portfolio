import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <div className="md:py-20 py-10" id="contact">
      <div className="text-center">
        <p className="md:text-5xl text-3xl text-white">Contact Me</p>
        <p className="text-gray-500 mt-5">
          ( You can contact me through this platforms )
        </p>
      </div>
      <div className="flex justify-center mt-12 gap-12">
        <a
          href="https://www.linkedin.com/in/rohit-mandaliya-b12261217/"
          target="_blank"
        >
          <FaLinkedin size={50} className="text-blue-500 text-center" />
        </a>
        <a href="https://twitter.com/RohitMandaliyaS" target="_blank">
          <FaXTwitter size={50} className="text-white text-center" />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNqtFwndJdNNjkZGtJhrxnTQdMClJvPzsGJtgmmfzqGbGXVZWVSxwJldrlZMbdhPHmdmQB"
          target="_blank"
        >
          <FaEnvelope size={50} className="text-red-500 text-center" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
