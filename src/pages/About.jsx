import React from 'react'
import Container from '../components/Container'

import Image from '../components/Image'
import Blendere from '../assets/blendere.png'
import Balti from '../assets/Balti.png'
import Flex from '../components/Flex'
import Button from '../components/Button'
import AboutCard from '../components/AboutCard'
import Heading from '../components/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const About = () => {
let data=useSelector((state)=>state.bread.prvevalue
)
let data2=useSelector((state)=>state.bread.daybefore
)

console.log(data);

  return (
    
    
  
   <section className='py-[140px] '>
    
    <Container>
      <Heading text='About'/>
        <p><Link to={data=="Home"?"/":`/${data}`}>{data} </Link>> About</p>
      
      <Flex className='pb-[128px] pt-[136px]'>
 <div className="w-1/2 relative">  
 <Image className='w-[98%]' src={Blendere}/>
 <Button className='absolute bottom-10 left-1/2 -translate-x-1/2' text='Our Brands '/>
 </div>
      <div className="w-1/2 relative"> 
      <Image className='w-[98%] ml-auto' src={Balti}/>
      <Button className='absolute bottom-10 left-1/2 -translate-x-1/2' text='Our Stores '/>
      </div>



      </Flex>
     
      <p className='text-f39 text-secondary font-dm font-normal'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
       
  <Flex className='justify-between pt-[128px]'>
    <AboutCard text='Our Vision' pra='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.'/>
    <AboutCard text='Our Story' pra='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.'/>
    <AboutCard text='Our Brand' pra='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley.'/>
  </Flex>
  
    </Container>
   </section>
  )
}

export default About