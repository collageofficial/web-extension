import React, { useState } from 'react'
import { get, post, uploadS3 } from '../util/fetch'

export const Context = React.createContext()

const Provider = ({ children }) => {

    /* ======== HOOKS ========*/ 
    // hook for login
    const [loginPage, setLoginPage] = useState(true)

    // hook for plus button toggling (after login)
    const [plusBtn, setPlusButton] = useState(false)

    // hook for token handling from BE
    const [token, setToken] = useState()

    // hook for user profile handling from BE
    const [profile, setProfile] = useState({})

    // hook for plus button hovering
    const [plusBtnHovered, setPlusBtnIsHovered] = useState(false)

    // hook for ModalInsertImage toggling (first page)
    const [modalOpen, setModalOpen] = useState(false)

    // hook for ModalSelectImage toggling (second page)
    const [modalSelectOpen, setModalSelectOpen] = useState(false)

    // hook for Get Images btn UI visibility
    const [addUrl, setAddUrl] = useState(false)

    // hook for URL value handling in ModalInsertImage (first page)
    const [urlValue, setUrlValue] = useState('')

    // hook for URL value handling in modalSelectImage (second page)
    const [urlValueSecondPage, setUrlValueSecondPage] = useState('')

    // hook for Alt Text btn UI visibility
    const [altText, setAltText] = useState(true)

    // hook for dragDrop component for uploading an image
    const [files, setFiles] = useState([])

    // hook for fetching images from BE
    const [browserPictures, setBrowserPictures] = useState([])

    // hook for save selected images inside savebox
    const [saveImage, setSaveImage] = useState([])

    /* ======== FUNCTIONS ========*/
    // function for login and plus btn toggling
    const closeLoginToggle = () => {
        setLoginPage(false)
        setPlusButton(true)
    }

    // function for plus btn hovering
    const plusBtnHoverToggle = () => setPlusBtnIsHovered(!plusBtnHovered)

    // function for ModalInsertImage toggling (first page)
    const modalOpenToggle = () => {
        setModalOpen(true)
        setModalSelectOpen(false)
    }

    // function for ModalSelectImage toggling (second page) and fetching from first URL value
    const modalSelectOpenToggle = () => {
        //TODO should be based on .env variable, for now leave as is.
        // Maybe, change this to GET, because we are requesting not pushing new content in.
        // GET is more intuitive
        if (urlValue) {
            fetch('http://localhost:5000/puppeteer', {
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
        } else {
            alert('Please insert a valid URL')
            // TODO check when an URL is valid or not
        }
    }

    // function for uploading images to BE
    const uploadPicture = async (e) => {
        // ignore event, maybe stop propagation
        e.stopPropagation()
        e.preventDefault()
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
        if (urlValueSecondPage) {
            setBrowserPictures([])
            fetch('http://localhost:5000/puppeteer', {
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
        } else {
            alert('Please insert a valid URL')
            // TODO check when an URL is valid or not
        }
    }

    const altTextToggle = () => setAltText(!altText)

    // function for save selected image in savebox (second page)
    // logic for keeping saveImage array length to maximum 4 elements
    const setSaveImageToggle = (num) => {
        saveImage.length >= 4 && saveImage.pop()
        setSaveImage([...saveImage, browserPictures[num]])
    }

    // function for remove selected image from savebox (second page)
    const removeSaveImageToggle = (num) => {
        saveImage.splice(num, 1)
        setSaveImage([...saveImage])
    }

    // function for going back from ModalSelectImage (second page) to ModalInsertImage (first page) and clear the saveImage array and remove all previous data, soft resetter to app
    const resetterToggle = () => {
        setModalOpen(true)
        setModalSelectOpen(false)
        setAddUrl(false)
        setUrlValue('')
        setUrlValueSecondPage('')
        setAltText(true)
        setFiles([])
        setBrowserPictures([])
        setSaveImage([])
    }

    // function for add selected pictures inside savebox (second page) to ModalInsertImage (first page)
    const saveImagesToModalInsertImageToggle = () => {
        setModalOpen(!modalOpen)
        setModalSelectOpen(!modalSelectOpen)
    }

    return (
        <Context.Provider
            value={{
                browserPictures,
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
                saveImage,
                setSaveImageToggle,
                removeSaveImageToggle,
                resetterToggle,
                saveImagesToModalInsertImageToggle,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Provider
