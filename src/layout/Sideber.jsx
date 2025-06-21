import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import SideberIcon from '../assets/Sideber.png'
import Searce from '../assets/Searceicon.png'
import {  FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { ImCross } from 'react-icons/im'
import {  useDispatch, useSelector } from 'react-redux'
import { decre, incre } from '../slices/AddToCardSlice'



const Sideber = () => {
  let dispatch=useDispatch()
  let [show,setShow]=useState(false)
  let data=useSelector((state)=>state.addToCard.value)
 let handleIncrement=(item)=>{
  // console.log("Increment");
  dispatch(incre(item))
 }

 
 let handleDecrement=(item)=>{
  // console.log("Decrement");
   dispatch(decre(item))
 }

 
  return (
    <section className='bg-[#F5F5F3] py-6'>
        <Container>
            <Flex className='items-center'>
                <div className='w-4/12 flex gap-x-[10px] items-center '>
                <Image src={SideberIcon}/>
                <p className='text-[14px] text-[#262626] font-normal font-dm'>Shop by Category</p>
                </div>
                <div className='w-8/12 relative'>
                <input className='bg-white py-4 pl-6 pr-16 w-full placeholder:text-[#C4C4C4] placeholder:text-sm placeholder:font-normal' type="text" placeholder='Search Products....'/>
                <Image className='absolute top-1/2 right-6 -translate-1/2' src={Searce}/>

                </div>
                <div className='w-4/12 flex justify-end'>
              
                <FaUser />
                <IoMdArrowDropdown className='mr-10 ml-2.5'/>
                <FaShoppingCart onClick={()=>setShow(!show)}/>
                
                </div>
                
                
            </Flex>
            {
              show ?<div className='w-1/3 h-screen bg-primary  absolute top-0 right-0 z-[99999]'>
                 <ImCross onClick={()=>setShow(!show)}/>
                    <ul className='flex justify-between items-center px-5 pb-3 border border-white mb-3 border-[5px]'>
                      <li>Product</li>
                      <li>Picture</li>
                      <li>Price</li>
                      <li>Quantity</li>
                      <li>Subtotal</li>
                    </ul>
                    {
                      data.map(item=>(
                      <ul className='flex justify-between items-center px-5 py-3 border border-white mb-3 cursor-pointer'>
                        <li>{item.title}</li>
                        <li><Image className='w-[50px] rounded-full' src={item.img}/></li>
                      <li >
                        
                        ${item.price}
                        
                      </li>
                        <li className='border border-white py-2 px-8 flex gap-x-3'>
                          <span onClick={()=>handleDecrement(item)}>-</span>
                           <span>{item.quantity}</span>
                          
                          <span onClick={()=>handleIncrement(item)}>+</span>
                          </li>
                      
                      <li >${item.price*item.quantity}</li>
                      
          
                      </ul >
                      )

                      )
                    }
                  
              </div>:""

            }
        </Container>
    </section>
  )
}

export default Sideber