import axios from 'axios';
import React, { useState } from 'react'

function CreateSkill() {
     const [skillName, setSkillName] = useState('');
     const [level,setLevel] = useState('');
        
        const addSkill = async (e) => {
            e.preventDefault(); // prevent the re-loading of the page
            if (!skillName || !level) {
                alert('Please fill all the fields');
                return;
            }
            if (level < 1 || level > 5) {
                alert('Level must be between 1 and 5');
                return;
            }
            try {
                // console.log()
                const response = await axios.post('http://localhost:3000/api/addSkill', {
                    skill: skillName,
                    level: level
                });
                if(response) {
                    alert('Skill added successfully');
                    setSkillName('');
                    setLevel('');
                }
               
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while adding the skill');
            }
        }
  return (
    <div className='lg:w-[30%] h-fit lg:mt-0 mt-20 w-[85%] lg:h-fit flex flex-col'>
                <h1 className='lg:text-4xl flex justify-center mx-auto text-3xl text-gray-300 mb-3'>Create Project</h1>
                {/* lg:p-4 flex flex-col lg:w-[30%] w-[90vw] lg:gap-2 */}
            <form onSubmit={addSkill} className='flex p-3 flex-col  lg:mx-3 backdrop-blur-3xl rounded-lg gap-3'>
                <div className='flex gap-1 flex-col mb-4 lg:mb-0'>

                    <label htmlFor="" className='lg:text-xl gradient-text'>Skill Name</label>
                    <input placeholder='Enter the Skill' required value={skillName} onChange={(e)=> setSkillName(e.target.value)} className=' bg-transparent border-2   px-3 py-1  rounded-full text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base text-sm font-mono mb-1  lg:mb-3' type="text" />
                </div>
                <div className='flex gap-1 flex-col mb-4 lg:mb-0'>

                    <label htmlFor="" className='lg:text-xl gradient-text'>Skill Level</label>
                    <input placeholder='Enter the Level' required value={level} onChange={(e)=> setLevel(e.target.value)} className=' bg-transparent border-2   px-3 py-1  rounded-full text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base text-sm font-mono mb-1  lg:mb-3' type="text" />
                </div>

                
                <button type='submit' className=" rounded-full lg:py-2 text-white bg-purple-500 hover:bg-purple-600 hover:text-gray-400 transition-all w-[50%] mx-auto delay-100 hover:scale-105">Add Project</button>
            </form>
        </div>
  )
}

export default CreateSkill