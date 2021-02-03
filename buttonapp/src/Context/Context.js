import React, { useState } from 'react'

export const Context = React.createContext()

const Provider = ({ children }) => {
    // const [browserPictures, setBrowserPictures] = useState([])
    // const [picturesToSave, setPicturesToSave] = useState([])

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

    const [loginPage, setLoginPage] = useState(true)
    const [plusBtn, setPlusButton] = useState(false) // set this to true when be is connected
    const [token, setToken] = useState()
    const [plusBtnHovered, setPlusBtnIsHovered] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalSelectOpen, setModalSelectOpen] = useState(false)
    const [addUrl, setAddUrl] = useState(false)
    const [urlValue, setUrlValue] = useState('')
    const [urlValueSecondPage, setUrlValueSecondPage] = useState('')
    const [altText, setAltText] = useState(true)

    // hooks for dragDrop componentfor uploading an image
    const [files, setFiles] = useState([])

    const closeLoginToggle = () => {
        setLoginPage(false)
        setPlusButton(true)
    }

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

    const altTextToggle = () => setAltText(!altText)

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
                loginPage,
                closeLoginToggle,
                plusBtn,
                token,
                setToken,
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
                files,
                setFiles,
                altText,
                altTextToggle,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Provider
