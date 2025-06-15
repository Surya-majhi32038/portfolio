import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function ContactMe() {
    return (
        <div data-aos="zoom-in-up" className="mb-20 flex lg:flex-row flex-col lg:items-center lg:mb-36">
            <span className="gradient-text text-3xl mx-auto lg:mx-0  lg:text-2xl uppercase lg:-rotate-90 mb-5 lg:mb-0 ">
                get in touch
            </span>
            <div className="flex lg:flex-row mx-auto lg:mx-0 flex-col  w-[80%] lg:pl-0 lg:items-start  lg:w-[80%] justify-between">
                <div className="flex   flex-col lg:gap-4 gap-1">
                    <span className="gradient-text text-2xl  lg:text-7xl lg:mb-5">Contact Me</span>
                    <a
                        className="lg:text-2xl text-gray-200 underline hover:text-blue-700"
                        href="mailto:suryamajhi32038@gmail.com"
                    >
                        suryamajhi32038@gmail.com
                    </a>
                    <a
                        className="lg:text-2xl text-gray-200 underline hover:text-blue-700"
                        href="tel:+919800344913"
                    >
                        +91 9800344913
                    </a>
                    <div className="text-gray-300 lg:text-2xl flex items-center gap-5">
                        <a href="">
                            <FaGithub className=" transition-all hover:text-blue-700" />
                        </a>
                        <a href="">
                            <FaLinkedin className=" transition-all hover:text-blue-700" />
                        </a>
                    </div>
                </div>
                 
                 <h1 className="font-mono lg:text-4xl lg:justify-center lg:h-fit text-2xl my-4 font-bold text-gray-200 flex flex-col items-center">OR</h1>
                <form className="flex flex-col h-auto  lg:w-[30vw] " action="">
                    <input
                        type="text"
                        name="mail"
                        placeholder="Surya Majhi"
                        className="bg-transparent border-2 lg:px-2 lg:mb-5 lg:py-3 rounded-lg gradient-text caret-gray-300 outline-none focus:border-purple-500 focus:pl-5 lg:focus:pl-8transition-all duration-100 lg:text-2xl font-mono text-base px-2 py-1  mb-3 "
                    />
                    <input
                        className="bg-transparent border-2 lg:px-2 lg:mb-5 lg:py-3 rounded-lg gradient-text outline-none focus:border-purple-500 focus:pl-5 lg:focus:pl-8 transition-all duration-100 lg:text-2xl font-mono text-base px-2 py-1 caret-gray-300 mb-3 "
                        placeholder="example@example.com"
                        type="mail"
                        name="mail"
                    />
                    <textarea
                        className="bg-transparent border-2 lg:px-2 lg:mb-5 lg:py-3 rounded-lg gradient-text lg:h-[150px] outline-none focus:border-purple-500 focus:pl-5 lg:focus:pl-8 transition-all duration-100 lg:text-2xl font-mono text-base px-2 py-1 caret-gray-200 mb-3 "
                        placeholder="Work together!"
                        name="message"
                        id=""
                    ></textarea>
                    <button className=" rounded-lg lg:py-2 py-1 text-white bg-purple-500 hover:bg-purple-600 hover:text-gray-400 transition-all delay-100 hover:scale-105">
                        Send Message
                    </button>
                </form>
            </div>

        </div>
    );
}

export default ContactMe;
