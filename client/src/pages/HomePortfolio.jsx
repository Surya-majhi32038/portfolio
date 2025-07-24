import React, { useEffect, useState } from "react";
import PortfolioCard from "../componentes/PortfolioCard.jsx";
import HomeCard from "../componentes/HomeCard";
import AboutCard from "../componentes/AboutCard";
import SkillSections from "../componentes/SkillSections";
import ProjectSection from "../componentes/ProjectSection";
import ContactMe from "../componentes/ContactMe";
import { setUserId } from "../redux/slice/userIdSlice.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
function HomePortfolio() {
    // console.log("HomePortfolio Rendered");
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch(); // Initialize the Redux dispatch function
    const userId = useSelector((state) => state.userId.userId); // Get the user ID from the Redux store
 const [data, setData] = useState({
  createdAt: "",
  deletedUrl: "",
  publicUrl: "",
  updatedAt: "",
  userDes: "",
  userFacebook: "",
  userGithub: "",
  userImage: "",
  userInsta: "",
  userLinkedin: "",
  userName: "",
  userPosition: "",
  userX: "",
  userYoutube: "",
  userEmail: "",
  userPhone: "",
  __v: 0,
  _id: ""
});

  const fetchData = async () => {
    // console.log("user id set and then get in home portfolio ", userId);
            try {
                // console.log("Fetching personal details before ");
                // console.time("API call");
                const response = await axios.get(`${import.meta.env.VITE_PORT}/api/get-personal-details/${id}`);
                setIsLoading(false);
                // console.log(response.data.user);
                //  console.timeEnd("API call"); // Shows time in ms
                // console.log("Fetched personal details successfully");
                setData(response.data.user);
                // console.log(data);
            } catch (error) {
                console.error("Error fetching personal details:", error);   
            }
        };
  useEffect(() => {
   // console.log("userId in HomePortfolio", id);
   // localStorage.setItem("userId", JSON.stringify(id)); // Store the user ID in localStorage
     dispatch(setUserId(id));
      fetchData();
          console.log("user id set and then get in home portfolio ", userId);
      AOS.init({
          duration: 1500,
        });
    }, []);
   if(isLoading) {
    return (
        <div className="flex justify-center items-center h-screen">

      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    ); }
    // console.log(data);
  return (
    <div className="lg:w-[80vw] w-[90vw] lg:mt-[200px] mt-20 border-solid mx-auto">
      <PortfolioCard name={data.userName} position={data.userPosition} />
      <HomeCard paragraph={data.userDes} img={data.userImage}/>
      <AboutCard />
      <SkillSections userId={id}/>
      <ProjectSection userId={id}/>
      <ContactMe userEmail={data.userEmail} userPhone={data.userPhone} userFacebook={data.userFacebook} userGithub={data.userGithub} userInsta={data.userInsta} userLinkedin={data.userLinkedin} userX={data.userX} userYoutube={data.userYoutube} />
    </div>
  );
}

export default HomePortfolio;
