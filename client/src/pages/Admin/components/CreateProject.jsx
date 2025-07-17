import React, { useState } from 'react'
import { uploadImg } from '../../../Cloudinary/uploadImg.js';
import axios from 'axios';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
function CreateProject() {
    const [name, setname] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [githubLink, setGithubLink] = useState('');
    const [liveLink, setLiveLink] = useState('');
    const userId = useSelector((state) => state.userId.userId);
    const handleSubmit = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setImage(file);
    }

    const addProject = async (e) => {
        e.preventDefault(); // prevent the re-loading of the page

        if (!image) {
            alert('Please select an image');
            return;
        }

        const uploadImgs = await uploadImg(image);
        if (!uploadImg) {
            alert('Image upload failed');
            return;
        } 
        // console.log("uploadImgs :", uploadImgs); // done 

        try {
            console.log()
            const response = await axios.post(`${import.meta.env.VITE_PORT}/api/addProject`, {
                title: name,
                description: description,
                githubUrl: githubLink,
                liveUrl: liveLink,
                secureUrl: uploadImgs.secureUrl,
                publicId: uploadImgs.publicId,
                deleteToken: uploadImgs.deleteTokent,
                id: userId
            });
            if(response) {
                toast.success('Project added successfully');
                setname('');
                setDescription('');
                setImage(null);
                setGithubLink('');
                setLiveLink('');
            }
           
        } catch (error) {
            console.error('Error adding project:', error);
            toast.error('Failed to add project');
        }
    }
    return (
        // flex items-center justify-center flex-col mx-auto (befor)
        <div className='lg:w-[30%] w-[90%] lg:mt-0 mt-20 h-fit flex flex-col'>
                <h1 className='lg:text-5xl gradient-text lg:font-bold flex justify-center mx-auto text-3xl text-gray-300 mb-3'>Create Project</h1>
                {/* lg:p-4 flex flex-col lg:w-[30%] w-[90vw] lg:gap-2 */}
            <form onSubmit={addProject} className='flex lg:p-3 p-6 flex-col lg:mx-3  backdrop-blur-3xl rounded-lg lg:gap-3'>
                <div className='flex gap-1 flex-col mb-4 lg:mb-0'>

                    <label htmlFor="" className='lg:text-xl gradient-text'>Project Name</label>
                    <input placeholder='portfolio site' required value={name} onChange={(e)=> setname(e.target.value)} className=' bg-transparent border-2   px-3 py-1  rounded-full text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base text-sm font-mono mb-1  lg:mb-3' type="text" />
                </div>
                <div className='flex lg:gap-1 flex-col mb-4 lg:mb-0'>
                    <label className='lg:text-xl gradient-text' htmlFor="">Project Description</label>
                    <textarea
                        required value={description} onChange={(e)=> setDescription(e.target.value)}
                        className=' bg-transparent border-2 lg:px-3 lg:py-1  rounded-lg h-[150px] text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base font-mono text-sm p-3  mb-3'
                        placeholder="This is an Portfolio site..."
                        name="message"
                        id="" />
                </div>

                <div className='flex justify-between mb-4 lg:mb-0'>

                    <label htmlFor="" className='lg:text-xl gradient-text'>Project Image:</label>
                    <input onChange={(e) => handleSubmit(e)} type="file" required accept='image' className='cursor-pointer' />
                </div>

                <div className='flex lg:gap-1 flex-col '>

                    <label htmlFor="" className='lg:text-xl gradient-text'>Github link</label>
                    <input  required value={githubLink} onChange={(e)=> setGithubLink(e.target.value)} placeholder='http://www.github.com' className=' bg-transparent border-2   px-3 py-1  rounded-full text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base text-sm font-mono mb-4  lg:mb-3' type="url" />
                </div>

                <div className='flex lg:gap-1 flex-col '>

                    <label htmlFor="" className='lg:text-xl gradient-text'>Live link</label>
                    <input  required value={liveLink} onChange={(e)=> setLiveLink(e.target.value)} placeholder='http://www.exapmple.live.com' className=' bg-transparent border-2   px-3 py-1  rounded-full text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base text-sm font-mono mb-4  lg:mb-3' type="url" />
                </div>
                {/* <button type='submit' className=" rounded-full lg:py-2 py-1 text-white bg-purple-500 hover:bg-purple-600 hover:text-gray-400 transition-all text-sm w-[50%] mx-auto delay-100 hover:scale-105">Add Project</button> */}
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

export default CreateProject