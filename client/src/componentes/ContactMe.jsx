import React from "react";
import { FaFacebook, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiYoutubeFill } from "react-icons/ri";
function ContactMe() {
  return (
    <div
      data-aos="zoom-in-up"
      className="mb-20 flex lg:flex-row flex-col lg:items-center lg:mb-36"
    >
      <span className="gradient-text text-3xl mx-auto lg:mx-0  lg:text-2xl uppercase lg:-rotate-90 mb-5 lg:mb-0 ">
        get in touch
      </span>
      <div className="flex lg:flex-row flex-col w-[80%] mx-auto gap-4 lg:items-start items-center justify-center lg:justify-between">
        <div className="flex flex-col gap-1 lg:gap-4 w-full lg:max-w-[30vw]">
          <span className="gradient-text text-2xl  lg:text-7xl lg:mb-5">
            Contact Me
          </span>
          <a
            className="lg:text-2xl text-gray-200 underline hover:text-blue-700"
            href="mailto:suryamajhi32038@gmail.com"
          >
            suryamajhi32038@gmail.com
          </a>
          <a
            className="lg:text-2xl lg:mb-0 mb-2 text-gray-200 underline hover:text-blue-700"
            href="tel:+919800344913"
          >
            +91 9800344913
          </a>
          <div className="wrapper ">
            <div className="button">
              <div className="icons">
                <FaGithub className="icon" />
              </div>
              <span>Github</span>
            </div>
            <div className="button">
              <div className="icons">
                <FaLinkedin className="icon" />
              </div>
              <span>Linkedin</span>
            </div>
            <div className="button">
              <div className="icons">
                <FaInstagramSquare className="icon" />
              </div>
              <span>Instagram</span>
            </div>
            <div className="button">
              <div className="icons">
                <FaFacebook className="icon" />
              </div>
              <span>Facebook</span>
            </div>
            <div className="button">
              <div className="icons">
                <FaSquareXTwitter className="icon" />
              </div>
              <span>X</span>
            </div>
            <div className="button">
              <div className="icons">
                <RiYoutubeFill className="icon" />
              </div>
              <span>YouTube</span>
            </div>
          </div>
        </div>

        <h1 className="flex flex-col items-center justify-center font-mono font-bold text-2xl lg:text-4xl my-4 lg:my-auto text-gray-200 lg:mr-7 w-fit flex-shrink-0">
          OR
        </h1>

        <form
          className="flex flex-col h-auto text-[#9b3fdc] w-[80vw] lg:w-[30vw] "
          action=""
        >
          <input
            type="text"
            name="mail"
            placeholder="Surya Majhi"
            className="bg-transparent text-gray-200 border-2 lg:px-2 lg:mb-5 lg:py-3 rounded-lg  caret-gray-200 outline-none focus:border-purple-500 focus:pl-5 lg:focus:pl-6 transition-all placeholder-[#7e8286] duration-100 lg:text-xl font-mono text-base px-2 py-1  mb-3 "
          />
          <input
            className="bg-transparent text-gray-200 border-2 lg:px-2 lg:mb-5 lg:py-3 rounded-lg placeholder-[#7e8286] outline-none focus:border-purple-500 focus:pl-5 lg:focus:pl-6 transition-all duration-100 lg:text-xl font-mono text-base px-2 py-1 caret-gray-300 mb-3 "
            placeholder="example@example.com"
            type="mail"
            name="mail"
          />
          <textarea
            className="bg-transparent border-2 lg:px-2 lg:mb-5 lg:py-3 rounded-lg placeholder-[#7e8286]  lg:h-[250px] outline-none focus:border-purple-500 text-gray-200 resize-none focus:pl-5 lg:focus:pl-6 transition-all duration-100 lg:text-xl font-mono text-base px-2 py-1 caret-gray-200 mb-3 "
            placeholder="Work with together!"
            name="message"
            id=""
          ></textarea>
          {/* <button className=" rounded-lg lg:py-2 py-1 text-white bg-purple-500 hover:bg-purple-600 hover:text-gray-400 transition-all delay-100 hover:scale-105">
            Send Message
          </button> */}

          {/* button */}
          <div className="btn mx-auto lg:mt-0 mt-4">
            <span id="front" className="spn">Submit</span>
            <span id="mid" className="spn"></span>
            <span id="back" className="spn">Here</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;