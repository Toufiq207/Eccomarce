import React from 'react'

const NavberList = ({text,className}) => {
  return (
    
        
           <ul> <li className={`cursor-pointer text-sm text-primary hover:text-secondary font-normal hover:font-bold font-dm list-none duration-500 ${className}`}>{text}</li>
        </ul>
    
  )
}

export default NavberList