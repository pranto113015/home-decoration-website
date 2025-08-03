import React from 'react'
import btnIcon from '../assets/button-icon.png'

const Button = () => {
  return (
  
        <button className='text-sm text-primary  flex items-center gap-1'>
          More Info
          <img src={btnIcon} alt="button_icon" />
        </button>
  )
}

export default Button
