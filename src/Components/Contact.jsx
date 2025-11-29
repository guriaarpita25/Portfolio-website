
import React from 'react'

const Contact = () => {
    return (
        <div className="mt-5" id='contact'>
            <h2 className="text-[#ffbd39] text-4xl font-semibold text-center mb-5">
                Contact Me
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-[60px]">


            
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
                    <div className="text-center">
                        <h3 className="font-bold text-lg uppercase">Address</h3>
                        <p className="text-gray-300">Kolkata, West Bengal</p>
                    </div>
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

                    <div className="text-center">
                        <h3 className="font-bold text-lg uppercase">Contact Number</h3>
                        <p className="text-gray-300">+91 8967850263</p>
                    </div>
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

                    <div className="text-center">
                        <h3 className="font-bold text-lg uppercase">Email Address</h3>
                        <p className="text-gray-300">guriaarpita248@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
