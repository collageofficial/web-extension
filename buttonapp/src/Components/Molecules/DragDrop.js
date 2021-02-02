import React from 'react'
import Text from '../Atoms/Text'
import { RiDragDropLine } from 'react-icons/ri'

const DragDrop = () => {
    return (
        <div className="w-full h-4/5 flex flex-col items-center bg-grey rounded-small">
            <div className="w-full h-4/5 flex flex-col justify-end items-center">
                <RiDragDropLine className="w-16 h-16" />
            </div>
            <div className="mt-6">
                <Text
                    text="Drag & Drop or click to upload"
                    color="dark"
                    fontWeight="bold"
                    textSize="medium"
                    textAlign="center"
                />
            </div>
            <div className="w-full h-full flex flex-col justify-end items-center mb-8">
                <Text
                    text="Recommendation: use high-quality .jpg files smaller than 20 MB"
                    color="dark"
                    fontWeight="normal"
                    textSize="small"
                    textAlign='center'
                />
            </div>
        </div>
    )
}

export default DragDrop
