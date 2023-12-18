
// Functionality to transfer styles from one element to another

chrome.tabs.query( { active: true, currentWindow: true }, function(tabs) {

  var currentTabId = tabs[0].id;

  var button = document.getElementById("styleTransferConfirmation");

  if (button) {
    button.addEventListener("click", function() {

      var sourceElementSelector = document.getElementById("sourceElementLocation").value;
      console.log(sourceElementSelector);
      var destinationElementSelector = document.getElementById("destinationElementLocation").value;
      console.log(destinationElementSelector);

      chrome.runtime.sendMessage( { action: "transfer", currentTab: currentTabId, sourceElement: sourceElementSelector, destinationElement: destinationElementSelector })
      .then(() => { console.log("Successfully sent request for style transfer."); })
      .catch((err) => console.log(err))
    });
  } else {
    console.log("Element not found.");
  }
});

// Functionality to create a helper button based on the location and the user's input text

chrome.tabs.query( { active: true, currentWindow: true }, function(tabs) {

  var currentTabId = tabs[0].id;

  var button = document.getElementById("buttonConfirmation");

  if (button) {
    button.addEventListener("click", function() {

      var elementSelector = document.getElementById("buttonLocation").value;
      console.log(elementSelector);
      var elementText = document.getElementById("buttonText").value;
      console.log(elementText);
      var elementGranularityType = document.querySelector('input[name="buttonGranularityType"]:checked').value;
      console.log(elementGranularityType);

      chrome.runtime.sendMessage( { action: "insertion", currentTab: currentTabId, element: elementSelector, text: elementText , granularity: elementGranularityType, })
      .then(() => { console.log("Successfully sent request for button insertion."); })
      .catch((err) => console.log(err))
    });
  } else {
    console.log("Element not found.");
  }
});

// Functionality to implement removal of an element based on the selector and element hiding type

chrome.tabs.query( { active: true, currentWindow: true }, function(tabs) {

  var currentTabId = tabs[0].id;
  // console.log(currentTabId);

  var button = document.getElementById("removalConfirmation");

  if (button) {
    button.addEventListener("click", function() {

      var elementSelector = document.getElementById("removalInput").value;
      console.log(elementSelector);
      var elementGranularityType = document.querySelector('input[name="removalGranularityType"]:checked').value;
      console.log(elementGranularityType);
      var elementRemovalType = document.querySelector('input[name="removalType"]:checked').value;
      console.log(elementRemovalType);

      chrome.runtime.sendMessage( { action: "removal", currentTab: currentTabId, element: elementSelector, granularity: elementGranularityType, type: elementRemovalType })
      .then(() => { console.log("Successfully sent request for element removal."); })
      .catch((err) => console.log(err))
    });
  } else {
    console.log("Element not found.");
  }
});

// Functionality to implement insertion of a tooltip hoverbox based on the selector and text entered by input

chrome.tabs.query( { active: true, currentWindow: true }, function(tabs) {

  var currentTabId = tabs[0].id;
  console.log(currentTabId);

  var button = document.getElementById("tooltipConfirmation");

  if (button) {
    button.addEventListener("click", function() {

      var elementSelector = document.getElementById("tooltipLocation").value;
      // console.log(elementSelector);
      var elementText = document.getElementById("tooltipText").value;
      console.log(elementText);

      chrome.runtime.sendMessage( { action: "tooltip", currentTab: currentTabId, element: elementSelector, text: elementText })
      .then(() => { console.log("Successfully sent request for tooltip insertion."); })
      .catch((err) => console.log(err))
    });
  } else {
    console.log("Element not found.");
  }
});

// Functionality to implement insertion of Google search by image 

chrome.tabs.query( { active: true, currentWindow: true }, function(tabs) {

  var currentTabId = tabs[0].id;
  console.log(currentTabId);

  var button = document.getElementById("imageSearchConfirmation");

  if (button) {
    button.addEventListener("click", function() {

      var imageSearchLocation = document.getElementById("imageSearchLocation").value;
      console.log(imageSearchLocation);

      chrome.runtime.sendMessage( { action: "initialiseSearch", currentTab: currentTabId, element: imageSearchLocation })
      .then(() => { console.log("Successfully sent request for image search instance creation."); })
      .catch((err) => console.log(err))
    });
  } else {
    console.log("Element not found.");
  }
});





