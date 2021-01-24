import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import Card from '../Molecules/Card'
import './CardContainer.css'

const SelectedCards = () => {
    const context = useContext(Context)
    const [selectedImages, setSelectedImages] = useState([])
    /* why is is showint the thing i splice and not the rest? */
    /* splice function works on console */
    useEffect(() => {
        setSelectedImages(context.picturesToSave)
    }, [context.picturesToSave])

    return (
        <div className="picturestosave">
            {selectedImages.length > 0 && (
                <div className="flexcolumn">
                    <div className="flexRow">
                        {selectedImages.map((picture, index) => (
                            <Card
                                key={index}
                                url={picture.src}
                                action={() => {
                                    context.setPicturesToSave(
                                        context.picturesToSave.splice(index, 1)
                                    )
                                    console.log(context.picturesToSave)
                                }}
                            />
                        ))}
                    </div>
                    {/* click the button only if i selected pictures */}
                    <button onClick={context.exitSelectPage}>SAVE ME!</button>
                </div>
            )}
        </div>
    )
}

export default SelectedCards
