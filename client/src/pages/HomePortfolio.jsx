import React, { useEffect, useState } from "react";
import PortfolioCard from "../componentes/PortfolioCard.jsx";
import HomeCard from "../componentes/HomeCard";
import AboutCard from "../componentes/AboutCard";
import SkillSections from "../componentes/SkillSections";
import ProjectSection from "../componentes/ProjectSection";
import ContactMe from "../componentes/ContactMe";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import axios from "axios";
function HomePortfolio() {
  const { id } = useParams();
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
    console.log('inside fetchData');
            const userId = localStorage.getItem("userId");
            // console.log("userId in homeportfolio", userId);
            try {
                const response = await axios.get(`${import.meta.env.VITE_PORT}/api/get-personal-details/${userId}`);
                // console.log(response.data.user);
                setData(response.data.user);
                // console.log(data);
            } catch (error) {
                console.error("Error fetching personal details:", error);   
            }
        };
  useEffect(() => {
      localStorage.setItem("userId", id);
      fetchData();
      AOS.init({
          duration: 1500,
        });
    }, []);
   
    // console.log(data);
  return (
    <div className="lg:w-[80vw] w-[90vw] lg:mt-[200px] mt-20 border-solid mx-auto">
      <PortfolioCard name={data.userName} position={data.userPosition} />
      <HomeCard paragraph={data.userDes} img={data.userImage}/>
      <AboutCard />
      <SkillSections />
      <ProjectSection />
      <ContactMe userEmail={data.userEmail} userPhone={data.userPhone} userFacebook={data.userFacebook} userGithub={data.userGithub} userInsta={data.userInsta} userLinkedin={data.userLinkedin} userX={data.userX} userYoutube={data.userYoutube} />
    </div>
  );
}

export default HomePortfolio;
