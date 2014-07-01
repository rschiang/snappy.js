chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript(null, {file: "html2canvas.0.4.1.js"}, function() {
      chrome.tabs.executeScript(null, {file: "snappy.js"});
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var canvas = document.createElement("canvas");
    var img = new Image();
    var callback = function() {
        canvas.getContext("2d").drawImage(img, 0, 0);
        sendResponse(canvas.toDataURL());
    };
    img.addEventListener("load", callback);
    img.addEventListener("error", function() {
        sendResponse("error:Fetch failed");
    })

    img.src = request.url;
    if (img.complete) callback();
});
