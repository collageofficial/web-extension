import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../Context/Context'
import Card from '../Molecules/Card'
import './CardGroup.css'

const CardGroup = () => {
    const context = useContext(Context)

    useEffect(() => {
        let images = []
        const saveImages = async () => {
            if (window.localStorage.length > 0) {
                for (let i = 0; i < window.localStorage.length; i++) {
                    images = [
                        ...images,
                        JSON.parse(window.localStorage.getItem(i)),
                    ]
                }
            }
        }
        const saveToContext = async () => {
            /* why is it looping */
            console.log(context.browserPictures)
            console.log(images)
            context.browserPictures.length === images.length
                ? console.log('hi')
                : context.setBrowserPictures(images)
        }

        saveImages().then(saveToContext())
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
