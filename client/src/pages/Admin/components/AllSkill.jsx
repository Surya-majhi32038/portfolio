import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../../../redux/slice/userSlice";
import { MdDelete } from "react-icons/md";
function AllSkill() {
    const dispatch = useDispatch(); // Initialize the Redux dispatch function
    const skills = useSelector((state) => state.user.skills); // Access the skills from the Redux store
    const userId = useSelector((state) => state.userId.userId); // Get the user ID from the Redux store
    // get all skills from the database
    useEffect(() => {
       if (skills.length === 0) {
        fetchSkills();
    }
    fetchSkills();
    }, []); 
    const fetchSkills = async () => {
        try {
            console.log("userId in fetchSkills", userId);
           // const savedState = JSON.parse(localStorage.getItem("userId")); // Get the user ID from localStorage or Redux store
            const response = await axios.get(`${import.meta.env.VITE_PORT}/api/getSkills`,{
                params: { id: userId }
            });
            console.log("in fetchSkills", response);
            const data = response.data.skills || []; // Assuming the response structure is { skills: [...] }
            // console.log("Skills fetched:", response);
            dispatch(setSkills(data)); // Dispatch the skills to the Redux store
        } catch (error) {
            console.error("Error fetching skills:", error);
        }
    };

    const handleDelete = async (skillId) => {
        try {
            //   fetchSkills();
            // console.log("in handleDelete", skillId);
            const res = await axios.delete(`${import.meta.env.VITE_PORT}/api/removeSkill/${skillId}`);
            const data = res.data; // Assuming the response structure is { message: "Skill deleted successfully" }
            fetchSkills(); // Refresh the skills list after deletion
        } catch (error) {
            console.error("Error deleting skill:", error);
        }
    }
    // console.log("Skills in AllSkill component:", skills);
    return (
        <div className="h-auto w-[90%] lg:mt-0 mt-20 lg:w-[50%] lg:h-auto flex flex-col gap-10 scroll-auto px-1 lg:px-1">
            <h3 className="gradient-text w-fit mx-auto lg:mb-10 text-3xl lg:text-5xl font-bold">
                My Skill
                </h3>
            {
                skills.length === 0 && (
                    <h3 className="text-center text-gray-400 text-xl lg:text-2xl font-bold">
                        No Skills Found
                    </h3>
                )
            }
            <div className='h-[50vh] overflow-y-scroll scroll-bar px-1 lg:px-1'>

                {skills.map((skill) => (
                    <div key={skill._id} className="flex lg:h-14 h-10 items-center rounded-xl lg:py-2 py-1 mb-2 lg:mb-3 justify-between  border-2 px-2 lg:px-4 backdrop-blur-lg">
                        <h3 className="lg:text-2xl lg:basis-1/3 text-base text-gray-200 lg:font-bold">
                            {skill.skill}
                        </h3>
                        <div className="flex lg:basis-1/3 items-center  gap-2">
                        <progress
                            max="100"
                            value={skill.level * 20}
                            className=" prograss-bar lg:w-[20vw] h-5"
                        />
                            <MdDelete onClick={()=>{handleDelete(skill._id)}} className="text-white lg:text-2xl size-6 cursor-pointer hover:text-amber-500" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllSkill;
