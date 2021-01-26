import React from 'react'
import Button from '../Atoms/Button'

const DropDownMenu = () => {
    return (
        <div className="border-2 
        border-dark 
        rounded-small">            
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
            <Button
                text="Button"
                color="light"
                textSize="medium"
                textWeight="normal"
                bgColor="primary"
                width="20"
                height="10"
               
            />
        </div>
    )
}

export default DropDownMenu
