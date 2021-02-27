import { React, useContext } from 'react'
import { Context } from '../../Context/Context'

import Button from '../Atoms/Button'
import Image from '../Atoms/Image'
import CardAdded from '../Molecules/CardAdded'

const SaveBox = ({ action }) => {
    const context = useContext(Context)

    return (
        <div className="w-full h-full flex rounded-small border-2 border-primary justify-end items-center gap-2 p-small">
            {context.saveImage.map((img, index) => (
                <div
                    className="h-full w-5/6 flex items-center gap-2"
                    key={index}
                >
                    <CardAdded
                        key={index}
                        borderRadius="small"
                        url={img.imageSrc}
                        text="Remove"
                        action={() => context.removeSaveImageToggle(index)}
                    />
                </div>
            ))}
            <div className="w-1/6 flex justify-end">
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
                    action={action}
                />
            </div>
        </div>
    )
}

export default SaveBox
