import React from 'react'

const DropDownMenu = ({
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
    aria-haspopup="listbox"
    aria-expanded="true"
    aria-labelledby="listbox-label" 
    placeholder={text}
    class={`
    relative
    w-${width}
    h-${height}
    bg-${bgColor}
    border-${border}
    border-${borderColor}
    rounded-${borderRadius}
    cursor-default 
    text-left
    focus:outline-none 
    focus:ring-1 
    focus:ring-indigo-500 
    focus:border-indigo-500
    
    `}    
    />

    // <button type="button"
    //         
    //         
    //         class="
    //         
    //         pl-3 
    //         pr-10 
    //         py-2 
    //         sm:text-sm" />
)

export default DropDownMenu