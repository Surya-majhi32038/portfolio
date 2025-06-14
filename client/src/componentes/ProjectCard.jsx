import React from 'react'
import { FaGithub } from "react-icons/fa";
import projectImg from "../assets/projectImg.png"
import { TbBuildingBroadcastTowerFilled } from "react-icons/tb";
function ProjectCard() {
  return (
    <div className='lg:p-4 p-1'>
    <div className='h-fit select-none lg:w-[300px] w-[250px]  flex flex-col overflow-hidden border-opacity-60 hover:shadow-lg hover:lg:scale-105 transition-all delay-100 duration-300 rounded-2xl gap-7 border-2 border-gray-400 backdrop-blur-xl'>
        {/* picture of the project */}
        <div>
            <img src={projectImg} alt="project over view pic" className='lg:h-auto  lg:w-[400px]'/>
        </div>

        {/* details section  */}
        <div className='gap-4 lg:p-4 p-2 flex flex-col'>
            <h3 className='lg:text-4xl text-2xl text-justify text-gray-200'>About Day</h3>
            <p className='lg:text-xl text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui tempora exercitationem aspernatur asperiores unde, omnis  doloribus!</p>
            <div className='flex items-center justify-between'>
                <a href="">

                <FaGithub className='text-pink-700 lg:text-2xl text-xl cursor-pointer hover:text-blue-800 inline-flex items-center'/>
                </a>
                <a href="">

                <TbBuildingBroadcastTowerFilled className='text-pink-700 lg:text-2xl text-xl cursor-pointer hover:text-blue-800 inline-flex items-center' />
                </a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProjectCard