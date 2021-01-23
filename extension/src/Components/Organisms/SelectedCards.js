import React, { useEffect, useContext } from 'react'
import { Context } from '../../Context/Context'
import Card from '../Molecules/Card'
import './CardContainer.css'

const SelectedCards = () => {
    const context = useContext(Context)

    useEffect(() => {}, [context.picturesToSave])

    return (
        <div className="picturestosave">
            {context.picturesToSave.length > 0 &&
                context.picturesToSave.map((picture, index) => (
                    <Card
                        key={index}
                        url={picture.src}
                        action={() => {
                            console.log('remove')
                        }}
                    />
                ))}
        </div>
    )
}

export default SelectedCards
