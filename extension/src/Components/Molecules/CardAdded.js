import React from 'react'

import Button from '../Atoms/Button'
import Image from '../Atoms/Image'

const CardAdded = () =>{
    return(
<div className="w-full h-full flex flex-col items-center relative">
<Image
height=""
width=""
borderRadius="small"
url='https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg' 
/> 
<Button
    special="absolute top-0 right-0"
    text="Add"
    color="light"
    textSize="small"
    textWeight="normal"
    bgColor="primary"
    width="12"
    height="6"
    borderRadius="small"
/>
  {/* <Button
    special="absolute top-0 right-0"
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
</div>
    )
}


export default CardAdded
