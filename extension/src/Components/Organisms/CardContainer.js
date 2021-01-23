import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../Context/Context'
import Card from '../Molecules/Card'
import './CardGroup.css'

const CardGroup = () => {
    const context = useContext(Context)

    useEffect(() => {
        let images = []
        if (window.localStorage.length > 0) {
            for (let i = 0; i < window.localStorage.length; i++) {
                images.push(JSON.parse(window.localStorage.getItem(i)))
                context.setBrowserPictures(images)
            }
        }
    }, [context.browserPictures])

    return (
        <div className="cardcontainer">
            {context.browserPictures.length > 0 &&
                context.browserPictures.map((picture, index) => (
                    <Card key={index} url={picture.src} />
                ))}
        </div>
    )
}

export default CardGroup
