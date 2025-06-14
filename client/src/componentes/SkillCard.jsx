import React from 'react'

function SkillCard() {
  return (
    <div className='flex items-center rounded-xl lg:py-4 py-1 mb-2 lg:mb-3 justify-between border-2 px-2 lg:px-4 backdrop-blur-lg'>
        <h3 className='lg:text-2xl text-base text-gray-200 font-bold'>ReactJs</h3>
        <progress max="100" value="80" className=' prograss-bar'/>
    </div>
  )
}

export default SkillCard