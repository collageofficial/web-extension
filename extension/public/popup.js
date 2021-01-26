/* chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
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
        ))

    })
console.log(chrome)
console.log(chrome.runtime)
console.log(chrome.query)
console.log("popup.js")
alert("popup") */