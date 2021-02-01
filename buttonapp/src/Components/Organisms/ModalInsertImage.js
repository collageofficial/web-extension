import React from 'react'
import DragDrop from '../Molecules/DragDrop'
import Button from '../Atoms/Button'
import Input from '../Atoms/Input'
import TextArea from '../Atoms/TextArea'

const ModalInsertImage = () => (
    <div className="w-3/5 h-4/5 p-small border-2 border-primary rounded-small flex gap-4">
        <div className="h-full w-auto flex-1 flex flex-col justify-between items-center gap-8">
            <DragDrop />
            <Button
                text="Paste URL here..."
                color="light"
                textSize="medium"
                textWeight="normal"
                bgColor="primary"
                width="full"
                height="10"
                borderRadius="small"
            />
        </div>
        <div className="h-full w-auto flex-1 flex flex-col justify-between items-center">
            <Button
                text="Select Mood Board"
                color="light"
                textSize="medium"
                textWeight="normal"
                bgColor="primary"
                width="full"
                height="10"
                borderRadius="small"
            />
            <div className="w-full flex flex-col gap-8">
                <Input
                    text="Add your title"
                    textWeight="normal"
                    bgColor="light"
                    width="4/5"
                    height="14"
                    border="2"
                    borderColor="grey"
                    borderRadius="small"
                />
                <TextArea
                    text="Describe your image"
                    textWeight="normal"
                    bgColor="light"
                    width="4/5"
                    height="14"
                    border="2"
                    borderColor="grey"
                    borderRadius="small"
                />
                <Button
                    text="Add alt text"
                    color="light"
                    textSize="medium"
                    textWeight="normal"
                    bgColor="primary"
                    width="2/5"
                    height="10"
                    borderRadius="small"
                />
                <Input
                    text="Add a destination link"
                    textWeight="normal"
                    bgColor="light"
                    width="4/5"
                    height="14"
                    border="2"
                    borderColor="grey"
                    borderRadius="small"
                />
            </div>
            <Button
                text="Save"
                color="light"
                textSize="medium"
                textWeight="normal"
                bgColor="primary"
                width="full"
                height="10"
                borderRadius="small"
            />
        </div>
    </div>
)

export default ModalInsertImage
