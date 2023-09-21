document.addEventListener("DOMContentLoaded", function () {
  var clickButton = document.getElementById("clickButton");
  clickButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, { file: "content.js" });
    });
  });
});
