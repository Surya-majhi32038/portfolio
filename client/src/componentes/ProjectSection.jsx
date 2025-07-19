import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useRef } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from '../redux/slice/userSlice';
function ProjectSection({userId}) {
   
    const refS = useRef(null);
    const hScrollRight = () => {
        refS.current.scrollLeft += 500;
    }
    const hScrollLeft = () => {
        refS.current.scrollLeft -= 500;
    }
   const dispatch = useDispatch(); // Initialize the Redux dispatch function
    const projects = useSelector((state) => state.user.projects); // Access the skills from the Redux store
    // const userId = useSelector((state) => state.userId.userId); // Get the user ID from the Redux store
    // const userId = JSON.parse(localStorage.getItem("userId")); // Get the user ID from localStorage
    if(userId == null || userId == undefined || userId == "undefined"){
        console.log("User ID is not set. Please set the user ID before fetching projects.");
    }
    // get all skills from the database
    useEffect(() => {
        fetchProjects();
    }, []);
    const fetchProjects = async () => {
        console.log("userId in fetchProjects", userId);
        try {
            const response = await axios.get(`${import.meta.env.VITE_PORT}/api/getProjects`,{
                params: { id: userId }
            });
            // console.log("in fetchSkills", response);
            const data = response.data.projects || []; // Assuming the response structure is { skills: [...] }
            // console.log("Skills fetched:", response);
            dispatch(setProjects(data)); // Dispatch the skills to the Redux store
            // console.log(data);
        } catch (error) {
            console.error("Error fetching skills:", error);
        }
    };

    // console.log("data from redux", projects)
    return (
        <div data-aos="fade-down" className='mb-20 lg:mb-36'>
            <h3 className='lg:text-7xl text-3xl mb-4 font-bold gradient-text lg:mb-8'>My Projects</h3>
            {projects.length == 0 && <h3 className="text-center text-gray-400 text-xl lg:text-2xl font-bold">
                No Projects Found
            </h3>}
            <div ref={refS} className='flex lg:p-3 gap-4 lg:gap-0 overflow-x-scroll scrollbar-hide'>

                {[...projects].reverse().map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}

            </div>

            <div className='lg:flex hidden justify-center items-center gap-4'>

                <FaArrowLeft onClick={hScrollLeft} className='text-2xl  text-yellow-600 cursor-pointer ' />
                <h3 className='uppercase text-xl text-gray-300 font-mono gradient-text '>slid more</h3>
                <FaArrowRight onClick={hScrollRight} className='text-2xl text-yellow-600 cursor-pointer ' />
            </div>
        </div>
    )
}

export default ProjectSection