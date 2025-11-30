
import React from 'react';

const Home = () => {
    return (
        <div id='home' className="px-6 md:px-20 py-24">
            <div className="flex flex-col items-center text-center gap-5">

                <img 
                    src="/me.jpg" 
                    alt="Arpita" 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-[#ffbd39] shadow-md"
                />

           
                <span className="text-sm md:text-base font-semibold tracking-[3px] uppercase text-[#ffbd39]">
                    Hello!
                </span>

                <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                    I'm <span className="text-[#ffbd39]">Arpita Guria</span>, a Fresher Frontend Developer
                </h1>

                
                <p className="text-base md:text-xl  text-gray-200 max-w-2xl font-[Oswald,sans-serif]">
                    I build clean, responsive, and user-friendly web interfaces using HTML, CSS, 
                    JavaScript, and React. I love turning ideas into real, interactive experiences.
                </p>

                <div className="flex gap-4 mt-3 flex-wrap justify-center">
                    <button className="bg-[#ffbd39] text-black font-semibold cursor-pointer rounded-3xl py-2 px-5 
                        hover:bg-purple-600 hover:text-white transition">
                        Connect with me
                    </button>

                    <a 
                        href="/Arpita_Guria__Resume.pdf" 
                        download
                        className="bg-[#ffbd39] text-black font-semibold cursor-pointer rounded-3xl py-2 px-5 
                        hover:bg-purple-600 hover:text-white transition"
                    >
                        My Resume
                    </a>
                </div>

                <div className="flex gap-6 mt-5">
                    <a
                        href="https://www.linkedin.com/in/arpita-guria-003467395/"
                        target="_blank"
                        className="hover:scale-120 transition"
                    >
                        <i className="fa-brands fa-linkedin text-3xl text-blue-500"></i>
                    </a>

                    <a
                        href="https://github.com/guriaarpita25"
                        target="_blank"
                        className="hover:scale-120 transition"
                    >
                        <i className="fa-brands fa-github text-3xl hover:text-gray-400"></i>
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        className="hover:scale-120 transition"
                    >
                        <i className="fa-brands fa-instagram text-3xl text-pink-500"></i>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Home;

