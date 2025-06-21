import React from 'react'
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
import Blendere from '../assets/blendere.png'
import Watch from '../assets/watch.jpg'
import Jhuri from '../assets/jhuri.png'
import Bag from '../assets/bag.png'



import Promossoin from '../assets/promossoin.png'
import Cap from '../assets/cap.png'
import Table from '../assets/table.png'
import Erephone from '../assets/erephone.png'
import Glass from '../assets/glass.png'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SimpleNextArrow from '../components/SimpleNextArrow'
import SimplePrevArrow from '../components/SimplePrevArrow'






const Home = () => {
    var settings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
       nextArrow:<SimpleNextArrow/>,
       prevArrow:<SimplePrevArrow/>
  };

  return (
  
      <>
      <Banner/>
      <Add/>
      <Container >
        <Heading className='pb-10' text='New Arrivals'/>
    
            <Slider {...settings}>
      
      <div>
    <Cart img={Blendere} title="Product one" price="20"/>
      </div>
   
   <div>
    <Cart img={Watch} title="Product two" price="15"/>
      </div>
      <div>
    <Cart img={Jhuri} title="Product three" price="22"/>
      </div>



<div>
    <Cart img={Bag} title="Product four" price="21"/>
      </div>
      <div>
    <Cart img={Bottol} title="Product five" price="30"/>
      </div>
      <div>
    <Cart img={Product} title="Product six" price="24"/>
      </div>
      <div>
    <Cart img={Bag2} title="Product seven" price="23"/>
      </div>
      <div>
    <Cart img={Thala} title="Product eight" price="31"/>
      </div>
      
   
      
    </Slider>
  
  
  
      
      
  
  
    
      </Container>
      <Container >
        <Heading className='pb-10 mt-[118px]' text='Our Bestsellers'/>
        <Flex className='justify-between mb-[130px]'>
        <Cart img={Bottol}/>
        <Cart img={Product}/>
        <Cart img={Thala}/>
        <Cart img={Bag2}/>
        
        
        </Flex>
      </Container>
      <Container>
        <Image className='pb-[128px]'src={Promossoin}/>
      </Container>

      <Container >
 
      <Heading className='pb-10 mt-[118px]' text='Special Offers'/>
        <Flex className='justify-between mb-[130px]'>
        <Cart img={Cap}/>
        <Cart img={Table}/>
        <Cart img={Erephone}/>
        <Cart img={Glass}/>
        
        
        </Flex>
      </Container>
  
      </>
     
    
  )
}

export default Home