import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import Text from '../Atoms/Text'
import Button from '../Atoms/Button'
import Image from '../Atoms/Image'

const SaveBox = () => {
    const context = useContext(Context)
    const [images, setImages] = useState([])
    useEffect(() => {
        setImages(context.picturesToSave)
    }, [images])

    return (
        <div className="p-small w-full h-full flex flex-col bg-light rounded-small border-2 border-dark justify-center">
            <div className="m-small">
                <Text
                    text="Added images :"
                    color="primary"
                    fontWeight="normal"
                    textSize="medium"
                />
            </div>
            {/* remenber to write some logic with ratio for fit image  */}
            <div className="h-2/5 ml-small">
                {context.picturesToSave.map((picture, index) => (
                    <Image
                        height="full"
                        width="auto"
                        borderRadius="small"
                        filename={picture.filename}
                        key={index}
                        url={picture.src}
                        action={() => {
                            context.picturesToSave.splice(index, 1)
                            context.setPicturesToSave(context.picturesToSave)
                            setImages([])
                        }}
                    />
                ))}
            </div>
            <div className="flex justify-end">
                <Button
                    text="Save in Mood boards"
                    color="light"
                    textSize="medium"
                    textWeight="normal"
                    bgColor="primary"
                    width="25"
                    height="10"
                    border="2"
                    borderColor="primary"
                    borderRadius="small"
                    action={context.exitSelectPage}
                />
            </div>
        </div>
    )
}

export default SaveBox
