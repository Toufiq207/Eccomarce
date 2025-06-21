import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import ErrorImage from '../assets/404.png'
import { IoSearchSharp } from 'react-icons/io5'
import Button from '../components/Button'
const Error = () => {
  return (
 
    <section className='pt-40 pb-[140px]'>
      <Container>
        <Image src={ErrorImage}/>
         <p className='text-base text-primary font-dm font-normal  pb-[50px] pt-[49px] w-[644px] '>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
         <div className='w-[643px] border border-[#F0F0F0] relative'>
          <input className='p-5 w-full' type="text" placeholder='Type to search'/>
          <IoSearchSharp className='absolute top-1/2 right-5 -translate-y-1/2' />
         </div>
         <Button className='mt-[76px]' text='Back to home '/>
      </Container>
    </section>
  )
}

export default Error