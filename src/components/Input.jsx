import React from 'react'

const Input = ({text,input}) => {
  return (
    <label htmlFor="">{text}
    <input type="text" placeholder='{input}' />
  </label>
  )
}

export default Input