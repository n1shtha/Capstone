chrome.scripting.registerContentScripts([{
  id: "test",
  js: ["contentScriptTest.js"],
  persistAcrossSessions: true,
  matches: ["https://www.irctc.co.in/nget/train-search"],
  runAt: "document_end",
}]).then(() => console.log("complete")).catch((err) => console.warn("error", err));

/** 

let enabled = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "toggleFunction") {
    enabled = !enabled;

    if (enabled) {
      console.log('Functionality is now enabled.');
      injectContent();
    } else {
      console.log('Functionality is now disabled.');
      removeContent();
    }
  }
});

function injectContent() {
  chrome.scripting.registerContentScripts([{
    "id": "test",
    "matches": ["https://www.irctc.co.in/*"],
    "css": ["contentScript.css"],
    "js": ["contentScript.js"]
  }], _ => { console.log("Done.")}
  
  );
}

function removeContent() {
  chrome.scripting.unregisterContentScripts({"ids":["test"]}, _ => {console.log("Done")});
}

*/