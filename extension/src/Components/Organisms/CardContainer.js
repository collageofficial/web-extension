import React, { useState, useEffect } from 'react'
import Card from '../Molecules/Card'
import './CardGroup.css'

const CardGroup = () => {
    const [pictures, setPictures] = useState([])

    useEffect(() => {
        let images = []
        if (window.localStorage.length > 0) {
            for (let i = 0; i < window.localStorage.length; i++) {
                images.push(JSON.parse(window.localStorage.getItem(i)))
                setPictures(images)
            }
        }
    }, [pictures])

    return (
        <div className="cardcontainer">
            {pictures.length > 0 &&
                pictures.map((picture, index) => (
                    <Card
                        key={index}
                        url={picture.src}
                    />
                ))}
        </div>
    )
}

export default CardGroup
