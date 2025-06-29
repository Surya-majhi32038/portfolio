import React, { useEffect, useState } from "react";
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
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const loggOutUser = async () => {
    const res = await axios.get(`${import.meta.env.VITE_PORT}/api/logout`, {
      withCredentials: true,
    });
    if (res.data.success) {
      dispatch(loggedOut());
      localStorage.removeItem("userId");
    }
  };
  // console.log(toggleNav) backdrop-blur-2xl
  return (
    <nav
      className={`   flex fixed lg:sticky  w-full lg:justify-between bg-opacity-5  lg:h-16  text-gray-300 text-xl z-10 lg:flex-row  lg:text-2xl transition-transform  ease-in-out lg:translate-x-0  duration-300 flex-col items-center h-[760px]  ${
        hasMounted
          ? toggleNav
            ? "translate-x-0"
            : "-translate-x-full"
          : "-translate-x-full"
      }`}
    >
      <div className="flex w-full  lg:h-full lg:items-center lg:gap-5 gap-7 pl-10 lg:mt-0 mt-10 lg:pl-0 lg:w-auto flex-col lg:flex-row relative">
        <AiOutlineClose
          onClick={() => dispatch(toggle())}
          className="lg:hidden absolute transition-all delay-100 duration-300 right-5 size-6 text-xl cursor-pointer"
        />
        <p
          onClick={() => {
            dispatch(setPage("PersonalDetails"));
            dispatch(toggle());
          }}
          className={`cursor-pointer ${
            page === "PersonalDetails" ? "text-gray-200" : "nav-color"
          } font-bold lg:pl-2 whitespace-nowrap  hover:text-[#8CFF98]   hover:rounded-md  transition-all delay-100`}
        >
          Personal Details
        </p>
        <p
          onClick={() => {
            dispatch(setPage("CreateProject"));
            dispatch(toggle());
          }}
          className={`cursor-pointer ${
            page === "CreateProject" ? "text-gray-300" : "nav-color"
          } font-bold lg:pl-2 whitespace-nowrap  hover:text-[#8CFF98]   hover:rounded-md  transition-all delay-100`}
        >
          Create Project
        </p>

        <p
          className={`cursor-pointer  whitespace-nowrap hover:text-[#8CFF98]  transition-all delay-100 ${
            page === "CreateSkill" ? "text-gray-200" : "nav-color"
          } font-bold`}
          onClick={() => {
            dispatch(setPage("CreateSkill"));
            dispatch(toggle());
          }}
        >
          Create Skill
        </p>
        <p
          className={`cursor-pointer whitespace-nowrap hover:text-[#8CFF98]   transition-all delay-100 ${
            page === "AllProject" ? "text-gray-200" : "nav-color"
          } font-bold`}
          onClick={() => {
            dispatch(setPage("AllProject"));
            dispatch(toggle());
          }}
        >
          All Project
        </p>
        <p
          className={`cursor-pointer  font-bold hover:text-[#8CFF98]  hover:rounded-md transition-all delay-100 ${
            page === "AllSkill" ? "text-[#F1F1F1]" : "nav-color"
          } font-bold `}
          onClick={() => {
            dispatch(setPage("AllSkill"));
            dispatch(toggle());
          }}
        >
          All Skill
        </p>
        <span
          className={` hidden lg:flex ${
               page == "CreateProject"
              ? "left-[190px] w-[175px]"
              : page == "CreateSkill"
              ? "left-[365px] w-[135px]"
              : page == "AllProject"
              ? "left-[500px] w-[130px]"
              : page == "AllSkill"
              ? "left-[630px] w-[100px]"
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
