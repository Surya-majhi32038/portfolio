import React, { useState } from "react";
import { uploadImg } from "../../../Cloudinary/uploadImg.js";
import axios from "axios";
import myImg from "../../../assets/myImg.jpg";
import { useSelector } from "react-redux";
function PersonalDetails() {
  const [userName, setUsreName] = useState("");
  const [userPosition, setUserPosition] = useState("");
  const [userDes, setUserDes] = useState("");
  const [userGithub, setUserGithub] = useState("");
  const [userLinkedin, setUserLinkedin] = useState("");
  const [userFacebook, setUserFacebook] = useState("");
  const [userX, setUserX] = useState("");
  const [userInsta, setUserInsta] = useState("");
  const [userYoutube, setUserYoutube] = useState("");
  const [imageLiveLink, setimageLiveLink] = useState('');
  const userId = useSelector((state) => state.userId.userId);
    let uploadImgs = null;
  const handleSubmit = async(e) => {
    const file = e.target.files[0]; // 924*954 pixels
    console.log(file);
    if (!userImage) {
      alert("Please select an image");
      return;
    }

     uploadImgs = await uploadImg(file);
     setimageLiveLink(uploadImgs.secureUrl);
    if (!uploadImg) {
      alert("Image upload failed");
      return;
    }
  };

  
  const updateUserDetails = async (e) => {
    e.preventDefault(); // prevent the re-loading of the page

    
    // console.log("uploadImgs :", uploadImgs); // done

    try {
      console.log(userName, userPosition, userDes, userGithub, userLinkedin, userFacebook, userX, userInsta, userYoutube);
      const response = await axios.post(
        `${import.meta.env.VITE_PORT}/api/update-personal-details`,
        {
         userName: userName,
         userPosition: userPosition,
         userDes: userDes,
         userGithub: userGithub,
         userLinkedin: userLinkedin,
         userFacebook: userFacebook,
         userX: userX,
         userInsta: userInsta,
         userYoutube: userYoutube,
          secureUrl: uploadImgs.secureUrl,
          publicId: uploadImgs.publicId,
          deleteToken: uploadImgs.deleteTokent,
          id:userId
        }
      );
      if (response) {
        alert("Project added successfully");
        setUsreName("");
        setUserDes("");
        setUserImage(null);
        setUserGithub("");
        setUserInsta("");
        setUserLinkedin("");
        setUserFacebook("");
        setUserYoutube("");
        setUserX("");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while addint user personla details");
    }
  };
  return (
    // flex items-center justify-center flex-col mx-auto (befor)
    <div className="lg:w-[55%] w-[90%] lg:mt-0 mt-10  h-full flex flex-col">
      <h1 className="lg:text-5xl lg:font-bold gradient-text lg:mt-5 flex justify-center mx-auto text-3xl text-gray-300 mb-3">
        Update Your Details
      </h1>
      {/* lg:p-4 flex flex-col lg:w-[30%] w-[90vw] lg:gap-2 */}
      <form
        onSubmit={updateUserDetails}
        className="flex lg:p-3 p-6 flex-col lg:mx-3 ph:my-5  backdrop-blur-3xl rounded-lg lg:gap-3"
      >
        <div className="flex lg:gap-3 gap-2 flex-col w-full lg:flex-row">
          <div className="flex w-1/2 ph:w-full  gap-1 flex-col mb-4 lg:mb-0">
            <label htmlFor="" className="lg:text-xl gradient-text">
              Your Name
            </label>
            <input
              placeholder="Surya Majhi"
              required
              value={userName}
              onChange={(e) => setUsreName(e.target.value)}
              className=" bg-transparent border-2   px-3 py-1  rounded-full text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base text-sm font-mono mb-1  lg:mb-3"
              type="text"
            />
          </div>
          <div className="flex gap-1 w-1/2 ph:w-full flex-col mb-4 lg:mb-0">
            <label htmlFor="" className="lg:text-xl gradient-text">
              Your Position
            </label>
            <input
              placeholder="Full stack web developer"
              required
              value={userPosition}
              onChange={(e) => setUserPosition(e.target.value)}
              className=" bg-transparent border-2   px-3 py-1  rounded-full text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base text-sm font-mono mb-1  lg:mb-3"
              type="text"
            />
          </div>
        </div>

        <div className="flex ph:flex-col">
          <div className="flex items-center justify-between mb-4 lg:mb-0">
            <label htmlFor="" className="lg:text-xl gradient-text">
              Image:
            </label>
            <input
              onChange={(e) => handleSubmit(e)}
              type="file"
              required
              accept="image"
              className="cursor-pointer"
            />
          </div>
          <img
            src={imageLiveLink? imageLiveLink : myImg }
            alt="profile picture "
            className="rounded-full lg:w-[450px] object-cover h-[200px] w-[200px] ph:mb-5 lg:h-[450px] mx-auto"
          />
        </div>

        <div className="flex gap-1 flex-col mb-4 lg:mb-0">
          <label className="lg:text-xl gradient-text" htmlFor="">
            About Your self
          </label>
          <textarea
            required
            value={userDes}
            onChange={(e) => setUserDes(e.target.value)}
            className=" bg-transparent border-2 lg:px-3 lg:py-1  rounded-lg h-[150px] text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base font-mono text-sm p-3  mb-3"
            placeholder="This is an Portfolio site..."
            name="message"
            id=""
          />
        </div>

        <div className="flex justify-between lg:gap-3 gap-2 flex-col w-full lg:flex-row">
          <div className="flex w-[40%] ph:w-full  gap-1 flex-col ">
            <label htmlFor="" className="lg:text-xl gradient-text">
              Github Link
            </label>
            <input
              required
              value={userGithub}
              onChange={(e) => setUserGithub(e.target.value)}
              placeholder="http://www.github.com"
              className=" bg-transparent border-2   px-3 py-1  rounded-full text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base text-sm font-mono mb-4  lg:mb-3"
              type="url"
            />
          </div>

          <div className="flex w-[40%] ph:w-full gap-1 flex-col ">
            <label htmlFor="" className="lg:text-xl gradient-text">
              LikedIn link
            </label>
            <input
              required
              value={userLinkedin}
              onChange={(e) => setUserLinkedin(e.target.value)}
              placeholder="http://www.exapmple.live.com"
              className=" bg-transparent border-2   px-3 py-1  rounded-full text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base text-sm font-mono mb-4  lg:mb-3"
              type="url"
            />
          </div>
        </div>


         <div className='flex justify-between lg:gap-3 gap-2 flex-col w-full lg:flex-row'>

        <div className="flex gap-1 w-[40%] ph:w-full flex-col ">
          <label htmlFor="" className="lg:text-xl gradient-text">
            Instegram Link
          </label>
          <input
            
            value={userInsta}
            onChange={(e) => setUserInsta(e.target.value)}
            placeholder="http://www.github.com"
            className=" bg-transparent border-2   px-3 py-1  rounded-full text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base text-sm font-mono mb-4  lg:mb-3"
            type="url"
          />
        </div>

        <div className="flex gap-1 w-[40%] ph:w-full flex-col ">
          <label htmlFor="" className="lg:text-xl gradient-text">
            Facebook link
          </label>
          <input
            
            value={userFacebook}
            onChange={(e) => setUserFacebook(e.target.value)}
            placeholder="http://www.exapmple.live.com"
            className=" bg-transparent border-2   px-3 py-1  rounded-full text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base text-sm font-mono mb-4  lg:mb-3"
            type="url"
            />
        </div>
        </div>


             <div className='flex justify-between ph:gap-2 flex-col w-full lg:flex-row'>


        <div className="flex gap-1 w-[40%] ph:w-full flex-col ">
          <label htmlFor="" className="lg:text-xl gradient-text">
            X handle Link
          </label>
          <input
            
            value={userX}
            onChange={(e) => setUserX(e.target.value)}
            placeholder="http://www.github.com"
            className=" bg-transparent border-2   px-3 py-1  rounded-full text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base text-sm font-mono mb-4  lg:mb-3"
            type="url"
            />
        </div>

        <div className="flex gap-1  w-[40%] ph:w-full flex-col ">
          <label htmlFor="" className="lg:text-xl gradient-text">
            YouTube link
          </label>
          <input
            
            value={userYoutube}
            onChange={(e) => setUserYoutube(e.target.value)}
            placeholder="http://www.exapmple.live.com"
            className=" bg-transparent border-2   px-3 py-1  rounded-full text-gray-200 outline-none focus:border-purple-500 focus:pl-6 transition-all duration-100 lg:text-base text-sm font-mono mb-4  lg:mb-3"
            type="url"
            />
        </div>
        </div>

        {/* button */}
        <button type="submit" className="btn mx-auto lg:mt-0 mt-4">
          <span id="front" className="spn">
            Submit
          </span>
          <span id="mid" className="spn"></span>
          <span id="back" className="spn">
            Here
          </span>
        </button>
      </form>
    </div>
  );
}

export default PersonalDetails;
