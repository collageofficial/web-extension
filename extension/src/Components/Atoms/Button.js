import React from 'react'

const Button = ({
    text,
    bgColor,
    color,
    width,
    height,
    border,
    borderColor,
    borderRadius,
}) => (
    <button
        className={`
      bg-${bgColor} 
      text-${color} 
      w-${width} 
      h-${height} 
      border-${border} 
      border-${borderColor} 
      rounded-${borderRadius}
      hover:bg-${color}
      hover:text-${bgColor}
      transition duration-500
      focus:outline-none
      active:outline-none
    `}
    >
        {text}
    </button>
)

export default Button
