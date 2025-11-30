import React from "react";

const Contact = () => {
  return (
    <>
      
      <div id="contact" className="mt-5">
        <h2 className="text-[#ffbd39] text-4xl font-semibold text-center mb-8">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-20">

          <div className="flex flex-col items-center gap-3 bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-amber-500/30 transition">
            <svg
              className="h-7 w-7 text-amber-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.656 0 3-1.343 3-3s-1.344-3-3-3-3 1.343-3 3 1.344 3 3 3zm0 1c-2.667 0-8 1.333-8 4v2h16v-2c0-2.667-5.333-4-8-4z"
              />
            </svg>
            <h3 className="font-bold text-lg uppercase">Address</h3>
            <p className="text-gray-300">Kolkata, West Bengal</p>
          </div>

      
          <div className="flex flex-col items-center gap-3 bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-amber-500/30 transition">
            <svg
              className="h-7 w-7 text-amber-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h1l2 5-2 1a11 11 0 006 6l1-2 5 2v1a2 2 0 01-2 2h-1c-6.627 0-12-5.373-12-12V5z"
              />
            </svg>
            <h3 className="font-bold text-lg uppercase">Contact Number</h3>
            <p className="text-gray-300">+91 8967850263</p>
          </div>

          
          <div className="flex flex-col items-center gap-3 bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-amber-500/30 transition">
            <svg
              className="h-7 w-7 text-amber-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12l-4-4-4 4m8 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m0-4a2 2 0 012-2h8a2 2 0 012 2v4z"
              />
            </svg>
            <h3 className="font-bold text-lg uppercase">Email Address</h3>
            <p className="text-gray-300">guriaarpita248@gmail.com</p>
          </div>
        </div>
      </div>

   <footer className="bg-black text-gray-300 py-10 px-6">
  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

    <div className="text-center sm:text-left">
      <h3 className="text-xl font-semibold text-white mb-4">About</h3>
      <p className="text-gray-400 leading-6 font-[Oswald,sans-serif]">
        I'm Arpita Guria, a fresher frontend developer specializing in modern UI
        development using React, JavaScript and Tailwind CSS.
      </p>

      <div className="flex justify-center sm:justify-start gap-4 mt-6">
        <a href="https://www.linkedin.com/in/arpita-guria-003467395/"
           target="_blank"
           className="hover:scale-110 transition">
          <i className="fa-brands fa-linkedin text-3xl text-blue-500"></i>
        </a>

        <a href="https://github.com/guriaarpita25"
           target="_blank"
           className="hover:scale-110 transition">
          <i className="fa-brands fa-github text-3xl hover:text-gray-400"></i>
        </a>

        <a href="#" target="_blank" className="hover:scale-110 transition">
          <i className="fa-brands fa-instagram text-3xl text-pink-500"></i>
        </a>
      </div>
    </div>


    <div className="text-center sm:text-left">
      <h3 className="text-xl font-semibold text-white mb-4">Links</h3>
      <ul className="space-y-2 text-gray-400">
        <li className="hover:text-[#ffbd39] cursor-pointer">→ Home</li>
        <li className="hover:text-[#ffbd39] cursor-pointer">→ About</li>
        <li className="hover:text-[#ffbd39] cursor-pointer">→ Educations</li>
        <li className="hover:text-[#ffbd39] cursor-pointer">→ Skills</li>
        <li className="hover:text-[#ffbd39] cursor-pointer">→ Projects</li>
        <li className="hover:text-[#ffbd39] cursor-pointer">→ Contact</li>
      </ul>
    </div>

    <div className="text-center sm:text-left">
      <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
      <ul className="space-y-2 text-gray-400">
        <li className="hover:text-[#ffbd39] cursor-pointer">→ Web Design</li>
        <li className="hover:text-[#ffbd39] cursor-pointer">→ React Development</li>
        <li className="hover:text-[#ffbd39] cursor-pointer">→ UI/UX Design</li>
        <li className="hover:text-[#ffbd39] cursor-pointer">→ Responsive Design</li>
      </ul>
    </div>

    <div className="text-center sm:text-left">
      <h3 className="text-xl font-semibold text-white mb-4">Have Questions?</h3>

      <div className="space-y-4 text-gray-400">
        <p className="flex justify-center sm:justify-start items-center gap-2">
          <i className="ri-map-pin-fill text-[#ffbd39]"></i> Kolkata, India
        </p>

        <p className="flex justify-center sm:justify-start items-center gap-2">
          <i className="ri-phone-fill text-[#ffbd39]"></i> +91 8967850263
        </p>

        <p className="flex justify-center sm:justify-start items-center gap-2">
          <i className="ri-mail-fill text-[#ffbd39]"></i> guriaarpita248@gmail.com
        </p>
      </div>
    </div>
  </div>

  <div className="text-center text-gray-500 mt-12 border-t border-gray-700 pt-6 text-sm">
    © {new Date().getFullYear()} Arpita Guria — All Rights Reserved.
  </div>
</footer>


    </>
  );
};

export default Contact;

