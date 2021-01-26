import { findAllByTitle } from '@testing-library/react'
import React, { useContext, useState, useEffect } from 'react'
import { Context } from './../../Context/Context'

const CaptionForm = () => {
    const context = useContext(Context)
    const [images, setImages] = useState(context.picturesToSave)
    const [reload, setReload] = useState(false)
    useEffect(() => {
        setReload(false)
    }, [reload])
    return (
        <section>
            {images.map((image) => (
                <form
                    onChange={(e) => {
                        e.preventDefault()
                        e.target.id === 'filename'
                            ? (image.filename = e.target.value)
                            : (image.caption = e.target.value)
                        context.setPicturesToSave(images)
                        setReload(true)
                    }}
                >
                    <img src={image.src} alt={image.filename} />
                    <label htmlFor="filename">Title:</label>
                    <input
                        type="text"
                        id="filename"
                        value={image.filename}
                        required
                    />
                    <label htmlFor="caption">Caption:</label>
                    <input
                        type="text"
                        id="caption"
                        value={image.caption}
                        required
                    />
                    {/* i need a select form to see the moodboards here */}
                </form>
            ))}
        </section>
    )
}

export default CaptionForm