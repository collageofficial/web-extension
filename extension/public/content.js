chrome.runtime.onMessage.addListener((request) => {
    if (request.type === 'popup-modal') {
        showModal()
        getData()
    }
})

const showModal = () => {
    const modal = document.createElement('dialog')
    modal.setAttribute(
        'style',
        `
    height:80vh;
    width:80vw;
    position: absolute;
    top: 50%;
    margin-top: -40vh;
    left:50%;
    margin-left: -40vw;
    border: none;
    border-radius:20px;
    background-color:white;
     box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.7);
    `
    )
    modal.innerHTML = `<iframe id="popup-content"; style="height:100%; width:100%"></iframe>
    <div style="position:absolute; top:0px; left:5px;">
    <button style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 20px;">x</button>
    </div>`
    document.body.appendChild(modal)
    const dialog = document.querySelector('dialog')
    dialog.showModal()
    const iframe = document.getElementById('popup-content')
    iframe.src = chrome.extension.getURL('index.html')
    iframe.frameBorder = 0
    dialog.querySelector('button').addEventListener('click', () => {
        dialog.close()
    })
}

const getData = () => {
    let imagesOnBrowser = []
    let imagesToSend = []
    const getImages = async () => {
        imagesOnBrowser = Array.from(document.querySelectorAll('img'))
        console.log("1")
    }
    const sortImages = async () => {
        console.log(imagesOnBrowser)
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
        console.log("2")
    }
    const sendImages = async () => {
        /* THIS IS A DIFFERENT DOM. I NEED TO PASS IT TO POPUP.JS */
        console.log(imagesToSend)
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
        console.log("3")
    }

    getImages().then(sortImages().then(sendImages().then(console.log(window.localStorage))))
}