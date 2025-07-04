import React, { useEffect, useState } from 'react'
import Banner from '../layout/Banner'
import Add from '../layout/Add'
import Container from '../components/Container'

import Heading from '../components/Heading'
import Flex from '../components/Flex'

import Bottol from '../assets/bottol.png'
import Product from '../assets/product.png'
import Thala from '../assets/thala.png'
import Bag2 from '../assets/bag2.png'

import Image from '../components/Image'
import Cart from '../components/Cart'





import Promossoin from '../assets/promossoin.png'
import Cap from '../assets/cap.png'
import Table from '../assets/table.png'
import Erephone from '../assets/erephone.png'
import Glass from '../assets/glass.png'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SimpleNextArrow from '../components/SimpleNextArrow'
import SimplePrevArrow from '../components/SimplePrevArrow'
import axios from 'axios'
import { data, Link } from 'react-router-dom'






const Home = () => {
  let [alldata,setAlldata]=useState([])
    var settings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
       nextArrow:<SimpleNextArrow/>,
       prevArrow:<SimplePrevArrow/>
  };
  useEffect(()=>{
async function allData(){
let data=await axios.get("https://dummyjson.com/products")
setAlldata(data.data.products);

}
allData()
  },[])
  
  

  return (
  
      <>
      <Banner/>
      <Add/>
      <Container >
        <Heading className='pb-10' text='New Arrivals'/>
    
            <Slider {...settings}>
              {
                alldata.map(item=>(
    
     
     
      <div>
    <Cart img={item.thumbnail} title={item.title} price={item.price}/>
      </div> 
     ))
              }
      
    
   
   
   
      
    </Slider>
  
  
  
      
      
  
  
    
      </Container>
      <Container >
        <Heading className='pb-10 mt-[118px]' text='Our Bestsellers'/>
        <Flex className='gap-x-[45px]'>
         {
                alldata.map((item,index)=>(
 (     index>4 && index<9) ?
    <Cart img={item.thumbnail} title={item.title} price={item.price}/>
      : ""
                ))
              }
        </Flex>
      </Container>
      <Container>
        <Image className='pb-[128px]'src={Promossoin}/>
      </Container>

      <Container >
 
      <Heading className='pb-10 mt-[118px]' text='Special Offers'/>
        <Flex className='gap-x-[45px]'>
         {
                alldata.map((item,index)=>(
 (     index>9 && index<14) ?
    <Cart img={item.thumbnail} title={item.title} price={item.price}/>
      : ""
                ))
              }
        </Flex>
      </Container>
  
      </>
     
    
  )
}

export default Home