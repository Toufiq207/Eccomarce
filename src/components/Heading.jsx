import React from 'react'

const Heading = ({text,className}) => {
  return (
    <div className={`text-f39 text-secondary font-dm font-bold ${className}`}>{text}</div>
  )
}

export default Heading