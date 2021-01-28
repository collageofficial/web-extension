import React from 'react'
import DragDrop from '../Molecules/DragDrop'
import Button from '../Atoms/Button'

const ModalInsertImage = () => (
    <div className="w-3/5 h-4/5 p-small border-2 border-primary rounded-small flex">
        <div className="flex-1 flex flex-col items-center gap-8">
        <DragDrop />
        <Button
            text="Save from site"
            color="primary"
            textSize="medium"
            textWeight="normal"
            bgColor="light"
            width="full"
            height="10"
            border="2"
            borderColor="primary"
            borderRadius="small"
        />
        </div>
        <div className="flex-1"></div>
    </div>
)

export default ModalInsertImage
