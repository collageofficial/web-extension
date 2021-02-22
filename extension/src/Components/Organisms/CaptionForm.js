import { findAllByTitle } from '@testing-library/react'
import React, { useContext, useState, useEffect } from 'react'
import { Context } from './../../Context/Context'
import Input from '../Atoms/Input'
import Image from '../Atoms/Image'

const CaptionForm = () => {
    const context = useContext(Context)
    const [images, setImages] = useState(context.picturesToSave)
    const [reload, setReload] = useState(false)
    const [userAlbum, setUserAlbum] = useState([])

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
        <div className="h-1/2 w-3/4 flex flex-column flex-wrap items-center">
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
                    <div className="m-small flex flex-col items-center">
                        <Image
                            height="auto"
                            width="full"
                            borderRadius="small"
                            url={image.src}
                            filename={image.filename}
                        />
                        <label htmlFor="filename">Title:</label>
                        <Input
                            text="Title"
                            textWeight="200"
                            bgColor="light"
                            width="96"
                            height="14"
                            border="2"
                            borderColor="grey"
                            borderRadius="small"
                            type="text"
                            id="filename"
                            value={image.filename}
                        />
                        <label htmlFor="caption">Caption:</label>
                        <Input
                            text="Caption"
                            textWeight="200"
                            bgColor="light"
                            width="96"
                            height="14"
                            border="2"
                            borderColor="grey"
                            borderRadius="small"
                            type="text"
                            id="caption"
                            value={image.caption}
                        />
                        <label htmlFor="album">Album:</label>
                        <select name="album" id="album" required>
                            <option value="" selected disabled hidden>
                                Choose here
                            </option>
                            {userAlbum.map((album, index) => (
                                <option value={album._id}>
                                    {album.album_name}
                                </option>
                            ))}
                        </select>
                    </div>
                </form>
            ))}
        </div>
    )
}

export default CaptionForm
