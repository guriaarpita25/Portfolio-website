import React from "react";

const Projects = () => {

  const projects = [
    {
      title: "Todo App",
      image: "/projects/todo.png", 
      desc: "A clean and simple Todo application with add, delete, edit and complete task features using React and Tailwind.",
      github: "https://github.com/guriaarpita25/Todo-app-new",
      Netlify: "https://todo-app-arpita.netlify.app/"
    },

    {
      title: "Notes App",
      image: "/projects/notes.png",
      desc: "A notes application built using React. It stores notes in LocalStorage with edit & delete support.",
      github: "https://github.com/guriaarpita25/Notes-app",
      Netlify: "https://notes-app-arpita.netlify.app/"
    },

    {
      title: "Event Planner Page",
      image: "/projects/Eventplanner.png",
      desc: "A fully responsive Event Planner landing page using HTML,CSS.",
      github: "https://github.com/guriaarpita25/Event-Planners.git",
      Netlify: "https://event-planner-arpita.netlify.app/"
    },
  ];

  return (
    <div className="bg-black text-white py-20" id="projects">
      <h2 className="text-center text-4xl font-bold tracking-wide mb-6 text-[#ffbd39]">
        My Projects
      </h2>
      <p className="text-center text-xl font-bold mb-20 font-[Oswald,sans-serif]">"Explore my portfolio of projects, where I apply my expertise in web <br />
        development, UI/UX design, and Android development to build innovative and <br />
        impactful digital solutions."</p>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-12 px-6 md:px-20">
        {projects.map((p, idx) => (
          <div key={idx} className="flex flex-col gap-4">

          
            <img
              src={p.image}
              className="w-full h-[500px] rounded-lg shadow-lg bg-center bg-cover "
              alt={p.title}
            />

           
            <div className="flex gap-5 text-lg font-semibold tracking-wider text-blue-600 uppercase">
              
              <a href={p.github} target="_blank" className="hover:text-[#ffbd39]">
                GitHub Link
              </a>
            </div>
            <div className="flex gap-5 text-lg font-semibold tracking-wider text-blue-600 uppercase">
             
              <a href={p.Netlify} target="_blank" className="hover:text-[#ffbd39]">
                Live Link
              </a>
            </div>

         
            <h3 className="text-xl font-bold text-[#ffbd39]">
              {p.title}
            </h3>

        
            <p className="text-gray-300 text-sm leading-relaxed font-[Oswald,sans-serif]">
              {p.desc}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
