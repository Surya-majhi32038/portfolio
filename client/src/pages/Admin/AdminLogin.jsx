import { use, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loggedIn } from "../../redux/slice/authSlice";
import {setUserId} from "../../redux/slice/userIdSlice.js";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
axios.defaults.withCredentials = true;
function AdminLogin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.userId.userId); //-> only for testing purpose
  const [isActive, setIsActive] = useState(false);
  const onLoginHandle = async (e) => {
    e.preventDefault(); // '❗' Prevent page reload
    // console.log("email ->",email,"pass->",pass)
    // console.log("port are work",import.meta.env.VITE_PORT)
    const res = await axios.post(`${import.meta.env.VITE_PORT}/api/login`, {
      email,
      password: pass,
    });
    if (res.data.success) {
      dispatch(loggedIn());
        dispatch(setUserId(res.data.id));
        localStorage.setItem("userId", JSON.stringify(res.data.id)); //  store userId in localStorage
    //   console.log(res.data.id); test pass
      navigate("/admin");
    }

    console.log("userId from slice(onloinghandler) :", userId);
  };

  const onRegistrationHandle = async (e) => {
    e.preventDefault(); // '❗' Prevent page reload
    // console.log("email ->",email,"pass->",pass)
    // console.log("port are work",import.meta.env.VITE_PORT)
    const res = await axios.post(`${import.meta.env.VITE_PORT}/api/signup`, {
      username:user,
      email,
      password: pass,
    });
    if (res.data.success) {
      dispatch(loggedIn());
      dispatch(setUserId(res.data.id));
       localStorage.setItem("userId", JSON.stringify(res.data.id)); //  store userId in localStorage
      // console.log("yes login")
      navigate("/admin");
    }
    console.log("userId from slice(onregis) :", userId);
  };


  const checkOut = async () => {
    const res = await axios.get(`${import.meta.env.VITE_PORT}/api/checkUser`, {
      withCredentials: true,
    });
    const data = await res.data;
    if (data.success) {
      dispatch(loggedIn());
      const value = JSON.parse(localStorage.getItem("userId"))
      dispatch(setUserId(value));
      navigate("/admin");
    }
  };
  useEffect(() => {
    // console.log("call every time")
    checkOut();
    // console.log("userId from useEffect :", userId);
  },[]);

  return (
    

    <div className="flex  justify-center items-center h-screen w-screen ">
      {/* // container */}
      <div className="relative overflow-hidden w-[850px] bg-[#F4F4F9] h-[550px] rounded-lg ph:m-3 ph:h-[95%] shadow-lg  ">
        {/* form-box login */}
        <div
          className={`
    absolute z-[2] right-0 p-10 ph:p-5 h-full w-1/2 bg-[#fff] flex items-center ph:w-full ph:h-[70%] ph:bottom-0  
    transition-all ease-in-out duration-[600ms] delay-[1200ms]
    text-center text-[#333]
    ${
      isActive
        ? "right-1/2 opacity-0 pointer-events-none z-[1] ph:right-0 ph:bottom-[30%]"
        : "opacity-100 pointer-events-auto z-[2]"
    }
`}
        >
          <form onSubmit={onLoginHandle} action="" className="w-[100%]">
            <h1 className="text-3xl font-bold mx-0 -my-[10px]">Login</h1>

            {/* input-box */}
            <div className="relative  my-[30px] mx-0">
              <input
                placeholder="Eamil id"
                className="w-[100%] py-[13px] pl-5 pr-12 bg-[#eee] rounded-lg border-none text-base font-medium placeholder:text-[#888] placeholder:font-normal outline-none"
               type="email" required value={email} onChange={(e)=> setEmail(e.target.value)}
              />
              <FaUser className="inline-block absolute top-5 right-5 text-[#888]" />
            </div>
            <div className="relative  my-[30px] mx-0">
              <input
                placeholder="Password"
                className="w-[100%] py-[13px] pl-5 pr-12 bg-[#eee] rounded-lg border-none text-base font-medium placeholder:text-[#888] placeholder:font-normal outline-none "
               type="password" required value={pass} onChange={(e)=> setPass(e.target.value)} 
              />
              <RiLockPasswordFill className="inline-block absolute top-5 right-5 text-[#888]" />
            </div>
            {/* button */}
            <button type="submit" className="btn mx-auto lg:mt-0 mt-4">
              <span id="front" className="spn">
                Login
              </span>
              <span id="mid" className="spn"></span>
              <span id="back" className="spn">
                Here
              </span>
            </button>
          </form>
        </div>

        {/* For Registation */}
        {/* form-box  */}
        <div
          className={`
    absolute right-0 p-10 ph:p-5 ph:w-full ph:h-[70%] ph:bottom-0   h-full w-1/2 
    flex items-center justify-center text-center text-[#333]
    transition-all ease-in-out duration-[600ms] delay-[1200ms]
    ${
      isActive
        ? "right-1/2 opacity-100 pointer-events-auto z-[2] ph:right-0 ph:bottom-[30%]"
        : "opacity-0 pointer-events-none z-[1]"
    }
`}
        >
          <form onSubmit={onRegistrationHandle} action="" className="w-[100%]">
            <h1 className="text-3xl font-bold mx-0 -my-[10px]">Registation</h1>

            {/* input-box */}
            <div className="relative  my-[30px] mx-0">
              <input
                placeholder="Username"
                className="w-[100%] py-[13px] pl-5 pr-12 bg-[#eee] rounded-lg border-none text-base font-medium placeholder:text-[#888] placeholder:font-normal outline-none "
                type="text" required value={user} onChange={(e)=> setUser(e.target.value)}
              />
              <FaUser className="inline-block absolute top-5 right-5 text-[#888]" />
            </div>

            <div className="relative  my-[30px] mx-0">
              <input
                placeholder="Eamil id"
                className="w-[100%] py-[13px] pl-5 pr-12 bg-[#eee] rounded-lg border-none text-base font-medium placeholder:text-[#888] placeholder:font-normal outline-none "
                type="email" required value={email} onChange={(e)=> setEmail(e.target.value)}
              />
              <FaUser className="inline-block absolute top-5 right-5 text-[#888]" />
            </div>

            <div className="relative  my-[30px] mx-0">
              <input
                placeholder="Password"
                className="w-[100%] py-[13px] pl-5 pr-12 bg-[#eee] rounded-lg border-none text-base font-medium placeholder:text-[#888] placeholder:font-normal outline-none "
                type="password" required value={pass} onChange={(e)=> setPass(e.target.value)} 
              />
              <RiLockPasswordFill className="inline-block absolute top-5 right-5 text-[#888]" />
            </div>
            {/* button */}
            <button type="submit" className="btn mx-auto lg:mt-0 mt-4">
              <span id="front" className="spn">
                Register
              </span>
              <span id="mid" className="spn"></span>
              <span id="back" className="spn">
                Here
              </span>
            </button>
          </form>
        </div>

        {/* toggle part, toggel-box, how to add this -> 'content: '' ' */}
        <div
          className={`absolute w-[100%] h-[100%]  before:absolute before:content-[''] before:-left-[250%] before:w-[300%]  before:h-full before:bg-[#7C1E6C]  before:rounded-[150px] ph:before:rounded-[70px] before:z-[2] transition-all before:duration-[1800ms] before:ease-in-out ph:before:w-[100%] ph:before:h-[300%] ph:before:-top-[270%] ph:before:left-0  ${
            isActive ? "before:left-1/2 ph:before:top-[70%]" : ""
          }`}
        >
          {/* Registation #7494ec */}
          {/* toggle-panel toggle-left */}
          <div
            className={`absolute w-1/2 h-full z-[2] text-white flex flex-col justify-center items-center duration-1000 transition-all  ph:w-full ph:h-[30%]    ${
              isActive ? "lg:-left-1/2 delay-[.6s] ph:bottom-[60%]  ph:-top-[50%]" : "left-0 delay-[1.2s] top-0" 
            }`}
          > 
            <h1 className="ph:text-2xl text-4xl ph:mb-3 mb-5 font-semibold ph:font-medium">Hello, Welcome!</h1>
            <p className="mb-3 text-[13px] font-thin">Don't have an account?</p>
            <button
              onClick={() => setIsActive(true)}
              className="w-40 h-11 text-base font-medium rounded-md hover:text-[#7C1E6C] transition-all delay-200 duration-1000 hover:bg-[#fff] bg-transparent border-2 border-white border-solid ph:w-28  "
            >
              Register
            </button>
          </div>
          {/*  last - 20:30 */}
          {/* Login */}
          {/* toggle-panel toggle-right */}
          <div
            className={`absolute ph:w-full ph:h-[30%]    w-1/2 h-full z-[2] ph:right-0  text-white flex flex-col duration-1000 transition-all delay-[.6s]  justify-center items-center -right-1/2 ${
              isActive ? "right-0 delay-[1.2s] ph:bottom-0" : "ph:-bottom-[30%]"
            }`}
          >
            <h1 className="ph:text-2xl text-4xl ph:mb-3 mb-5 font-semibold ph:font-medium">Welocome Back!</h1>
            <p className=" mb-3 text-[13px] font-thin">
              Already have an account?
            </p>
            <button
              onClick={() => setIsActive(false)}
              className="w-40 h-11 text-base font-medium rounded-md hover:text-[#7C1E6C] transition-all delay-200 duration-400 hover:bg-[#fff] bg-transparent border-2 border-white border-solid ph:w-28 "
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
