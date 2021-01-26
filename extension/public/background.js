chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'popup-modal' })
    })
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    JSON.parse(message.message).map((image, index) =>
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
})
