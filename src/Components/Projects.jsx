import React from "react";

const Projects = () => {

  const projects = [
    {
      title: "Todo App",
      image: "/projects/todo.png", // place in public/projects/
      desc: "A clean and simple Todo application with add, delete, edit and complete task features using React and Tailwind.",
      github: "https://github.com/guriaarpita25/Todo-app-new",
    },

    {
      title: "Notes App",
      image: "/projects/notes.png",
      desc: "A notes application built using React. It stores notes in LocalStorage with edit & delete support.",
      github: "https://github.com/guriaarpita25/Notes-app",
    },

    {
      title: "Time to Travel Page",
      image: "/projects/travel.png",
      desc: "A fully responsive travel-themed landing page using React & Tailwind. Smooth scroll and modern UI.",
      github: "https://github.com/guriaarpita25/Time-to-travel-page",
    },
  ];

  return (
    <div className="bg-black text-white py-20" id="projects">
      <h2 className="text-center text-4xl font-bold tracking-wide mb-6 text-[#ffbd39]">
        My Projects
      </h2>
      <p className="text-center text-xl font-bold mb-20 ">"Explore my portfolio of projects, where I apply my expertise in web <br />
        development, UI/UX design, and Android development to build innovative and <br />
        impactful digital solutions."</p>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-12 px-6 md:px-20">
        {projects.map((p, idx) => (
          <div key={idx} className="flex flex-col gap-4">

            {/* Project Image */}
            <img
              src={p.image}
           className="w-full h-[400px] rounded-lg shadow-lg "
              alt={p.title}
            />

            {/* Link Row */}
            <div className="flex gap-5 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              <span>{p.date}</span>
              <a href={p.github} target="_blank" className="hover:text-[#ffbd39]">
                GitHub Link
              </a>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#ffbd39]">
              {p.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {p.desc}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
