import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
function CreateSkill() {
     const [skillName, setSkillName] = useState('');
     const [level,setLevel] = useState('');
     const userId = useSelector((state) => state.userId.userId);
        
        const addSkill = async (e) => {
            e.preventDefault(); // prevent the re-loading of the page
            if (!skillName || !level) {
                alert('Please fill all the fields');
                return;
            }
            if (level < 1 || level > 10) {
                toast.error('Level must be between 1 and 10');
                return;
            }
            try {
                // console.log()
                const response = await axios.post(`${import.meta.env.VITE_PORT}/api/addSkill`, {
                    skill: skillName,
                    level: level,
                    id: userId
                });
                if(response) {
                   toast.success('Skill added successfully');
                    setSkillName('');
                    setLevel('');
                }
               
            } catch (error) {
                console.error('Error:', error);
                toast.error('Failed to add skill');
            }
        }
  return (
    <div className='lg:w-[30%] h-fit lg:mt-0 mt-20 w-[85%]  flex flex-col'>
                <h1 className='lg:text-5xl lg:font-bold lg:top-4 flex gradient-text justify-center mx-auto text-3xl text-gray-300 mb-3'>Create Skill</h1>
                {/* lg:p-4 flex flex-col lg:w-[30%] w-[90vw] lg:gap-2 */}
            <form onSubmit={addSkill} className='flex p-3 flex-col  lg:mx-3 backdrop-blur-3xl rounded-lg gap-3'>
                <div className='flex gap-1 flex-col mb-4 lg:mb-0'>

                    <label htmlFor="" className='lg:text-xl gradient-text'>Skill Name</label>
                    <input placeholder='javascript' required value={skillName} onChange={(e)=> setSkillName(e.target.value)} className=' bg-transparent border-2   px-3 py-1  rounded-full text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base text-sm font-mono mb-1  lg:mb-3' type="text" />
                </div>
                <div className='flex gap-1 flex-col mb-4 lg:mb-0'>

                    <label htmlFor="" className='lg:text-xl gradient-text'>Skill Level</label>
                    <input placeholder='(1-10)' required value={level} onChange={(e)=> setLevel(e.target.value)} className=' bg-transparent border-2   px-3 py-1  rounded-full text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base text-sm font-mono mb-1  lg:mb-3' type="text" />
                </div>

                
                 {/* button */}
          <button type="submit" className="btn mx-auto lg:mt-0 mt-4">
            <span id="front" className="spn">Submit</span>
            <span id="mid" className="spn"></span>
            <span id="back" className="spn">Here</span>
          </button>
            </form>
        </div>
  )
}

export default CreateSkill