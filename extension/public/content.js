/* console.log("content.js"); */

let imagesToSend = []
let imagesOnBrowser = []

const getImages = async () => {
    imagesOnBrowser = Array.from(document.querySelectorAll('img'))
}

const sortImages = async () => {
    imagesOnBrowser.map(
        (image) =>
            (imagesToSend = [
                ...imagesToSend /* get correct data */,
                {
                    filename: 'name',
                    caption: 'caption',
                    origin: image.src,
                    size: { width: '', height: '' },
                    created: '',
                    alt: image.alt,
                },
            ])
    )
}

const sendImages = async () => {
    chrome.runtime.sendMessage({
        from: 'content',
        message: JSON.stringify(imagesToSend),
    })
}

const initialize = async () => {
    imagesToSend = []
    imagesOnBrowser = []
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    request.message === 'give me pictures, please' &&
        getImages().then(sortImages().then(sendImages().then(initialize())))
})
