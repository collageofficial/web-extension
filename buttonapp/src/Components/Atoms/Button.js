import React from 'react'
import { TiPlus } from 'react-icons/ti'
import { BsTrash } from 'react-icons/bs'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { HiOutlineChevronDown } from 'react-icons/hi'
import {MdCancel} from 'react-icons/md'

// special classeName defined in App.css

const Button = ({
    action,
    special,
    notPlus,
    notBin,
    notBackArrow,
    notDropDown,
    notCancel,
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
            flex
            justify-center
            items-center
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
        {notPlus === false && <TiPlus />}
        {notBin === false && <BsTrash />}
        {notBackArrow === false && <FaArrowAltCircleLeft />}
        {notDropDown === false && <HiOutlineChevronDown />}
        {notCancel === false && <MdCancel />}
    </button>
)

export default Button
// Basic button width 80px, height 40px translated in tailwind "numbers"
// Basic primary color button
{
    /* <Button
    text="Button"
    color="light"
    textSize="medium"
    textWeight="normal"
    bgColor="primary"
    width="20"
    height="10"
    borderRadius="small"
/> */
}

// Basic light color button
{
    /* <Button
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
/> */
}

// Basic inverted primary color button
{
    /* <Button
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
/> */
}

//  Plus sign no border 20px
{
    /* <Button
    width="5"
    height="5"
    borderRadius="full"
    bgColor="primary"
    color="light"
    textSize="medium"
    notPlus={false}
/> */
}

// Plus sign border 20 px
{
    /* <Button
    width="5"
    height="5"
    borderRadius="full"
    bgColor="light"
    color="primary"
    border="2"
    borderColor="primary"
    textSize="medium"
    notPlus={false}
/> */
}

// Plus sign no border 32px
{
    /* <Button
    width="8"
    height="8"
    borderRadius="full"
    bgColor="primary"
    color="light"
    textSize="large"
    notPlus={false}
/> */
}

// Bin button border 32px
{
    /* <Button
    width="8"
    height="8"
    borderRadius="full"
    bgColor="primary"
    color="light"
    border="2"
    borderColor="primary"
    textSize="large"
    notBin={false}
/> */
}

// Back arrow border 32px
{
    /* <Button
    width="8"
    height="8"
    borderRadius="full"
    bgColor="primary"
    color="light"
    border="1"
    borderColor="primary"
    textSize="large"
    notBackArrow={false}
/> */
}

// dropdown button 
{/*     <Button
    special=""
    text="name  of board"        
    width="48"
    height="8"
    borderRadius="small"
    bgColor="primary"
    color="light"
    border="1"
    borderColor="primary"
    textSize="small"
    notDropDown={false}
/> */}
