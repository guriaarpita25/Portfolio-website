import React from 'react';

const Education = () => {
  const educationData = [
    {
      year: "2025",
      title: "Web Development Course",
      institution: "Saltlake, Kolkata",
      description:
        "Currently pursuing a full-time Web Development training program covering HTML, CSS, JavaScript, React, and modern deployment workflows.",
    },
    {
      year: "2021 – 2024",
      title: "B.Sc in Chemistry (Honours)",
      institution: "Bajkul Milani Mahavidyalaya, Vidyasagar University",
      description:
        "A three-year undergraduate program covering organic, inorganic, analytical, and physical chemistry alongside practical laboratory experience.",
    },
    {
      year: "2019 – 2021",
      title: "Class 12 (Science Stream)",
      institution: "Bherir Bazar Yogoda Satsanga Vidyalaya(H.S)",
      description:
        "Completed Higher Secondary in Science stream with focus subjects: Physics, Chemistry, Mathematics, and Biology.",
    },
    {
      year: "2018 – 2019",
      title: "Class 10",
      institution: "Bherir Bazar Yogoda Satsanga Vidyalaya(H.S)",
      description:
        "Completed secondary education with strong academic performance and involvement in co-curricular activities.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-black text-white" id='education'>
      <h2 className="text-3xl font-bold text-center mb-12 text-[#ffbd39]">
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-[#1c1c1c] p-8 rounded-xl shadow-md border border-gray-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-[#ffbd39]">{edu.year}</h3>

            <h4 className="text-xl font-semibold mt-2">{edu.title}</h4>

            <p className="text-sm uppercase tracking-wide text-gray-400 mt-1">
              {edu.institution}
            </p>

            <p className="text-gray-300 mt-4 leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
