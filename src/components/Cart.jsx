import React from 'react'
import Image from '../components/Image'
import Flex from '../components/Flex'

import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { addToCard } from '../slices/AddToCardSlice';
import { Link } from 'react-router-dom';

const Cart = ({img ,title,price}) => {
let dispatch=useDispatch()
let handleAddtocart=()=>{
  
  dispatch(addToCard({
title:title,
img:img,
price:price,
quantity: 1
  }))
}








  return (
    <div className='w-[370px] relative group'>
       
       <div className='w-full '>
       <Image className='w-full' src={img}/>
       </div>
       <div className='w-full  bg-white absolute -bottom-0 left-0 group-hover:bottom-[92px] left-0 duration-500 opacity-0 group-hover:opacity-100'>
   
       
        <ul className='flex flex-col items-end py-6 px-8 gap-y-4 cursor-pointer'>
            <li className='text-[#767676] hover:text-[#262626] text-[16px] font-normal hover:font-bold font-dm'>Add to Wish List <FaHeart className='inline text-sm ml-4 '/></li>
         
            <li className='text-[#767676] hover:text-[#262626] text-[16px] font-normal hover:font-bold font-dm'>Compare <FaCodeCompare className='inline text-sm ml-4 ' /></li>
            <li className='text-[#767676] hover:text-[#262626] text-[16px] font-normal hover:font-bold font-dm' onClick={handleAddtocart}>Add to Cart <FaShoppingCart className='inline text-sm ml-4 ' /></li>
        </ul>
       </div>
        <Link to={`/product/${title}`} >
      <Flex className='justify-between items-center pt-6 pb-4'>
        {/* <h4 className='text-xl text-secondary font-bold font-dm'>Basic Crew Neck Tee</h4>
        <p className='text-base text-primary font-normal font-dm'>$44.00</p> */}
        <h4 className='text-xl text-secondary font-bold font-dm'>{title}</h4>
        <p className='text-base text-primary font-normal font-dm'>${price}</p>
        </Flex>
              
     </Link> 
     <p className='text-base text-primary font-normal font-dm'>Black</p>
     <button className='py-2 px-8 bg-black text-white text-sm font-bold font-dm absolute top-5 left-5'>New</button>
       
    </div>
  )
}

export default Cart