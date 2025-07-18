import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useRef } from 'react';
import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux';
// import { setProjects } from '../redux/slice/userSlice';
function ProjectSection() {
    // const dispatch = useDispatch();
    // const projects = useSelector((state) => state.user.projects);
    // const [projects, setProjects] = useState([]);

    // store data in useState
    const [projects, setProjects] = useState([]);
   
    const refS = useRef(null);
    const hScrollRight = () => {
        refS.current.scrollLeft += 500;
    }
    const hScrollLeft = () => {
        refS.current.scrollLeft -= 500;
    }
   
    const fetchProjects = async () => {

        
        try {
            const userId = localStorage.getItem("userId");
            const response = await axios.get(`${import.meta.env.VITE_PORT}/api/getProjects`,{
                params: { id: userId }
            });
           
            const data = response.data.projects || []; // Assuming 
            // dispatch(setProjects(data)); // Dispatch the skills to the Redux store
            setProjects(data); // Set the projects in local state
        } catch (error) {
            console.error("Error fetching skills:", error);
        }
    };

     useEffect(() => {
       fetchProjects();
    }, []);
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