import React, { useState } from 'react'

export const Context = React.createContext()

const Provider = ({ children }) => {
    const [browserPictures, setBrowserPictures] = useState([])
    const [picturesToSave, setPicturesToSave] = useState([])
    const [loginPage, setLoginPage] = useState(true)
    const [selectPage, setSelectPage] = useState(false)
    const [checkoutPage, setCheckoutPage] = useState(false)
    const [endPage, setEndPage] = useState(false)

    const exitLoginPage = () => {
        setLoginPage(false)
        setSelectPage(true)
    }
    const exitSelectPage = () => {
        setSelectPage(false)
        setCheckoutPage(true)
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
                loginPage,
                selectPage,
                checkoutPage,
                endPage,
                exitLoginPage,
                exitSelectPage,
                exitCheckoutPage
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Provider
