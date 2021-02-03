import React from 'react'

import Button from '../Atoms/Button'
import Image from '../Atoms/Image'

const CardAdded = ({filename, url, action}) => {
    return (
        <div className="w-auto h-full flex flex-col items-center relative">
            <Image
                height="full"
                width="auto"
                borderRadius="small"
                url={url}
                filename={filename}
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
                action={action}
            />
        </div>
    )
}

export default CardAdded
