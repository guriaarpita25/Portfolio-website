import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);

  const underline = <hr className="border-[2px] border-[#ffbd39] rounded-md" />;

  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

       
          <div className="text-3xl font-bold text-white">PORTFOLIO.</div>

          
          <ul className="hidden md:flex items-center gap-7 text-xl text-white">
            {["home", "about", "education", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="cursor-pointer"
                  onClick={() => setMenu(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
                {menu === section && underline}
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? (
             
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

       
        {open && (
          <ul className="md:hidden bg-black text-white text-lg py-5 space-y-4 px-4 animate-slideDown">
            {["home", "about", "education", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="block cursor-pointer"
                  onClick={() => {
                    setMenu(section);
                    setOpen(false);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

