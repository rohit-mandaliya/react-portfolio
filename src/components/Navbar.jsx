import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-scroll";

function Navbar() {
  const [responsive, setResponsive] = useState(false);
  const [links, setLinks] = useState([
    {
      id: 1,
      href: "about",
      title: "About",
    },
    {
      id: 2,
      href: "experience",
      title: "Experience",
    },
    {
      id: 3,
      href: "projects",
      title: "Projects",
    },
    {
      id: 4,
      href: "contact",
      title: "Contact",
    },
  ]);

  return (
    <>
      <div
        className="flex h-20 w-full xl:px-32 fixed z-10 md:px-20 px-8 top-0 bottom-0 left-0 right-0  items-center justify-between"
        style={{ backgroundColor: "rgb(21, 2, 30)" }}
      >
        <div className="mt-3">
          <img src="./src/images/logo.png" width={120} />
        </div>
        <div className="text-lg text-white">
          <ul className="md:flex hidden">
            {links.map((link) => (
              <li
                key={link.id}
                className="px-5 hover:text-purple-500 transition-all duration-300"
              >
                <Link
                  className="cursor-pointer active:text-purple-500"
                  to={link.href}
                  smooth
                  duration={500}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="icon">
            {!responsive ? (
              <FaBars
                size={20}
                className="md:hidden"
                onClick={() => setResponsive(true)}
              />
            ) : (
              <FaX
                className="md:hidden"
                size={20}
                onClick={() => setResponsive(!true)}
              />
            )}
          </div>
        </div>
        <ul
          className={
            responsive
              ? "flex-col md:hidden absolute w-full mt-[70px] h-fit inset-1 backdrop-blur-xl items-center text-white justify-center"
              : "hidden"
          }
          // style={{ backgroundColor: "rgb(21, 2, 30)" }}
        >
          {links.map((link) => (
            <li
              key={link.id}
              className=" hover:text-purple-500 py-4 text-center duration-300"
            >
              <Link
                className="cursor-pointer active:text-purple-500"
                to={link.href}
                smooth
                onClick={() => setResponsive(!responsive)}
                duration={500}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
