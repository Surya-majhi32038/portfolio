import { MdOutlineDownloadDone } from "react-icons/md";
import { deleteImg, uploadImg } from "../../../Cloudinary/uploadImg";
import { FaGithub } from "react-icons/fa";
import { TbBuildingBroadcastTowerFilled } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import axios from "axios";

function Project({ project, handleDelete }) {
    const [edit, setEdit] = useState(false); // State to manage edit mode
    // console.log("Project data:", project);
    const [name, setname] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    const [image, setImage] = useState(project.img);
    const [newImage, setNewImage] = useState(""); // set the new selected image with raw data
    const [githubLink, setGithubLink] = useState(project.githubUrl);
    const [liveLink, setLiveLink] = useState(project.liveUrl);
    const [deleteUrl, setdeleteUrl] = useState(project.deletedUrl);
    const [publicUrl, setpublicUrl] = useState(project.publicUrl);
    const handleSubmit = (e) => {
        const file = e.target.files[0];
        // console.log(file)
        console.log("File selected:", file);
        setNewImage(file);
    };

    // Function to get project data from the server
    const addProject = async (projectId) => {
        setEdit(!edit);
        //  console.log("after edit :", name);

        if (!image) {
            alert("Please select an image");
            return;
        }
        console.log("image :", image);
        let uploadImgs = {};
        if (newImage) {
            uploadImgs = await uploadImg(newImage); // return -> 1. secure url, 2. public id, 3. deleted url;
            if (!uploadImg) {
                alert("Image upload failed");
                return;
            }
            if (project.deletedUrl) {
                try {
                    console.log("Previous image URL:", project.secureUrl);
                    console.log("Deleting previous image:", project.deletedUrl);
                    deleteImg(project.deletedUrl);
                    console.log("Image deleted successfully");
                } catch (error) {
                    console.error("Error deleting image:", error);
                }
            }
            setImage(uploadImgs.secureUrl);
            console.log("New image uploaded:", uploadImgs.secureUrl);
        }
        // delete the previous image if it exists

        // console.log("uploadImgs :", uploadImgs); // done
        // console.log(projectId);
        console.log("updated image ", image);
        let res;
        try {
            res = await axios.post(
                `${import.meta.env.VITE_PORT}/api/updateProject/${projectId}`,
                {
                    name,
                    description: description,
                    githubUrl: githubLink,
                    img: image,
                    liveUrl: liveLink,
                    publicId: uploadImgs.publicId,
                    deleteToken: uploadImgs.deleteTokent,
                }
            );
        } catch (error) {
            console.error("Error:", error, res);
            alert("An error occurred while adding the project");
        }
    };
    const handleDeleteProject = (projectId) => {
        handleDelete(projectId);
        // console.log("Project ID to delete:", project.deletedUrl);
        if (project.deletedUrl) {
            deleteImg(project.deletedUrl)
                .then((res) => {
                    console.log("Image deleted successfully:", res);
                })
                .catch((err) => {
                    console.error("Error deleting image:", err);
                });
        }
    };
    // console.log("Project data:", data);
    return (
        <div className="w-fit mx-auto lg:mb-0 mb-12">
            {edit ? (
                <div className="flex flex-col h-[350px] select-none w-[250px] overflow-hidden border-opacity-60 hover:shadow-lg transition-all delay-100 duration-300  rounded-xl p-2 gap-1 border-2 border-gray-400 backdrop-blur-xl">
                    <div className="flex flex-col">
                        {/* <p className=" gradient-text lg:text-base">Name</p> */}
                        <input
                            placeholder="portfoli side"
                            required
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            className=" bg-transparent border-2   px-2 py-[2px]  rounded-lg text-gray-200 outline-none focus:border-purple-500 focus:pl-4 transition-all duration-100 lg:text-base text-sm font-mono mb-1  lg:mb-3"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col ">
                        {/* <p className=" gradient-text lg:text-base">Description</p> */}
                        <textarea
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className=" bg-transparent border-2 resize-none  rounded-lg  text-gray-200 outline-none focus:border-purple-500 focus:pl-2 transition-all duration-100 lg:text-base font-mono text-xs p-1  mb-3"
                            placeholder="This is a portfolio website where I showcase my projects and skills."
                            cols="30"
                            rows="5"
                            name="message"
                            id=""
                        />
                    </div>
                    <div className="flex ">
                        <p className=" gradient-text lg:text-base">Image</p>
                        <input
                            onChange={(e) => handleSubmit(e)}
                            type="file"
                            required
                            accept="image"
                            className="cursor-pointer"
                        />
                    </div>
                    <div className="flex flex-col">
                        {/* <p className=" gradient-text lg:text-base">Github Url</p> */}
                        <input
                            placeholder="https://github.com"
                            required
                            value={githubLink}
                            onChange={(e) => setGithubLink(e.target.value)}
                            className=" bg-transparent border-2   px-2 py-[2px]  rounded-lg text-gray-200 outline-none focus:border-purple-500 focus:pl-4 transition-all duration-100 lg:text-base text-sm font-mono mb-1  lg:mb-3"
                            type="text"
                        />
                    </div>

                    <div className="flex flex-col ">
                        {/* <p className=" gradient-text lg:text-base">Live Url</p> */}
                        <input
                            placeholder="https://live.example.com"
                            required
                            value={liveLink}
                            onChange={(e) => setLiveLink(e.target.value)}
                            className=" bg-transparent border-2   px-2 py-[2px]  rounded-lg text-gray-200 outline-none focus:border-purple-500 focus:pl-4 transition-all duration-100 lg:text-base text-sm font-mono mb-1  lg:mb-3"
                            type="text"
                        />
                    </div>
                </div>
            ) : (
                <div className=" h-[350px] select-none w-[250px] lg:h-[23vw] flex flex-col overflow-hidden border-opacity-60 hover:shadow-lg transition-all delay-100 duration-300 rounded-xl border-2 border-gray-400 backdrop-blur-xl">
                    {/* picture of the project */}
                    <div>
                        <img
                            src={image}
                            alt="project over view pic"
                            className="lg:h-[150px] h-[150px] w-[250px] lg:w-[300px]"
                        />
                    </div>

                    {/* details section  */}
                    <div className="gap-2 p-2 lg:h-full flex flex-col">
                        <h3 className=" text-2xl  text-justify text-gray-200">{name}</h3>
                        <p className="text-sm break-words scroll-bar overflow-y-scroll overflow-x-hidden h-28 text-gray-400">
                            {description}
                        </p>
                        <div className="flex items-center bottom-0 justify-between">
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-pink-700 lg:text-2xl text-xl cursor-pointer hover:text-blue-800 inline-flex items-center" />
                            </a>
                            <a href={liveLink} target="_blank" rel="noopener noreferrer">
                                <TbBuildingBroadcastTowerFilled className="text-pink-700 lg:text-2xl text-xl cursor-pointer hover:text-blue-800 inline-flex items-center" />
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* edit and delete button */}
            <div className="flex lg:w-[15vw] w-[240px] mt-3 rounded-md py-[4px] px-6 items-center justify-between">
                <MdDelete
                    onClick={() => {
                        handleDeleteProject(project._id);
                    }}
                    className="text-white text-2xl size-6 cursor-pointer hover:text-amber-500"
                />
                {edit ? (
                    <MdOutlineDownloadDone
                        onClick={() => addProject(project._id)}
                        className="text-white text-2xl size-8 cursor-pointer hover:text-amber-500"
                    />
                ) : (
                    <MdEdit
                        onClick={() => setEdit(!edit)}
                        className="text-white text-2xl size-6 cursor-pointer hover:text-amber-500"
                    />
                )}
            </div>
        </div>
    );
}

export default Project;
