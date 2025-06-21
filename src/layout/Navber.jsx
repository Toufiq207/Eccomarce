import React from 'react'

import Container from '../components/Container'
import NavberList from '../components/NavberList'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/OREBI©.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { activebutton } from '../slices/Breadcrumb'
const Navber = () => {
  let dispatch=useDispatch()
  let handleclick =(name)=>{
    dispatch(activebutton(name))
    
  }
  return (
    <nav className='py-8'>
        <Container>
            <Flex>
            <div className='w-5/12'>
            <Link to=""> <Image src={Logo}/></Link> 
            </div>
            <div className='w-7/12 flex gap-x-[39px] '>
           <Link onClick={()=>handleclick("Home")} to=""><NavberList text='Home'/></Link> 
           <Link onClick={()=>handleclick("Shop")} to="shop"> <NavberList text='Shop'/></Link> 
           <Link onClick={()=>handleclick("About")} to='about'> <NavberList text='About'/></Link> 
           <Link onClick={()=>handleclick("Contact")} to='contact' > <NavberList text='Contacts'/></Link> 
           <Link onClick={()=>handleclick("Journal")} to='journal'> <NavberList text='Journal'/></Link> 
            
           
           
           
            
            </div>
            </Flex>
           

        </Container>
      
    </nav>
     
    
  )
}

export default Navber