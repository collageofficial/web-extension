import React, { useState } from 'react'
import { get, post, uploadS3 } from '../util/fetch'

export const Context = React.createContext()

const Provider = ({ children }) => {
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
    const [plusBtn, setPlusButton] = useState(false)
    const [token, setToken] = useState()
    const [profile, setProfile] = useState({})
    const [plusBtnHovered, setPlusBtnIsHovered] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalSelectOpen, setModalSelectOpen] = useState(false)
    const [addUrl, setAddUrl] = useState(false)
    const [urlValue, setUrlValue] = useState('')
    const [urlValueSecondPage, setUrlValueSecondPage] = useState('')
    const [altText, setAltText] = useState(true)

    // hook for dragDrop component for uploading an image
    const [files, setFiles] = useState([])

    // hook for fetching images from BE
    const [browserPictures, setBrowserPictures] = useState([])

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
        //TODO should be based on .env variable, for now leave as is.
        // Maybe, change this to GET, because we are requesting not pushing new content in.
        // GET is more intuitive
        fetch('http://localhost:4000/puppeteer', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                url: urlValue,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setBrowserPictures(data.images)
            })
        setModalOpen(!modalOpen)
        setModalSelectOpen(!modalSelectOpen)
    }

    const uploadPicture = async (e) => {
        // ignore event, maybe stop propagation
        try {
            // TODO checks if it is there etc, show error if non selected etc.
            const file = files[0]

            const { error, postURL, key } = await get('uploadimage')({
                token: token,
                type: 'jpeg',
            })
            if (error) {
                // TODO make possibility to show error to user
                // return setError(error)
                return
            }

            // // This could be used to show image to user,
            let imageurl = URL.createObjectURL(file)

            // AWS takes only form data or stream, so we create new form data object
            // Maybe we can test this with creating it and using the whole file object, dunno
            const imageData = new FormData()
            imageData.append('data', file)

            const s3Image = await uploadS3(postURL, imageData.get('data'))
            if (!s3Image.ok) {
                // check maybe s3Image object for error
                // return setError('Failed to upload to s3')
                // return
            }

            // to find out the width and height
            const img = new Image()
            img.onload = async function () {
                // this will be triggered when image gets loaded
                URL.revokeObjectURL(this.src)
                const height = parseFloat(this.height)
                const width = parseFloat(this.width)
                const ratio = parseFloat(height / width)

                // create image object
                const image = await post('images')({
                    token: token,
                    body: {
                        filename: key,
                        ratio: ratio,
                        caption: '', //TODO add description, or anything we need to add as text shown under picture
                    },
                })

                // oririn_info the more information we get the better, all of them are optional

                let thing = {
                    image,
                    // origin_info: {
                    // username: it.username,
                    // name: it.name,
                    // url: it.origin_url,
                    // usertags: it.usertags,
                    // tags: it.tags,
                    // created: new Date(it.created),
                    // caption: it.caption,
                    // },
                }
                // TODO add boolean variable to backlink or not.
                const backlink = false // TODO remove me, can be boolean
                const origin = 'url' // TODO should be origin url from scraped
                // you can also use just backlink if it is url to check this option
                if (backlink) thing = { ...thing, type: 'web', origin: origin }
                // load profile with GET /me api
                const res = post('profiles/' + profile.id + '/things')({
                    token: token,
                    body: thing,
                })
                // SUCCESS
            }
            // with this we trigger onload
            img.src = imageurl
        } catch (e) {
            console.log(e)
        }
    }

    const addUrlToggle = () => setAddUrl(!addUrl)

    const getUrlValue = (e) => setUrlValue(e.target.value)

    const deleteUrlValue = () => setUrlValue('')

    const getUrlValueSecondPage = (e) => setUrlValueSecondPage(e.target.value)

    const matchUrlsValue = () => {
        setBrowserPictures([])
        fetch('http://localhost:4000/puppeteer', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                url: urlValueSecondPage,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setBrowserPictures(data.images)
            })
        setUrlValue(urlValueSecondPage)
        setUrlValueSecondPage('')
    }

    const altTextToggle = () => setAltText(!altText)

    return (
        <Context.Provider
            value={{
                browserPictures,
                /* picturesToSave, */
                // setPicturesToSave,
                // loginPage,
                // selectPage,
                // checkoutPage,
                // endPage,
                // exitLoginPage,
                // exitSelectPage,
                // goBackToSelect,
                // exitCheckoutPage,
                uploadPicture,
                loginPage,
                closeLoginToggle,
                plusBtn,
                token,
                setToken,
                profile,
                setProfile,
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
