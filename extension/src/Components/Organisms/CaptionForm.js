import { findAllByTitle } from '@testing-library/react'
import React, { useContext, useState, useEffect } from 'react'
import { Context } from './../../Context/Context'

const CaptionForm = () => {
    const context = useContext(Context)
    const [image, setImage] = useState(context.picturesToSave)
    const [reload, setReload] = useState(false)
    useEffect(() => {
        setReload(false)
        console.log('hi')
        console.log(context.picturesToSave)
    }, [reload])
    return (
        <form
            onChange={(e) => {
                e.preventDefault()
                e.target.id === 'filename'
                    ? (image[0].filename = e.target.value)
                    : (image[0].caption = e.target.value)
                context.setPicturesToSave(image)
                setReload(true)
            }}
        >
            <img src={image[0].src} />
            <div>
                <label htmlFor="filename">Title:</label>
                <input
                    type="text"
                    id="filename"
                    value={image[0].filename}
                    required
                />
            </div>
            <div>
                <label htmlFor="caption">Caption:</label>
                <input
                    type="text"
                    id="caption"
                    value={image[0].caption}
                    required
                />
            </div>
        </form>
    )
}

export default CaptionForm
