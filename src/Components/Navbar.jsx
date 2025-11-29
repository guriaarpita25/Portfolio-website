import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const underline = <hr className="border-[2px] border-[#ffbd39] rounded-md" />;

  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <a className="text-3xl font-bold text-white">PORTFOLIO.</a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-7 text-xl text-white">
            
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-50}
                className="cursor-pointer"
                onClick={() => setMenu("home")}
              >
                Home
              </Link>
              {menu === "home" && underline}
            </li>

            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-50}
                className="cursor-pointer"
                onClick={() => setMenu("about")}
              >
                About
              </Link>
              {menu === "about" && underline}
            </li>

            <li>
              <Link
                to="education"
                smooth={true}
                duration={500}
                offset={-50}
                className="cursor-pointer"
                onClick={() => setMenu("education")}
              >
                Education
              </Link>
              {menu === "education" && underline}
            </li>

            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-50}
                className="cursor-pointer"
                onClick={() => setMenu("skills")}
              >
                Skills
              </Link>
              {menu === "skills" && underline}
            </li>

            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-50}
                className="cursor-pointer"
                onClick={() => setMenu("projects")}
              >
                Projects
              </Link>
              {menu === "projects" && underline}
            </li>

            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-50}
                className="cursor-pointer"
                onClick={() => setMenu("contact")}
              >
                Contact
              </Link>
              {menu === "contact" && underline}
            </li>

          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
