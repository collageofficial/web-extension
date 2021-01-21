import React from 'react'

const Button = ({
    action,
    text,
    textSize,
    bgColor,
    color,
    width,
    height,
    border,
    borderColor,
    borderRadius,
}) => (
    <button
        onClick={action}
        className={`
      bg-${bgColor} 
      text-${color}
      text-${textSize} 
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

// Basic primary color button
// <Button
//   text="Button"
//   color="light"
//   textSize="medium"
//   bgColor="primary"
//   width="20"
//   height="10"
//   borderRadius="small"
// />

// Basic light color button
// <Button
//   text="Button"
//   color="dark"
//   textSize = 'medium'
//   bgColor="light"
//   width="20"
//   height="10"
//   border="2"
//   borderColor="dark"
//   borderRadius="small"
// />

// Basic inverted primary color button
// <Button
//   text="Button"
//   bgColor="light"
//   color="primary"
//   textSize = 'medium'
//   width="20"
//   height="10"
//   border="2"
//   borderColor="primary"
//   borderRadius="small"
// />