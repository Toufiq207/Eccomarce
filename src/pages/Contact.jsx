import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Heading from '../components/Heading'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Contact = () => {
  let data=useSelector((state)=>state.bread.prvevalue
)
  let data2=useSelector((state)=>state.bread.daybefore
)
  return (
  <section className='py-[140px]'>
    <Container>
         <Heading text='Contact'/>
      <p><Link to={data=="Home"?"/":`/${data}`}>{data} </Link>>  Contact</p>
      <h2 className='text-secondary text-[39px] font-dm font-bold pb-10 pt-[136px]'>Fill up a Form</h2>
      <label className='text-secondary text-base font-dm font-bold ' htmlFor="name">Name <br />
        <input className='border-b border-[#F0F0F0] w-[49%] py-4 mb-6' id='name' type="text" placeholder='Your name here' />
      </label>
      <br />
      <label className='text-secondary text-base font-dm font-bold ' htmlFor="email">Email
        <br />
        <input className='border-b border-[#F0F0F0] w-[49%] py-4 mb-6' id='email' type="text" placeholder='Your email here' />
      </label>
      <br />
      <label className='text-secondary text-base font-dm font-bold ' htmlFor="message">Message
         <br />
        <textarea className='border-b border-[#F0F0F0] w-[49%] py-4 ' id='message' type="text" placeholder='Your message here' />
      </label>
      <br />
      <Button className='mt-7 mb-[140px]' text='Post'/>
      <iframe className='w-full h-[570px]'src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3045.222153577313!2d90.40079301727897!3d23.869550946817952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sbn!2sbd!4v1746892508381!5m2!1sbn!2sbd"></iframe>
    </Container>
  </section>
  )
}

export default Contact