import { findAllByTitle } from '@testing-library/react'
import React, { useContext, useState, useEffect } from 'react'
import { Context } from './../../Context/Context'

const CaptionForm = () => {
    const context = useContext(Context)
    const [images, setImages] = useState(context.picturesToSave)
    const [reload, setReload] = useState(false)
    const [userAlbum, setUserAlbum] = useState([])

    /* const fetchAlbums = async () => {
        fetch('http://localhost:4000/profiles/my_albums')
            .then((res) => res.json())
            .then((data) => {setUserAlbum(data)
            console.log(data)})
    } */
    const fetchAlbums = async () => {
        fetch('http://localhost:4000/profiles/my_albums', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-auth-token': context.token,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setUserAlbum(data)
            })
    }

    useEffect(() => {
        setReload(false)
        fetchAlbums()
    }, [reload])
    return (
        <section>
            {images.map((image) => (
                <form
                    onChange={(e) => {
                        e.preventDefault()
                        e.target.id === 'filename'
                            ? (image.filename = e.target.value)
                            : e.target.id === 'caption'
                            ? (image.caption = e.target.value)
                            : (image.album = e.target.value)
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
                        {userAlbum.map((album) => (
                            <option value={album.album_name}>
                                {album.album_name}
                            </option>
                        ))}
                    </select>
                </form>
            ))}
        </section>
    )
}

export default CaptionForm
