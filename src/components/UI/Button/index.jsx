import React from 'react';

import './button.css';

const Button = ({children}) => {
  return (
    <button className='Button'>{children}</button>
  )
}

export default Button