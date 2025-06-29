import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../../../redux/slice/userSlice";
import { useEffect } from "react";
import { useState } from "react";
import Project from "./Project";
function AllProject() {
    const dispatch = useDispatch(); // Initialize the Redux dispatch function
    const projects = useSelector((state) => state.user.projects); // Access the skills from the Redux store
    const [edit, setEdit] = useState(false); // State to manage edit mode
    const userId = useSelector((state) => state.userId.userId); // Get the user ID from the Redux store
    // get all skills from the database
    useEffect(() => {
        if (projects.length === 0) {
            fetchProjects();
        }
        fetchProjects();
    }, []);
    const fetchProjects = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_PORT}/api/getProjects`,{
                params: { id: userId }
            });
            // console.log("in fetchSkills", response);
            const data = response.data.projects || []; // Assuming the response structure is { skills: [...] }
            // console.log("Skills fetched:", response);
            dispatch(setProjects(data)); // Dispatch the skills to the Redux store
        } catch (error) {
            console.error("Error fetching skills:", error);
        }
    };

    const handleDelete = async (projectId) => {
        try {
            // fetchSkills();
            // console.log("in handleDelete", skillId);
            const res = await axios.delete(
                `${import.meta.env.VITE_PORT}/api/removeProject/${projectId}`
            );
            const data = res.data; // Assuming the response structure is { message: "Skill deleted successfully" }
            fetchProjects(); // Refresh the skills list after deletion
        } catch (error) {
            console.error("Error deleting skill:", error);
        }
    };
    return (
        <div className="h-auto w-[90%] lg:mt-10 mt-20 justify-start lg:h-auto flex flex-col gap-10 scroll-auto px-1 lg:px-1">
            <h3 className="gradient-text w-fit mx-auto lg:mb-10 text-3xl lg:text-5xl font-bold">
                My Projects
            </h3>
             { projects.length == 0 && <h3 className="text-center text-gray-400 text-xl lg:text-2xl font-bold">
                        No Projects Found
            </h3>}
            <div className="lg:grid lg:grid-cols-5 scroll-bar
              grid-cols-1 gap-5 lg:h-[65vh] h-auto w-full lg:mx-auto overflow-y-scroll scroll-bar px-1 lg:px-1">
            {
                    projects.map((project) => (
                       <Project key={project._id} project={project} handleDelete={handleDelete}/>
                    ))
                }
            </div>
        </div>
    );
}

export default AllProject;
