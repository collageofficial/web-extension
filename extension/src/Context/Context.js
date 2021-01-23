import React, { useState } from 'react'

export const Context = React.createContext()

const Provider = ({ children }) => {
    const [browserPictures, setBrowserPictures] = useState([])

    return (
        <Context.Provider
            value={{
                browserPictures,
                setBrowserPictures,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Provider
