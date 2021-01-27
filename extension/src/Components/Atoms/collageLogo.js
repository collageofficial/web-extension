import React from 'react'
import collageLogo from './collage-logo.svg'

const CollageLogo = ({height, width}) => {
    return(
<img 
className={`
h-${height}
w-${width}
`}
alt="collage-logo"
src={collageLogo} 
 />    
    )}
export default CollageLogo

