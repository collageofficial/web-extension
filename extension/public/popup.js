window.addEventListener('load', () => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        var activeTab = tabs[0]
        chrome.tabs.sendMessage(activeTab.id, {
            message: 'give me pictures, please',
        })
    })
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    let imagesToStore = []

    const recieveImages = async (recieved) => {
        localStorage.clear()
        imagesToStore = JSON.parse(recieved.message)
    }
    const storeImages = async () => {
        imagesToStore.map((image, index) =>
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

    recieveImages(message).then(storeImages())
})
