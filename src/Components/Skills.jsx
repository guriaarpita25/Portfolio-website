import React from 'react';

export const Skills = () => {
    const skills = [
        "HTML & CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Bootstrap",
        "Ant Design"
    ];

    return (
        <div className="py-16" id="skills">
            <h2 className="text-center text-[#ffbd39] text-4xl font-semibold">
                My Skills
            </h2>

            <div
                className="
                    mt-10 max-w-3xl mx-auto 
                    grid grid-cols-1 sm:grid-cols-2 gap-6 px-3
                    text-center md:text-left
                    items-center lg:items-center lg:ml-40 xl:ml-70
                    md:ml-10
                "
            >
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center md:items-start">
                        <p className="text-white text-lg font-medium">{skill}</p>
                        <div className="h-[3px] bg-[#ffbd39] w-[80%] mt-2 rounded"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

