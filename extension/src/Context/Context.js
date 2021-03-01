import React, { useState } from 'react'

export const Context = React.createContext()

const Provider = ({ children }) => {
    const [browserPictures, setBrowserPictures] = useState([])
    const [picturesToSave, setPicturesToSave] = useState([])
    const [token, setToken] = useState()
    const [loginPage, setLoginPage] = useState(true)
    const [selectPage, setSelectPage] = useState(false)
    const [checkoutPage, setCheckoutPage] = useState(false)
    const [endPage, setEndPage] = useState(false)
    const [newBoard, setNewBoard] = useState()

    const exitLoginPage = () => {
        setLoginPage(false)
        setSelectPage(true)
    }
    const exitSelectPage = () => {
        setSelectPage(false)
        setCheckoutPage(true)
    }
    const goBackToSelect = () => {
        setSelectPage(true)
        setCheckoutPage(false)
    }
    const exitCheckoutPage = () => {
        setCheckoutPage(false)
        setEndPage(true)
    }

    return (
        <Context.Provider
            value={{
                browserPictures,
                setBrowserPictures,
                picturesToSave,
                setPicturesToSave,
                token,
                setToken,
                loginPage,
                selectPage,
                checkoutPage,
                endPage,
                exitLoginPage,
                exitSelectPage,
                goBackToSelect,
                exitCheckoutPage,
                newBoard,
                setNewBoard
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Provider
