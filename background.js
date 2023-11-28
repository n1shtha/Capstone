
// Background service worker

const targetDomain = "https://www.irctc.co.in" // Ensures that contentScript is only being injected on our target domain as we are not statically injecting in manifest.json

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  })
  .then(() => { console.log("Successfully updated badge text to 'OFF'.") })
  .catch((err) => console.log(err));

  chrome.tabs.reload(); // Reloading the webpage upon installation triggers the extension's functionalities

  chrome.action.setBadgeText({ // Sets extension badge to "ON" as an information marker for the user
      text: "ON",
  })
  .then(() => { console.log("Successfully injected contentScript upon extension installation and updated badge text to 'ON'."); })
  .catch((err) => console.log(err));
});

// Checks if the tab is updated (reload or navigating to another page), if so, then contentScript is injected on the new tab

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url.startsWith(targetDomain)) { // Only injecting the contentScript when status is complete because changeInfo has 4 states
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["contentScript.js"]
    })
    .then(() => { console.log("Successfully injected contentScript upon tab update."); })
    .catch((err) => console.log(err));

    chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["contentScript.css"]
    })
    .then(() => { console.log("Successfully injected contentScript.css upon tab update."); })
    .catch((err) => console.log(err));
  }
});

 