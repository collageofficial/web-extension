chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    request.message === 'give me pictures, please' && getData()
})

const getData = () => {
    let imagesToSend = []
    let imagesOnBrowser = []

    const getImages = async () => {
        imagesOnBrowser = Array.from(document.querySelectorAll('img'))
    }
    const sortImages = async () => {
        imagesOnBrowser.map(
            (image) =>
                (imagesToSend = [
                    ...imagesToSend,
                    {/* FIND THOSE DATA */
                        /* need to filter. i dont need to see small pictures (like logo or stuff like that) */
                        /* need to hide broken pictures */
                        filename: 'filename',
                        caption: 'caption',
                        origin: 'origin',
                        size: { width: image.width, height: image.height },
                        ratio: 'ratio',
                        src: image.src,
                        created: 'created',
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

    getImages().then(sortImages().then(sendImages()))
}