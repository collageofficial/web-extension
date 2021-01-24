import React from 'react'

const Input = ({
    text,
    textWeight,
    bgColor,
    width,
    height,
    border,
    borderColor,
    borderRadius,
}) => (
    <input
        placeholder={text}
        className={`
            font-main
            font-${textWeight} 
            text-left
            align-middle
            bg-${bgColor}
            w-${width}
            h-${height}
            p-small
            border-${border}
            border-${borderColor}
            rounded-${borderRadius}
            focus: outline-none
            active: outline-none
    `}
    />
)

export default Input
