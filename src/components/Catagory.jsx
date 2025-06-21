import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Flex from './Flex'
import { useDispatch, useSelector } from 'react-redux'
import { catagoryFuntion } from '../slices/CatagorySlice'
const Catagory = ({text, type}) => {
  console.log(type);
  
  let dispatch=useDispatch()
      
      let catagory=useSelector((state)=>state.catagory.value)
let handleMinus=()=>{
  
  dispatch( catagoryFuntion(false))
}
let handlePlus=()=>{
  
  dispatch( catagoryFuntion(true))
}
  return (
    <div>
        <Flex className='justify-between items-center border-b border-[#F0F0F0] py-5'>

    <p className='text-base text-primary font-dm font-normal'>{text}</p>
    
  
  
 {
  type=="true" ?
     catagory ? <FaMinus onClick={handleMinus} className='text-base text-primary font-dm font-normal'/>:<FaPlus onClick={handlePlus}  className='text-base text-primary font-dm font-normal'/>
:""
 }
    </Flex>
    </div>
  )
}

export default Catagory