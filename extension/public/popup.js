let imagesToStore = []

const askForImages = () => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        var activeTab = tabs[0]
        chrome.tabs.sendMessage(activeTab.id, {
            message: 'give me pictures, please',
        })
    })
}

const recieveImages = async (recieved) => {
    localStorage.clear()
    imagesToStore = JSON.parse(recieved.message)
    console.log(imagesToStore)
}

const storeImages = async () => {
    imagesToStore.map((image, index) =>
        window.localStorage.setItem(
            `${index}`,
            JSON.stringify({
                caption: image.caption,
                created: image.created,
                filename: image.filename,
                origin: image.origin,
                alt: image.alt,
                size: {
                    width: image.size.width,
                    height: image.size.height,
                },
            })
        )
    )
}

const initialize = async () => {
    imagesToStore = []
}

window.addEventListener('load', () => {
    document.getElementById('getImages').addEventListener('click', () => {
        askForImages()
    })
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    recieveImages(message).then(storeImages().then(initialize()))
})
