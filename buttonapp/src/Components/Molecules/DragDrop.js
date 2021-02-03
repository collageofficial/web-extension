import { React, useContext, useState, useEffect } from 'react'
import { Context } from '../../../../buttonapp/src/Context/Context'
import { useDropzone } from 'react-dropzone'
import Text from '../Atoms/Text'
import { RiDragDropLine } from 'react-icons/ri'

const DragDrop = () => {
    const context = useContext(Context)

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            context.setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            )
        },
    })

    const thumbs = context.files.map((file) => (
        <img src={file.preview} key={file.name} className="rounded-small" />
    ))

    useEffect(
        () => () => {
            // Make sure to revoke the data uris to avoid memory leaks
            context.files.forEach((file) => URL.revokeObjectURL(file.preview))
        },
        [context.files]
    )

    return (
        <div className="w-full h-4/5 flex flex-col items-center bg-grey rounded-small">
            <div
                className="w-full h-1/5 flex flex-col justify-center items-center"
                {...getRootProps()}
            >
                <input {...getInputProps()} />
                <RiDragDropLine className="w-10 h-10" />
                <div className="w-full h-1/5">
                    <Text
                        text="Click to upload"
                        color="dark"
                        fontWeight="bold"
                        textSize="medium"
                        textAlign="center"
                    />
                    <Text
                        text="Recommendation: use high-quality .jpg files smaller than 20 MB"
                        color="dark"
                        fontWeight="normal"
                        textSize="small"
                        textAlign="center"
                    />
                </div>
            </div>
            <div className="w-full h-4/5 flex justify-center items-center p-small">
                {thumbs}
            </div>
        </div>
    )
}

export default DragDrop
