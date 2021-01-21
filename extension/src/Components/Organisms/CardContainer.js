import React, { useState, useEffect } from 'react'
import Card from '../Molecules/Card'
import './CardGroup.css'

const CardGroup = () => {
    const [pictures, setPictures] = useState([])

    useEffect(() => {
        let images = []
        console.log(window.localStorage)
        if (window.localStorage.length > 0) {
            for (let i = 0; i < window.localStorage.length; i++) {
                images.push(JSON.parse(window.localStorage.getItem(i)))
                setPictures(images)
                console.log(pictures)
            }
        }
    }, [])

    return (
        <div className="cardcontainer">
            {pictures.length > 0 &&
                pictures.map((picture, index) => (
                    <Card
                        key={index}
                        url={picture.origin}
                        title={picture.filename}
                        text={picture.caption}
                        alt={picture.alt}
                    />
                ))}
        </div>
    )
}

export default CardGroup
