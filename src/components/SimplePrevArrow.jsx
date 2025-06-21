import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const SimplePrevArrow = ({ className,onClick }) => {
  return (
    <div
      className={`${className} bg-[#979797] w-[64px] h-[64px] rounded-full flex justify-center items-center absolute  
      -translate-y-1/2 top-[45%] z-1`}
      
      onClick={onClick}
    >
      <FaArrowLeft className='text-white' />
    </div>
  )
}

export default SimplePrevArrow