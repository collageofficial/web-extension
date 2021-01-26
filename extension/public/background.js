chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'popup-modal' })
    })
})

/* chrome.runtime.onMessage.addListener(function (
    message,
    sender,
    sendResponse
  ) {;
    alert(message.message);
  });

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "message 1" ) {
       alert("hello");console.log("started")
           }
    }
  ); */

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    alert(message.message)
    chrome.runtime.sendMessage({from:"background", message:message.message});

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
