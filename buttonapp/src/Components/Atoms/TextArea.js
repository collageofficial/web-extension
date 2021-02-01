import React from 'react'

const TextArea = ({ text, textWeight, width, height, bgColor, border, borderColor, borderRadius, rows }) => (
    <div>
        <textarea
            placeholder={text}
            className={`
                font-main
                font-${textWeight} 
                text-left
                align-middle
                w-${width}
                h-${height}
                rows-${rows}
                bg-${bgColor}
                border-${border}
                border-${borderColor}
                rounded-${borderRadius}
                p-small
                focus: outline-none
                active: outline-none    
            `}
        />
    </div>
)

export default TextArea
