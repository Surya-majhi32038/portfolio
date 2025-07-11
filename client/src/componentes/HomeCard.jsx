import React from "react";
import myImg1 from "../assets/myImg1.jpg";
function HomeCard({ paragraph, img }) {
  console.log("img", img, "myImg1", myImg1);
  const splitParagraph = (paragraph) => {
    const sentences = paragraph
      .split(".")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const lastTwo = sentences.slice(-2).join(". ") + ".";
    const remaining = sentences.slice(0, -2).join(". ") + ".";

    return { remaining, lastTwo };
  };
  const { remaining, lastTwo } = splitParagraph(paragraph);

  return (
    <div className="flex  lg:mb-32 mb-20 lg:gap-0 gap-5 lg:flex-row flex-col-reverse items-center justify-between ">
      <div data-aos="fade-up-right" className="flex flex-col gap-5 lg:w-[50%] ">
        <h3 className="lg:text-7xl text-3xl mb-2 lg:mb-4 gradient-text">
          Hey!
        </h3>
        <p className="lg:text-xl text-gray-300 text-justify">
          {`${remaining}`}
          {/* My name is Surya, and I am a MERN Stack Developer. I am 20 years old
          from India. I have 3 years of work exprience, focusing and creating
          web applictions, design systems that adds growth to your businesses
          and more. Over these years, I have developed various websites,
          conducted workshops and collaboarted on divarse projects */}
        </p>
        <p className="lg:text-xl text-gray-300 text-justify">
          {`${lastTwo}`}
          {/* I'm committed to furthering my skills an achieving new milestones in
          my career. Let's connect and create something amazing together! */}
        </p>
      </div>
      <div data-aos="fade-up-left">
        <img
          src={img ? img : myImg1}
          alt="profile picture "
          className="rounded-full lg:w-[450px] object-cover h-[200px] w-[200px] lg:h-[450px] mx-auto"
        />
      </div>
    </div>
  );
}

export default HomeCard;
