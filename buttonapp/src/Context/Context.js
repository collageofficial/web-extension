import React, { useState } from 'react'

export const Context = React.createContext()

const Provider = ({ children }) => {
    // const [browserPictures, setBrowserPictures] = useState([])
    // const [picturesToSave, setPicturesToSave] = useState([])
    // const [loginPage, setLoginPage] = useState(true)
    // const [selectPage, setSelectPage] = useState(false)
    // const [checkoutPage, setCheckoutPage] = useState(false)
    // const [endPage, setEndPage] = useState(false)

    // const exitLoginPage = () => {
    //     setLoginPage(false)
    //     setSelectPage(true)
    // }
    // const exitSelectPage = () => {
    //     setSelectPage(false)
    //     setCheckoutPage(true)
    // }
    // const goBackToSelect = () => {
    //     setSelectPage(true)
    //     setCheckoutPage(false)
    // }
    // const exitCheckoutPage = () => {
    //     setCheckoutPage(false)
    //     setEndPage(true)
    // }

    const [plusBtnHovered, setPlusBtnIsHovered] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalSelectOpen, setModalSelectOpen] = useState(false)
    const [addUrl, setAddUrl] = useState(false)
    const [urlValue, setUrlValue] = useState('')
    const [urlValueSecondPage, setUrlValueSecondPage] = useState('')

    const plusBtnHoverToggle = () => setPlusBtnIsHovered(!plusBtnHovered)

    const modalOpenToggle = () => {
        setModalOpen(true)
        setModalSelectOpen(false)
    }

    const modalSelectOpenToggle = () => {
        setModalOpen(!modalOpen)
        setModalSelectOpen(!modalSelectOpen)
    }

    const addUrlToggle = () => setAddUrl(!addUrl)

    const getUrlValue = (e) => setUrlValue(e.target.value)

    const deleteUrlValue = () => setUrlValue('')

    const getUrlValueSecondPage = (e) => setUrlValueSecondPage(e.target.value)

    const matchUrlsValue = () => {
        setUrlValue(urlValueSecondPage)
        setUrlValueSecondPage('')
    }

    return (
        <Context.Provider
            value={{
                // browserPictures,
                // setBrowserPictures,
                // picturesToSave,
                // setPicturesToSave,
                // loginPage,
                // selectPage,
                // checkoutPage,
                // endPage,
                // exitLoginPage,
                // exitSelectPage,
                // goBackToSelect,
                // exitCheckoutPage,
                plusBtnHovered,
                plusBtnHoverToggle,
                modalOpen,
                modalOpenToggle,
                modalSelectOpen,
                modalSelectOpenToggle,
                addUrl,
                addUrlToggle,
                urlValue,
                setUrlValue,
                getUrlValue,
                deleteUrlValue,
                urlValueSecondPage,
                getUrlValueSecondPage,
                matchUrlsValue,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Provider
