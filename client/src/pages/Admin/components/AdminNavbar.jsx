import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../redux/slice/navSlice.js"; // for toggling the navigation
import { setPage } from "../../../redux/slice/pageSlice.js";
import axios from "axios";
import { loggedOut } from "../../../redux/slice/authSlice.js";

axios.defaults.withCredentials=true;
function AdminNavbar() {
    const toggleNav = useSelector((state) => state.nav.toggleNav);
    const dispatch = useDispatch();
    const loggOutUser = async() =>{
        const res = await axios.get("http://localhost:3000/api/logout",{
            withCredentials:true
        })
       if(res.data.success) dispatch(loggedOut());

    }
    // console.log(toggleNav)
    return (

        <nav
            className={`bg-white flex lg:border-gray-500 fixed lg:static z-10 w-full lg:justify-between bg-opacity-5 backdrop-blur-3xl lg:px-5 lg:h-auto lg:py-2 text-gray-300 text-xl lg:flex-row lg:text-2xl transition-all  ease-in-out lg:translate-x-0 flex-col h-[760px] ${toggleNav ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            <div className="flex w-full gap-5 lg:gap-0 pl-10 lg:mt-0 mt-10 lg:pl-0 lg:w-auto flex-col lg:flex-row">
                <AiOutlineClose
                    onClick={() => dispatch(toggle())}
                    className="lg:hidden absolute top-5 right-4 size-6 text-xl cursor-pointer"
                />
                <p
                    onClick={() => {
                        dispatch(setPage("CreateProject"));
                        dispatch(toggle())
                    }}
                    className="cursor-pointer hover:bg-purple-500 whitespace-nowrap  hover:bg-opacity-60 hover:shadow-xl lg:px-2 lg:py-1 hover:rounded-md transition-all delay-100"
                >
                    Create Project
                </p>
                <p className="cursor-pointer hover:bg-purple-500 whitespace-nowrap hover:bg-opacity-60 hover:shadow-xl lg:px-2 lg:py-1 hover:rounded-md transition-all delay-100"
                    onClick={() => {
                        dispatch(setPage("CreateSkill"));
                        dispatch(toggle())
                    }}
                >
                    Create Skill
                </p>
                <p className="cursor-pointer hover:bg-purple-500 whitespace-nowrap hover:bg-opacity-60 hover:shadow-xl lg:px-2 lg:py-1 hover:rounded-md transition-all delay-100" onClick={() => {
                    dispatch(setPage("AllProject"));
                    dispatch(toggle())
                }}>
                    All Project
                </p>
                <p className="cursor-pointer hover:bg-purple-500 hover:bg-opacity-60 hover:shadow-xl lg:px-2 lg:py-1 hover:rounded-md transition-all delay-100" onClick={() => {
                    dispatch(setPage("AllSkill"));
                    dispatch(toggle())
                }}>
                    All Skill
                </p>
            </div>
            <div className="flex lg:gap-5 gap-2 lg:pr-10 pr-0 lg:mt-0 mt-10 lg:w-fit w-full ">
                <button onClick={loggOutUser} className="cursor-pointer lg:pl-0 pl-10 lg:mt-0 mt-10 lg:w-auto hover:bg-red-500 lg:p-1 hover:rounded-md transition-all hover:shadow-xl delay-100">
                    Login
                </button>
            </div>
        </nav>
    );
}

export default AdminNavbar;
