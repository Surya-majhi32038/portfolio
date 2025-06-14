import React, { useEffect } from 'react'
import PortfolioCard from '../componentes/portfolioCard'
import HomeCard from '../componentes/HomeCard'
import AboutCard from '../componentes/AboutCard'
import SkillSections from '../componentes/SkillSections'
import ProjectSection from '../componentes/ProjectSection'
import ContactMe from '../componentes/ContactMe'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Home() {
    useEffect(() => {
     AOS.init({
        duration:1500
     })
    },[])
    
  return (
    <div className='lg:w-[80vw] w-[90vw] lg:mt-[200px] mt-20   border-solid mx-auto'>
        <PortfolioCard />
        <HomeCard />
        <AboutCard/>
        <SkillSections/>
        <ProjectSection/>
        <ContactMe/>
    </div>
  )
}

export default Home