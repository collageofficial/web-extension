import React from 'react'

const Text = ({ text, bgColor, color, textSize, fontWeight, textAlign, special }) => (
    <p
        className={`
            ${special}
            text-${color} 
            bg-${bgColor} 
            font-main 
            font-${fontWeight} 
            text-${textSize}
            w-max 
            h-max
            break-words
            text-${textAlign}	
        `}
    >
        {text}
    </p>
)

export default Text

//Primary large text
//  <Text
// text="Primary 24"
// color="primary"
// fontWeight="normal"
// textSize="large"
// />

// White large text
// <Text
// text="White 24"
// color="light"
// fontWeight="normal"
// textSize="large"
// />

// Grey large text
// <Text
// text="Grey 24"
// color="grey"
// fontWeight="normal"
// textSize="large"
// />

// Dark large text
// <Text
// text="Dark 24"
// color="dark"
// fontWeight="normal"
// textSize="large"
// />

// {/* text size medium  */}

// Primary medium text
// <Text
// text="Primary 18"
// color="primary"
// fontWeight="normal"
// textSize="medium"
// />

// White medium text
// <Text
// text="White 18"
// color="light"
// fontWeight="normal"
// textSize="medium"
// />

// Grey medium text
// <Text
// text="Grey 18"
// color="grey"
// fontWeight="normal"
// textSize="medium"
// />

// Dark medium text
// <Text
// text="Dark 18"
// color="dark"
// fontWeight="normal"
// textSize="medium"
// />

// {/* text size small bold  */}

// primary small bold text
// <Text
// text="Primary 12"
// color="primary"
// fontWeight="bold"
// textSize="small"
// />

// White small bold text
// <Text
// text="White 12"
// color="light"
// fontWeight="bold"
// textSize="small"
// />

// Grey small bold text
// <Text
// text="Grey 12"
// color="grey"
// fontWeight="bold"
// textSize="small"
// />

// Dark small bold text
// <Text
// text="Dark 12"
// color="dark"
// fontWeight="bold"
// textSize="small"
// />

// {/* text size small normal  */}
// White small normal text
// <Text
// text="White 12"
// color="light"
// fontWeight="normal"
// textSize="small"
// />

// Dark small normal text
// <Text
// text="Dark 12"
// color="dark"
// fontWeight="normal"
// textSize="small"
// />
