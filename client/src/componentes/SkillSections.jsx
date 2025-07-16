import React from 'react'
import SkillCard from './SkillCard.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { setSkills } from '../redux/slice/userSlice';
import axios from 'axios';
import { useEffect } from 'react';

function SkillSections() {
    const dispatch = useDispatch(); // Initialize the Redux dispatch function
    // const skills = useSelector((state) => state.user.skills);
    const [skills, setSkills] = useState([])
    // get all skills from the database
   
    const fetchSkills = async () => {
        const userId = localStorage.getItem("userId");
        if(!userId) {
            console.log('Not found any user id in localStorage');
            return;
        }
        try {
            const response = await axios.get(`${import.meta.env.VITE_PORT}/api/getSkills`,{
                params: { id: userId }
            });
            console.log("in fetchSkills", response.data.skills);
            // console.log("in fetchSkills", response);
            const data = response.data.skills || []; // Assuming the response structure is { skills: [...] }
            setSkills(data); // Set the skills in local state
            // console.log("Skills fetched:", response);
            dispatch(setSkills(data)); // Dispatch the skills to the Redux store
            // console.log("data",data)
        } catch (error) {
            console.error("Error fetching skills:", error);
        }
    };

     useEffect(() => {
        // if (skills.length === 0) {
        //     fetchSkills();
        // }
        // console.log("call the fetchSkills")
        fetchSkills();
    }, []);
    // console.log("here are skills ",skills)
    return (
        <div data-aos="fade-right" className='mb-20 lg:mb-36'>
            <h3 className='gradient-text mb-5 lg:mb-10 text-3xl lg:text-6xl font-bold'>My Skill</h3>
            {
                [...skills].reverse().length === 0 && (
                    <h3 className="text-center text-gray-400 text-xl lg:text-2xl font-bold">
                        No Skills Found
                    </h3>
                )
            }
            <div className='lg:h-[400px] h-[300px] overflow-y-scroll scroll-bar px-1'>
                {skills.slice().reverse().map((skill) => (
                    <SkillCard key={skill._id} skill={skill}/>
                ))}
            </div>
        </div>
    )
}

export default SkillSections