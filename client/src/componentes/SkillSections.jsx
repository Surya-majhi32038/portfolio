import React from 'react'
import SkillCard from './SkillCard'

function SkillSections() {
  return (
    <div  data-aos="fade-right" className='mb-20 lg:mb-36'>
        <h3 className='gradient-text mb-5 lg:mb-10 text-3xl lg:text-6xl font-bold'>My Skill</h3>
        <div className='lg:h-[300px] h-[200px] overflow-y-scroll scroll-bar px-1 lg:px-1'>

        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
        </div>
    </div>
  )
}

export default SkillSections