import React from 'react'

const TextArea = ({ text, textWeight, bgColor }) => (
    <div>
        <textarea
            placeholder={text}
            className={`
                font-main
                font-${textWeight} 
                text-left
                align-middle
                w-full
                h-full
                bg-${bgColor}
                p-small
                focus: outline-none
                active: outline-none    
            `}
        />
    </div>
)

export default TextArea
