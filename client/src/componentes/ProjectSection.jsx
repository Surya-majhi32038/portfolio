import React from 'react'
import ProjectCard from './ProjectCard'
import { FaArrowRight,FaArrowLeft  } from "react-icons/fa";
import { useRef } from 'react';
function ProjectSection() {
    const refS = useRef(null);

    const hScrollRight = ()=>{
        refS.current.scrollLeft += 500;
    }
    const hScrollLeft = ()=>{
        refS.current.scrollLeft -= 500;
    }
  return (
    <div data-aos="fade-down" className='mb-20 lg:mb-36'>
        <h3 className='lg:text-7xl text-3xl mb-4 font-bold gradient-text lg:mb-8'>My Projects</h3>
        <div ref={refS} className='flex lg:p-3 gap-4 lg:gap-8 overflow-x-scroll scrollbar-hide'>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        </div>

        <div className='lg:flex hidden justify-center items-center gap-4'>

        <FaArrowLeft onClick={hScrollLeft} className='text-2xl  text-yellow-600 cursor-pointer '/> 
        <h3 className='uppercase text-xl text-gray-300 font-mono gradient-text '>slid more</h3>
        <FaArrowRight onClick={hScrollRight} className='text-2xl text-yellow-600 cursor-pointer '/>
        </div>
    </div>
  )
}

export default ProjectSection