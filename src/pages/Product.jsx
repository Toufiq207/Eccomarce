import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Balti from '../assets/Balti.png'
import Glass from '../assets/Image_2.png'
import Erephone from '../assets/Image_3.png'

import Table from '../assets/Image_4.png'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import { FaStar } from 'react-icons/fa'
import Button from '../components/Button'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
   let [alldata,setAlldata]=useState([])
   let [product,setProduct]=useState([])
  let singleProduct=useParams()


   useEffect(()=>{
  async function allData(){
  let data=await axios.get("https://dummyjson.com/products")
  setAlldata(data.data.products);
  
  }
  allData()
    },[])
   useEffect(()=>{
  window.scrollTo({top:0})
  
    },[])




// console.log(product);



  
  return (
   
    <section className='py-[150px]'>
      <Container>
 
 {
     alldata.map(item=>{
  
    if(item.title==singleProduct.title){
    return(
      <>
      <Image src={item.thumbnail}/>
     
            <Heading className='pt-12 pb-4' text={item.title}/>
      <Flex className='gap-x-6 items-center'>
        <ul className='flex gap-x-[2px]'>
          <li ><FaStar className='text-[#FFD881] text-sm'/></li>
          <li ><FaStar className='text-[#FFD881] text-sm'/></li>
          <li ><FaStar className='text-[#FFD881] text-sm'/></li>
          <li ><FaStar className='text-[#FFD881] text-sm'/></li>
          <li ><FaStar className='text-[#FFD881] text-sm'/></li>
        </ul>
        <p className='text-sm text-primary font-normal font-dm'>1 Review</p>
      </Flex>
      <Flex  className=' items-center py-6 gap-x-[22px] border-b border-[#F0F0F0] w-w48'>
        <del className=' text-primary '><p className='text-base text-primary font-normal font-dm'>$88.00</p></del>
        
        
  
        
        <p className='text-xl text-secondary font-bold font-dm'>{item.price}</p>
      </Flex>
      <Flex className='items-center gap-x-[53px] pt-[33px]'>
    
        <p className='text-base text-secondary font-dm font-bold'>COLOR:</p>

<ul className='flex gap-x-[15px]'>
  <li className='w-[20px] h-[20px] rounded-full hover:scale-[1.5] duration-500 bg-[#979797]  hover:bg-[#FF8686]'></li>
  <li className='w-[20px] h-[20px] rounded-full hover:scale-[1.5] duration-500 bg-[#FF8686]  hover:bg-[#FF8686]'></li>
 
  <li className='w-[20px] h-[20px] rounded-full hover:scale-[1.5] duration-500 bg-[#7ED321]  hover:bg-[#FF8686]'></li>
  <li className='w-[20px] h-[20px] rounded-full hover:scale-[1.5] duration-500 bg-[#B6B6B6]  hover:bg-[#FF8686]'></li>
  <li className='w-[20px] h-[20px] rounded-full hover:scale-[1.5] duration-500 bg-[#15CBA5]  hover:bg-[#FF8686]'></li>
</ul>


      </Flex>
      <Flex className='items-center gap-x-[80px] pt-[33px] border-b border-[#F0F0F0] w-w48 pb-[30px]'>
    
        <p className='text-base text-secondary font-dm font-bold'>SIZE:</p>
<select className='border  border-[#F0F0F0] py-2 px-12'>
  <option value="">S</option>
  <option value="">M</option>
  <option value="">L</option>
  <option value="">XL</option>
</select>


      </Flex>
      <Flex className='items-center gap-x-[33px] pt-[33px] border-b border-[#F0F0F0] w-w48 pb-[30px]'>
    
        <p className='text-base text-secondary font-dm font-bold'>QUANTITY:</p>
<div className='border  border-primary py-2 px-8 flex gap-x-5'>
  <span>-</span>
  <span>1</span>
  <span>+</span>
</div>


      </Flex>
      <Flex className='items-center gap-x-[33px] py-[33px] border-b border-[#F0F0F0] w-w48 pb-[30px]'>
    
        <p className='text-base text-secondary font-dm font-bold'>STATUS:</p>
        <p className='text-base text-secondary font-dm font-normal'>In stock</p>




      </Flex>
<Flex className='gap-x-[20px] pt-[30px] pb-[55px] border-b border-[#F0F0F0] w-w48 pb-[30px] '>
<Button text='Add to Wish List'/>
<Button text='Add to Cart'/>
</Flex>
<Flex className='gap-x-[20px] pt-[30px] pb-[55px] border-b border-[#F0F0F0] w-w48 pb-[30px] justify-between'>
<p className='text-base text-secondary font-dm font-normal'>FEATURES & DETAILS</p>
<span className='text-lg text-secondary font-bold'>+</span>
</Flex>
<Flex className='gap-x-[20px] pt-[30px] pb-[55px] border-b border-[#F0F0F0] w-w48 pb-[30px] justify-between'>
<p className='text-base text-secondary font-dm font-normal'>SHIPPING & RETURNS</p>
<span className='text-lg text-secondary font-bold'>+</span>
</Flex>
<div className=' w-w48 py-8'>
<p className='text-base text-primary font-dm font-normal'>{item.description}</p>
</div>

<Flex className='gap-x-[62px] pt-[30px] pb-[55px]  pb-[30px] '>
<p className='text-xl text-primary font-dm font-normal'>Description</p>
<p className='text-xl text-secondary font-dm font-bold'>Reviews (1)</p>


</Flex>
<p className='text-base text-primary font-dm font-normal border-b border-[#F0F0F0] w-full'>1 review for Product</p>


<Flex className='justify-between items-center pt-6'>
  <Flex className='gap-x-[37px] items-center'>
  <p className='text-sm text-secondary font-normal font-dm'>John Ford</p>
        <ul className='flex gap-x-[2px]'>
          <li ><FaStar className='text-[#FFD881] text-sm'/></li>
          <li ><FaStar className='text-[#FFD881] text-sm'/></li>
          <li ><FaStar className='text-[#FFD881] text-sm'/></li>
          <li ><FaStar className='text-[#FFD881] text-sm'/></li>
          <li ><FaStar className='text-[#FFD881] text-sm'/></li>
        </ul>
  </Flex>

        <p className='text-sm text-primary font-normal font-dm'>6 months ago</p>
      </Flex>


      <p className='text-base text-primary font-dm font-normal border-b border-[#F0F0F0] w-full pt-[14px] pb-[10px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      <h4 className='text-xl text-secondary  font-dm font-bold py-12'>Add a Review</h4>
      <label className='text-base text-secondary font-dm font-bold ' htmlFor="name">Name <br />
        <input className='mb-6 py-6 w-w48 border-b border-[#F0F0F0] ' id='name' type="text" placeholder='Your name here' />
      </label>
      <br />
      <label className='text-base text-secondary font-dm font-bold t-6' htmlFor="email">Email <br />
        <input className='mb-6 py-6 w-w48 border-b border-[#F0F0F0] ' id='email' type="text" placeholder='Your email here' />
      </label>
      <br />
      <label className='text-base text-secondary font-dm font-bold t-6' htmlFor="review">Review <br />
        <textarea className='mb-6 py-6 w-w48 border-b border-[#F0F0F0] ' id='review' type="text" placeholder='Your review here' />
      </label>
      <br />
    <Button text='Post'/>
     
      
      </>
    )
      
    }

    
   })
 }

 











        </Container>
    </section>
  )
}

export default Product