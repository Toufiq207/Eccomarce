import React from 'react'
import Image from '../components/Image'
import BannerOne from '../assets/BannerOne.jpg'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Two from '../assets/two.png'
import Car from '../assets/car.png'
import Refresh from '../assets/refresh.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className='border-b border-[#F0F0F0]'>


        <Link to='/contact'><Image className='w-full' src={BannerOne}/></Link>
    <Container>
      <Flex className='py-[30px] justify-between'>
        <div className='flex items-center gap-x-[16px]'><Image src={Two}/>
        <p className='text-base text-[#6D6D6D] font-dm font-normal'>Two years warranty</p></div>
        <div className='flex items-center gap-x-[16px]'><Image src={Car}/>
        <p className='text-base text-[#6D6D6D] font-dm font-normal'>Free shipping</p></div>
        <div className='flex items-center gap-x-[16px]'><Image src={Refresh}/>
        <p className='text-base text-[#6D6D6D] font-dm font-normal'>Return policy in 30 days</p></div>
      </Flex>
    </Container>
  </section>
  )
}

export default Banner