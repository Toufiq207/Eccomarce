import React from 'react'

const AboutCard = ({text,pra}) => {
  return (
    <div>
<h4 className='text-[25px] text-secondary font-dm font-bold pb-3'>{text}</h4>
<p className='text-base text-primary font-dm font-normal w-[506px]'>{pra}</p>
    </div>
  )
}

export default AboutCard