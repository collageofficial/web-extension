import { findAllByTitle } from '@testing-library/react'
import React, { useContext, useState, useEffect } from 'react'
import { Context } from './../../Context/Context'

const CaptionForm = () => {
    const context = useContext(Context)
    const [images, setImages] = useState(context.picturesToSave)
    const [reload, setReload] = useState(false)
    const [userAlbum, setUserAlbum] = useState([])

    const fetchAlbums = async () => { /* neeed to put header. no token. autorization denied */
        fetch('http://localhost:4000/profiles/my_albums')
            .then((res) => res.json())
            .then((data) => setUserAlbum(data))
    }

    useEffect(() => {
        setReload(false)
        fetchAlbums()
        console.log(userAlbum)
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
                        console.log(context.picturesToSave)
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
                    <label htmlFor="album">Album:</label>
                    <select name="album" id="album" required>
                        <option value="new">CREATE A NEW ALBUM</option>
                    </select>
                </form>
            ))}
        </section>
    )
}

export default CaptionForm
