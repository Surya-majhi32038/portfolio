import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../redux/slice/navSlice.js"; // for toggling the navigation
import { setPage } from "../../../redux/slice/pageSlice.js";
import axios from "axios";
import { loggedOut } from "../../../redux/slice/authSlice.js";

axios.defaults.withCredentials = true;
function AdminNavbar() {
  const toggleNav = useSelector((state) => state.nav.toggleNav);
  const page = useSelector((state) => state.page.page);
  const dispatch = useDispatch();
  const loggOutUser = async () => {
    const res = await axios.get(`${import.meta.env.VITE_PORT}/api/logout`, {
      withCredentials: true,
    });
    if (res.data.success) dispatch(loggedOut());
  };
  // console.log(toggleNav)
  return (
    <nav
      className={`bg-white flex lg:border-gray-500 fixed lg:static  w-full lg:justify-between bg-opacity-5 backdrop-blur-3xl lg:h-16  text-gray-300 text-xl z-10 lg:flex-row lg:text-2xl transition-all  ease-in-out lg:translate-x-0 flex-col items-center h-[760px] ${
        toggleNav ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex w-full lg:h-full lg:items-center lg:gap-5 gap-7 pl-10 lg:mt-0 mt-10 lg:pl-0 lg:w-auto flex-col lg:flex-row relative">
        <AiOutlineClose
          onClick={() => dispatch(toggle())}
          className="lg:hidden absolute top-5 right-4 size-6 text-xl cursor-pointer"
        />
        <p
          onClick={() => {
            dispatch(setPage("CreateProject"));
            dispatch(toggle());
          }}
          className="cursor-pointer lg:pl-2 whitespace-nowrap  hover:bg-opacity-60   hover:rounded-md transition-all delay-100"
        >
          Create Project
        </p>
        <p
          className="cursor-pointer  whitespace-nowrap hover:bg-opacity-60  transition-all delay-100"
          onClick={() => {
            dispatch(setPage("CreateSkill"));
            dispatch(toggle());
          }}
        >
          Create Skill
        </p>
        <p
          className="cursor-pointer whitespace-nowrap hover:bg-opacity-60   transition-all delay-100"
          onClick={() => {
            dispatch(setPage("AllProject"));
            dispatch(toggle());
          }}
        >
          All Project
        </p>
        <p
          className="cursor-pointer  hover:bg-opacity-60  hover:rounded-md transition-all delay-100"
          onClick={() => {
            dispatch(setPage("AllSkill"));
            dispatch(toggle());
          }}
        >
          All Skill
        </p>
        <span
          className={` hidden lg:flex ${
            page == "CreateSkill"
              ? "left-[170px] w-[140px]"
              : page == "AllProject"
              ? "left-[310px] w-[125px]"
              : page == "AllSkill"
              ? "left-[435px] w-[100px]"
              : ""
          }`}
        ></span>
      </div>
      <div className="flex items-center  gap-2 pr-0 lg:mt-0 mt-10 lg:h-full lg:w-fit w-full ">
        <button
          onClick={loggOutUser}
          id="login-btn"
          className="cursor-pointer lg:pl-0 pl-10 lg:mt-0 mt-10 lg:w-24 lg:h-full rounded-md transition-all  delay-100"
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default AdminNavbar;
