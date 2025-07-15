import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import SideberIcon from '../assets/Sideber.png'
import Searce from '../assets/Searceicon.png'
import {  FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { ImCross } from 'react-icons/im'
import {  useDispatch, useSelector } from 'react-redux'
import { decre, incre, remove } from '../slices/AddToCardSlice'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'



const Sideber = () => {
  let dispatch=useDispatch()
  let [show,setShow]=useState(false)
  let [total,setTotal]=useState(0)
  
    let [alldata,setAlldata]=useState([])
    let [search,setSearch]=useState([])
    let [input,setInput]=useState('')
  let data=useSelector((state)=>state.addToCard.value)
  

 let handleIncrement=(item)=>{
  // console.log("Increment");
  dispatch(incre(item))
 }

 
 let handleDecrement=(item)=>{
  // console.log("Decrement");
   dispatch(decre(item))
 }
 let handleRemove=(item)=>{
   dispatch( remove(item))
  
 }
 useEffect(()=>{
  let total=0
  data.map(item=>{
     total+= item.price*item.quantity;
  
    
  })
   setTotal(total);
 },[data])





   useEffect(()=>{
async function allData(){
let data=await axios.get("https://dummyjson.com/products")
setAlldata(data.data.products);



}
allData()
  },[])
  
  




 let handlechange=(e)=>{


setInput(e.target.value)

  alldata.filter(item=>{
    let search=alldata.filter(item=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    
   setSearch(search);
    
  })
  
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
                <input onChange={handlechange} className='bg-white py-4 pl-6 pr-16 w-full placeholder:text-[#C4C4C4] placeholder:text-sm placeholder:font-normal' type="text" placeholder='Search Products....'/>
                 <div   >  
                <Image className='absolute top-1/2 right-6 -translate-1/2' src={Searce}/>
                  </div>
                  {
                    search.length>0 &&
                    input.length>0 &&
                    <div className='w-full bg-white py-[40px] mt-2 pl-4 absolute shadow-2xl'>
                    {
                      // alldata.map(item=>(
                      //   <p>{item.title}</p>
                      // ))
                      search.map(item=>(
                       <Link to='/shop{}'><p className='cursor-pointer'>{item.title}-{item.price}=={item.id}</p></Link>
                      ))
                    }
                  </div>
                  }
                </div>
                <div className='w-4/12 flex justify-end'>
              
                <FaUser />
                <IoMdArrowDropdown className='mr-10 ml-2.5'/>
                <FaShoppingCart onClick={()=>setShow(!show)}/>
                
                </div>
                
                
            </Flex>
            {
              show ?<div className='w-1/3 h-screen bg-primary  absolute top-0 right-0 z-[99999]'>
                 <ImCross className='my-4 mx-6' onClick={()=>setShow(!show)}/>
                    <ul className='flex justify-between items-center px-5 py-3  border border-white mb-3 text-xl font-semibold'>
                      
                      <li>Action</li>
                      <li>Product</li>
                      <li>Picture</li>
                      <li>Price</li>
                      <li>Quantity</li>
                      <li>Subtotal</li>
                    </ul>
                {
                  data.length>0 ?    
                     <>{
                      data.map(item=>(
                      <ul className='flex justify-between items-center px-5 py-3 border border-white mb-3 cursor-pointer'>
                        <li onClick={()=>handleRemove(item)}><ImCross className='text-xs ml-6'/></li>
                        <li>{item.title.substring(0,14)}....</li>
                        {/* <li><Image className='w-[50px] rounded-full' src={item.img}/></li> */}
                      <li >
                        
                        ${Math.round(item.price)}
                        
                      </li>
                        <li className='border border-white py-2 px-8 flex gap-x-3'>
                          <span onClick={()=>handleDecrement(item)}>-</span>
                           <span>{item.quantity}</span>
                          
                          <span onClick={()=>handleIncrement(item)}>+</span>
                          </li>
                      
                      <li >${Math.round(item.price*item.quantity)}</li>
                      
          
                      </ul >
                      
                      )
                
                      )
                    }
                          <div className='flex gap-x-5 justify-center pt-20'>
                          <Link to="card">  <Button text='View Cart'/></Link>
                           <Link to="cheakout"> <Button text='Cheakout'/></Link>
                          </div>
                     </>
                    
                    :
                    <h1 className='text-4xl font-dm font-bold text-center pt-[200px]'>Card is Emty</h1>

                }
                  <div className='text-2xl font-dm font-bold  absolute right-6 bottom-6'>Total:{Math.round(total)}</div>
                
              </div>:""

            }
        </Container>
    </section>
  )
}

export default Sideber