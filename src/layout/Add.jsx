import React from 'react'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Ad1 from '../assets/Ad_1.jpg'
import Ad2 from '../assets/Ad_2.jpg'
import Ad3 from '../assets/Ad_3.jpg'
import Container from '../components/Container'

const Add = () => {
  return (
    <section className='pt-[140px] pb-[128px]'>
     <Container>
     <Flex className='justify-between'>
        <div >
          <Image src={Ad1}/>
        </div>
        <div >
          <div className='pb-[40px]'><Image src={Ad2}/></div>
          <div><Image src={Ad3}/></div>
        </div>
      </Flex>
     </Container>
    </section>
  )
}

export default Add