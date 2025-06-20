import { use, useEffect, useState } from 'react'
import axios from 'axios';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { loggedIn } from '../../redux/slice/authSlice';
axios.defaults.withCredentials = true;
function AdminLogin() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmitHandle = async(e) => {
         e.preventDefault(); // '❗' Prevent page reload
        // console.log("email ->",email,"pass->",pass)
        // console.log("port are work",import.meta.env.VITE_PORT)
        const res = await axios.post(`${import.meta.env.VITE_PORT}/api/login`,{
            email,
            password:pass
        });
        if(res.data.success) {
            dispatch(loggedIn())
            // console.log("yes login")
            navigate("/admin")
        }
    }
    const checkOut = async() =>{
        const res = await axios.get(`${import.meta.env.VITE_PORT}/api/checkUser`,{
            withCredentials: true
        })
        const data = await res.data;
        if(data.success) {
             dispatch(loggedIn())
            navigate("/admin")
        }
    }
    useEffect(() => {
        console.log("call every time")
      checkOut();
    })
    
  return (
    <form onSubmit={onSubmitHandle} className='lg:w-screen flex-col h-screen flex justify-center items-center'>
        <div className='flex backdrop-blur-xl p-5 rounded-md flex-col border-gray-500 border-2 gap-4 w-72 lg:w-96'>
            <span className='lg:text-5xl mx-auto text-3xl mb-4 font-bold gradient-text lg:mb-10'>Login</span>
            {/* email */}
            <input type="email" required value={email} onChange={(e)=> setEmail(e.target.value)} className='bg-transparent border-2   px-3 py-2  rounded-lg text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100  text-lg font-mono mb-1  lg:mb-3' placeholder='example@gmail.com' name="email" id="email" />
            {/* <p>{process.env.REACT_APP_PORT}</p> */}
            {/* password */}
            <input type="password" required value={pass} onChange={(e)=> setPass(e.target.value)} className='bg-transparent border-2   px-3 py-2  rounded-lg text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 text-lg  font-mono mb-1  lg:mb-3'placeholder='password1234' name="password" id="pass" />

            {/* submit */}
            {/* <button type='submit' className=" rounded-lg py-2 text-white bg-purple-500 hover:bg-purple-600  transition-all w-[50%] mx-auto delay-100 hover:scale-105">Submit</button> */}

            <button type="submit" className="btn mx-auto lg:mt-0 mt-4">
            <span id="front" className="spn">Submit</span>
            <span id="mid" className="spn"></span>
            <span id="back" className="spn">Here</span>
          </button>
        </div>
    </form>
  )
}

export default AdminLogin