import React from 'react'

function PortfolioCard() {
    
  return (
    <div 
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
        className='portfolio-card border-2 hover:scale-110 will-change-transform transition-all delay-100 hover:border-white backdrop-blur-md select-none border-gray-500 rounded-xl text-white lg:p-5 mb-20 lg:mb-36 px-5 lg:w-[30vw] w-[80vw] shadow-lg duration-300'
    >
        <h3 className='lg:text-6xl font-bold text-4xl border-2 border-b-gray-400 border-transparent pb-4'>Portfolio*</h3>
        <h3 className='lg:py-3 py-1 lg:text-2xl  border-2 border-transparent border-b-gray-400'>mern stack developer</h3>
        <h3 className='lg:py-3 py-1  lg:text-2xl  border-2 border-transparent '>surya majhi</h3>
    </div>
  )
}

export default PortfolioCard