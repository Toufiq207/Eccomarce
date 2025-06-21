import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import NavberList from '../components/NavberList'
import Image from '../components/Image'
import FooterLogo from '../assets/FooterLogo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='bg-[#F5F5F3] py-[55px]'>
        <Container>
            <Flex>
                <div className='w-1/8   '>
                <h6 className='text-base text-secondary font-bold font-dm pb-4'>MENU</h6>
                <ul className='flex flex-col gap-y-[6px]'>
                <NavberList text='Home'/>
                <NavberList text='Shop'/>
                <NavberList text='About'/>
                <NavberList text='Contacts'/>
                <NavberList text='Journal'/>
                </ul>
                </div>
                <div className='w-1/8'>
                <h6 className='text-base text-secondary font-bold font-dm pb-4'>SHOP</h6>
                <ul className='flex flex-col gap-y-[6px]'>
                <NavberList text='Category 1'/>
                <NavberList text='Category 2'/>
                <NavberList text='Category 3'/>
                <NavberList text='Category 4'/>
                <NavberList text='Category 5'/>
                </ul>
                </div>
                <div className='w-1/8'>
                <h6 className='text-base text-secondary font-bold font-dm pb-4'>HELP</h6>
                <ul className='flex flex-col gap-y-[6px]'>
                <NavberList text='Privacy Policy'/>
                <NavberList text='Terms & Conditions'/>
                <NavberList text='Special E-shop'/>
                <NavberList text='Shipping'/>
                <NavberList text='Secure Payments'/>
                </ul>
                </div>
                <div className='w-2/8'>
                <h6 className='text-base text-secondary font-bold font-dm pb-4 '>(052) 611-5711</h6>
                <h6 className='text-base text-secondary font-bold font-dm pb-4'>company@domain.com</h6>
                <ul className='flex flex-col gap-y-[6px]'>
                <NavberList text='575 Crescent Ave. Quakertown, PA 18951 '/>
              
                </ul>
                </div>
                <div className='w-3/8'>
                <Image  src={FooterLogo}/>
                </div>
            </Flex>
            <Flex className='gap-x-[910px] py-16'>
<div className='flex gap-x-[25px]'>
<FaFacebookF />
<FaLinkedinIn />
<FaInstagram />
</div>
<div >
    <p className='text-sm text-[#6D6D6D] font-normal font-dm'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
</div>
            </Flex>
        </Container>
    </footer>
  )
}

export default Footer