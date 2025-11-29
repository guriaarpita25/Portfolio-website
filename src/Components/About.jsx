

import React from 'react';

const About = () => {
    return (
        <>
        <div id='about'>
            <h2 className="text-[#ffbd39] text-4xl font-semibold text-center mt-10">
                About Me
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 px-6 md:px-20">

                <div className="flex justify-center">
                    <img
                        src="me.webp"
                        alt="Arpita"
                        className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-md shadow-lg"
                    />
                </div>


                <div className="max-w-xl">
                    <p className="text-lg md:text-xl">
                        I'm <span className="text-[#ffbd39] font-semibold">Arpita Guria</span>, a web developer
                        specializing in building modern UI using
                        React.js, JavaScript, HTML, CSS, and Tailwind CSS.
                        I enjoy solving layout problems, improving UI/UX, and writing clean,
                        maintainable code.
                    </p>

                    <ul className="mt-5 space-y-2">
                        <li className="flex">
                            <span className="font-semibold w-32">Name:</span>
                            <span>Arpita Guria</span>
                        </li>

                        <li className="flex">
                            <span className="font-semibold w-32">Date of Birth:</span>
                            <span>February 16, 2004</span>
                        </li>

                        <li className="flex">
                            <span className="font-semibold w-32">Current
                                <br />Address:</span>
                            <span>Newtown, Kolkata, India</span>
                        </li>

                        <li className="flex">
                            <span className="font-semibold w-32">Zip Code:</span>
                            <span>700102</span>
                        </li>

                        <li className="flex">
                            <span className="font-semibold w-32">Email:</span>
                            <span>guriaarpita248@gmail.com</span>
                        </li>

                        <li className="flex">
                            <span className="font-semibold w-32">Phone:</span>
                            <span>+91 89678 50263</span>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    );
};

export default About;
