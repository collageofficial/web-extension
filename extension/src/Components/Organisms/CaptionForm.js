import React, { useContext } from 'react'
import { Context } from './../../Context/Context'

const CaptionForm = () => {
    const context = useContext(Context)

    return (
        <form onSubmit={handleSubmit}>
            <img src=""/>
            <div>
                <label htmlFor="filename">Title:</label>
                <input type="email" id="filename" />
            </div>
            <div>
                <label htmlFor="caption">Caption:</label>
                <input type="text" id="caption" />
            </div>
        </form>
    )
}

export default CaptionForm
