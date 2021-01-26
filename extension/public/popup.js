const getData = () => {
    let imagesOnBrowser = []
    let imagesToSend = []
    const getImages = async () => {
        imagesOnBrowser = Array.from(document.querySelectorAll('img'))
    }
    const sortImages = async () => {
        imagesOnBrowser.map(
            (image) =>
                (imagesToSend = [
                    ...imagesToSend,
                    {
                        filename: 'filename',
                        caption: 'caption',
                        origin: 'origin',
                        size: { width: image.width, height: image.height },
                        ratio: 'ratio',
                        src: image.src,
                    },
                ])
        )
    }
    const sendImages = async () => {
        imagesToSend.map((image, index) =>
            window.localStorage.setItem(
                `${index}`,
                JSON.stringify({
                    caption: image.caption,
                    filename: image.filename,
                    origin: image.origin,
                    size: {
                        width: image.size.width,
                        height: image.size.height,
                    },
                    ratio: image.ratio,
                    src: image.src,
                })
            )
        )
    }

    getImages().then(sortImages().then(sendImages()))
}