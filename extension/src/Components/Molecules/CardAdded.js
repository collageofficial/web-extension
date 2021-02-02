import React from 'react'

import Button from '../Atoms/Button'
import Image from '../Atoms/Image'

const CardAdded = () => {
    return (
        <div className="w-auto h-full flex flex-col items-center relative">
            <Image
                height="full"
                width="auto"
                borderRadius="small"
                url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
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
        </div>
    )
}

export default CardAdded
