import React, { useEffect, useContext } from 'react'
import { Context } from '../../Context/Context'
import Card from '../Molecules/Card'
import './CardContainer.css'

const SelectedCards = () => {
    const context = useContext(Context)
    /* why is is showint the thing i splice and not the rest? */
    /* splice function works on console */
    useEffect(() => {}, [context.picturesToSave])

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
                                    context.setPicturesToSave(
                                        context.picturesToSave.splice(index, 1)
                                    )
                                    console.log(context.picturesToSave)
                                }}
                            />
                        ))}
                    </div>
                    <button>SAVE ME! I AM NOT DOING ANYTHING FOR NOW</button>
                </div>
            )}
        </div>
    )
}

export default SelectedCards
