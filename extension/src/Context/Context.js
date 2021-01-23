import React, { useState } from 'react'

export const Context = React.createContext()

const Provider = ({ children }) => {
    const [browserPictures, setBrowserPictures] = useState([])
    const [picturesToSave, setPicturesToSave] = useState([])

    return (
        <Context.Provider
            value={{
                browserPictures,
                setBrowserPictures,
                picturesToSave,
                setPicturesToSave,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Provider
