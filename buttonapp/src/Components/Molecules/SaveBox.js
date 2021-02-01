import { React, useContext } from 'react'
import { Context } from '../../Context/Context'

import Button from '../Atoms/Button'
import Image from '../Atoms/Image'

const SaveBox = () => {
    const context = useContext(Context)

    return (
        <div className="w-full h-4/5 flex rounded-small border-2 border-primary justify-between items-center p-small">
            <div className="h-full">
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
            </div>
            <Button
                text="Add"
                color="light"
                textSize="medium"
                textWeight="normal"
                bgColor="primary"
                width="20"
                height="10"
                border="2"
                borderColor="primary"
                borderRadius="small"
            />
        </div>
    )
}

export default SaveBox
