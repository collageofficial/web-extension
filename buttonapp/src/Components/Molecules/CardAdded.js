import React from 'react'
import Button from '../Atoms/Button'
import Image from '../Atoms/Image'

const CardAdded = ({key, url, action}) => {
    return (
        <div key={key} className="w-auto h-full flex flex-col items-center relative">
            <Image
                height="full"
                width="auto"
                borderRadius="small"
                url={url}
            />
            <Button
                special="absolute bottom-0"
                text="Add"
                color="light"
                textSize="small"
                textWeight="normal"
                bgColor="primary"
                width="12"
                height="6"
                borderRadius="small"
                action={action}
            />
        </div>
    )
}

export default CardAdded
