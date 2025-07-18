import React, { useState } from "react";
import SkillCard from "./SkillCard.jsx";
// import { useDispatch, useSelector } from "react-redux";
// import { setSkills } from "../redux/slice/userSlice";
import axios from "axios";
import { useEffect } from "react";

function SkillSections() {
  const [skills, setSkills] = useState([]); // State to manage skills
  const fetchSkills = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if(!userId) {
        console.error("User ID not found in localStorage");
        return;
      }
      const response = await axios.get(
        `${import.meta.env.VITE_PORT}/api/getSkills`,
        {
          params: { id: userId },
        }
      );
      console.log("Response from fetchSkills:", userId);
      console.log("Skills fetched:", response.data.skills);
      setSkills(response.data.skills); // Set the skills in local state
      console.log("Skills in state:", skills);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  useEffect(() => {
    console.log("fetching skills");
    fetchSkills();
  }, []);
  // console.log("here are skills ",skills)
  return (
    <div data-aos="fade-right" className="mb-20 lg:mb-36">
      <h3 className="gradient-text mb-5 lg:mb-10 text-3xl lg:text-6xl font-bold">
        My Skill
      </h3>
      {[...skills].reverse().length === 0 && (
        <h3 className="text-center text-gray-400 text-xl lg:text-2xl font-bold">
          No Skills Found
        </h3>
      )}
      <div className="lg:h-[400px] h-[300px] overflow-y-scroll scroll-bar px-1">
        {skills
          .slice()
          .reverse()
          .map((skill) => (
            <SkillCard key={skill._id} skill={skill} />
          ))}
      </div>
    </div>
  );
}

export default SkillSections;
