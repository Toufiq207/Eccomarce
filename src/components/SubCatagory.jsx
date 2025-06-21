import React from 'react'
import Flex from './Flex'
import { FaPlus } from 'react-icons/fa'

const SubCatagory = ({subText}) => {
  return (
      <Flex className='text-red-400 pl-6 justify-between items-center border-b border-[#F0F0F0] py-5'>
        <p className='text-base  font-dm font-normal'>{subText}</p>
        <FaPlus  className='text-base  font-dm font-normal'/>
       </Flex>
  )
}

export default SubCatagory