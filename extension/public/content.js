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
    height: 95vh;
    width: 90vw;
    border: none;
    border-radius: 15px;
    background-color: white;
    box-shadow: 0px 0px 5px 50px rgba(0, 0, 0, 0.75);
    overflow: hidden;
    `
    )
    modal.innerHTML = `<iframe id="popup-content"; style="height:100%; width:100%"></iframe>
    <div style="position:absolute; top: 8px; right: 8px;">
        <button style="width: 30px; height: 30px; border: none; border-radius: 50%; background: linear-gradient(#ffffff, #ffffff), linear-gradient(#ffffff, #ffffff), #e60023; background-position: center; background-size: 50% 2px, 2px 50%; background-repeat: no-repeat; transform: rotate(45deg);" />
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

const getData = async () => {
    let imagesOnBrowser = []
    try {
        imagesOnBrowser = await fetch('http://localhost:5000/puppeteer', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                url: window.location.href,
            }),
        })
            .then((res) => res.status === 200 && res.json())
            .then((data) => {
                return data.images
            })
    } catch {
        //i'm lazy
    }
    const imagesToSend = await imagesOnBrowser.map((image) => {
        return {
            album: '',
            filename: '',
            caption: image.imageAlt,
            origin: window.location.origin,
            size: {
                width: image.imageWidth,
                height: image.imageHeight,
            },
            ratio: image.ratio,
            src: image.imageSrc,
        }
    })
    chrome.runtime.sendMessage({
        from: 'content',
        message: JSON.stringify(imagesToSend),
    })
}
