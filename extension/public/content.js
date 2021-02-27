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
    const imagesOnBrowser = Array.from(document.querySelectorAll('img'))
    const imagesToSend = imagesOnBrowser.map((image) => {
        return {
            album: '',
            filename: '',
            caption: image.alt,
            origin: window.location.origin,
            size: {
                width: image.width,
                height: image.height,
            },
            src:
                image.getAttribute('data-lazy-src') ||
                image.getAttribute('data-src') ||
                image.getAttribute('src'),
        }
    }).filter(image=>image.src && image.size.width > 100 && image.size.height > 100)
    chrome.runtime.sendMessage({
        from: 'content',
        message: JSON.stringify(imagesToSend),
    })
}
