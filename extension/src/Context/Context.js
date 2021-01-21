import React, { useState } from 'react'

export const Context = React.createContext()

const CollageContext = ({ children }) => {
    const [counter, setCounter] = useState(0)

    return (
        <Context.Provider value={{ counter, setCounter }}>
            {children}
        </Context.Provider>
    )
}

export default CollageContext
