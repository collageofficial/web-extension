import React from 'react'

// special classeName defined in App.css

const Button = ({
    action,
    special,
    text,
    textSize,
    textWeight,
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
          ${special}
          font-main
          font-${textWeight}
          text-center
          align-middle
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
// Basic button width 80px, height 40px translated in tailwind "numbers"
// Basic primary color button
{/* <Button
    text="Button"
    color="light"
    textSize="medium"
    textWeight="normal"
    bgColor="primary"
    width="20"
    height="10"
    borderRadius="small"
/> */}


// Basic light color button
{/* <Button
    text="Button"
    color="dark"
    textSize="medium"
    textWeight="normal"
    bgColor="light"
    width="20"
    height="10"
    border="2"
    borderColor="dark"
    borderRadius="small"
/> */}


// Basic inverted primary color button
{/* <Button
    text="Button"
    color="primary"
    textSize="medium"
    textWeight="normal"
    bgColor="light"
    width="20"
    height="10"
    border="2"
    borderColor="primary"
    borderRadius="small"
/> */}


//  Plus sign no border 20px
{
    /* <Button special="plus-btn" width="5" height="5" borderRadius="full" /> */
}

// Plus sign border 20 px
{/* <Button
    special="plus-btn-border"
    width="5"
    height="5"
    border="2"
    borderRadius="full"
/> */}



// Plus sign no border 32px
{/* <Button special="plus-btn" width="8" height="8" borderRadius="full" /> */}


