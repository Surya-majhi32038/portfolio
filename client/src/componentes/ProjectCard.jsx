import React from 'react'
import { FaGithub } from "react-icons/fa";
import { TbBuildingBroadcastTowerFilled } from "react-icons/tb";
function ProjectCard({project}) {
  return (
    <div className='lg:p-4 p-1'>
    <div className='lg:h-fit h-[440px] select-none lg:w-[300px] w-[270px] flex flex-col overflow-hidden border-opacity-60 lg:hover:shadow-lg lg:hover:scale-110 cursor-grab lg:hover:border-4 lg:hover:border-gray-400 transition-all lg:hover:z-10 z-0 delay-100 duration-300 rounded-2xl gap-3 lg:gap-1 border-2 border-gray-400 backdrop-blur-xl'>

        {/* picture of the project */}
        <div>
            <img src={project.img} alt="project over view pic" className='lg:h-[200px] h-[180px] w-[300px] lg:w-[400px]'/>
        </div>

        {/* details section  */}
        <div className='lg:gap-3 gap-1 lg:p-4 p-2 flex flex-col'>
            <h3 className='lg:text-3xl text-2xl text-justify text-gray-200'>{project.name}</h3>
            <p className='lg:text-base line-clamp-none scroll-bar overflow-y-auto lg:h-40 h-40 text-gray-400'>{project.description}</p>
            <div className='flex items-center justify-between'>
                <a href={project.githubUrl}>

                <FaGithub className='text-pink-700 lg:text-2xl text-xl cursor-pointer hover:text-blue-800 inline-flex items-center'/>
                </a>
                <a href={project.liveUrl}>

                <TbBuildingBroadcastTowerFilled className='text-pink-700 lg:text-2xl text-xl cursor-pointer hover:text-blue-800 inline-flex items-center' />
                </a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProjectCard