import React from 'react'

function PortfolioCard() {
    
  return (
    <div className='hover:scale-110 w-fit duration-300 will-change-transform transition-all delay-100 border-gray-500 hover:border-white'>

    <div 
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
    className='portfolio-card border-2  backdrop-blur-md select-none  rounded-xl text-white lg:p-5 mb-20 mx-auto lg:mx-0 lg:mb-44 px-5 lg:w-[30vw] w-[80vw] shadow-lg '
    >
        <h3 className='lg:text-6xl font-bold text-4xl border-2 border-b-gray-400 border-transparent pb-4'>Portfolio*</h3>
        <h3 className='lg:py-3 py-1 lg:text-3xl  border-2 border-transparent border-b-gray-400'>MERN STACK DEVELOPER</h3>
        <h3 className='lg:py-3 py-1  lg:text-2xl  border-2 border-transparent '>Surya Majhi</h3>
    </div>
        </div>
  )
}

export default PortfolioCard