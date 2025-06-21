import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const SimpleNextArrow = ({ className,  onClick }) => {
  return (
    <div
      className={`${className} w-[64px] h-[64px] bg-[#979797] flex justify-center items-center rounded-full absolute top-[45%] right-0 -translate-y-1/2`}
      onClick={onClick}
    >
        <FaArrowRight className='text-white' />
    </div>
  )
}

export default SimpleNextArrow