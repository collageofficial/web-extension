import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import Card from '../Molecules/Card'
import './CardContainer.css'

const SelectedCards = () => {
    const context = useContext(Context)
    const [images, setImages] = useState([])
    useEffect(() => {
        setImages(context.picturesToSave)
    }, [images])

    return (
        <div className="picturestosave">
            {context.picturesToSave.length > 0 && (
                <div className="flexcolumn">
                    <div className="flexRow">
                        {context.picturesToSave.map((picture, index) => (
                            <Card
                                key={index}
                                url={picture.src}
                                action={() => {
                                    context.picturesToSave.splice(index, 1)
                                    context.setPicturesToSave(
                                        context.picturesToSave
                                    )
                                    setImages([])
                                }}
                            />
                        ))}
                    </div>
                    <button onClick={context.exitSelectPage}>SAVE ME!</button>
                </div>
            )}
        </div>
    )
}

export default SelectedCards
