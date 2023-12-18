
// Background service worker

// ------------------------------------ Helper functions import and declarations -----------------------------------------//

// Helper function to transfer styles from one element to another 

function styleTransfer(sourceElementSelector, destinationElementSelector) {
  const sourceElements = document.getElementsByClassName(sourceElementSelector);
  const destinationElements = document.getElementsByClassName(destinationElementSelector);
  const firstSourceElement = sourceElements[0];
  console.log(firstSourceElement);

  if (firstSourceElement && destinationElements) {
    Array.from(destinationElements).forEach(function (currentDestinationElement) {
      firstSourceElement.classList.forEach((className) => {
        currentDestinationElement.classList.add(className);
        console.log("Successfully transferred styles for the current destination element.");
      });
    });
  } else {
    console.log("Either source element or destination element not found.");
  }
}

// Helper function to create a button 

function createButton(parentSelector, text, granularityType) {
  const button = document.createElement("button");
  console.log("Successfully created button.");
  button.textContent = text;

  if (granularityType === "Selector") {
    var parentLocation = document.querySelector(parentSelector);
  } else if (granularityType === "ID") {
    var parentLocation = document.getElementById(parentSelector);
  } else if (granularityType === "Class") {
    var parentLocation = document.getElementsByClassName(parentSelector);
    console.log(parentLocation);
  } else {
    console.log("Granularity type invalid. Please try again.");
  }

  if (parentLocation) {
    if (parentLocation instanceof HTMLCollection) {
      console.log("Element array detected.");
      Array.from(parentLocation).forEach(function(currentParent) {
        console.log(currentParent);
        currentParent.appendChild(button.cloneNode(true));
        console.log("Successfully inserted button.");
      });
    } else {
      parentLocation.appendChild(button);
    }
  } else {
    console.log("Element doesn't exist.");
  }
}

// Helper function to remove an element

function removeElement(selector, granularityType, removalType) {

  if (granularityType === "Selector") {
    var selectedElement = document.querySelector(selector);
  } else if (granularityType === "ID") {
    var selectedElement = document.getElementById(selector);
  } else if (granularityType === "Class") {
    var selectedElement = document.getElementsByClassName(selector);
    console.log(selectedElement);
  } else {
    console.log("Granularity type invalid. Please try again.");
  }

  if (selectedElement) {
    if (removalType === "Display") {
      if (selectedElement instanceof HTMLCollection) {
        console.log("Element array detected.");
        Array.from(selectedElement).forEach(function(currentElement) {
          currentElement.style.display = "none";
        });
      } else {
        selectedElement.style.display = "none";
      }
      console.log("Element successfully found and removed.");
    } else if (removalType === "Visibility") {
      if (selectedElement instanceof HTMLCollection) {
        console.log("Element array detected.");
        Array.from(selectedElement).forEach(function(currentElement) {
          currentElement.style.visibility = "hidden";
        });
      } else {
        selectedElement.style.visibility = "hidden";
      }
      console.log("Element successfully found and removed.");
    } else {
      console.log("Invalid type of element removal.");
    }
  } else {
    console.log("selectedElement doesn't exist.");
  }
}

// Helper function to create a tooltip

function createTooltip(selector, text) {

  const tooltipLocation = document.querySelector(selector);

  if (tooltipLocation) {
    const tooltip = document.createElement("div");
    tooltip.textContent = text;
    tooltip.classList.add("tooltip-box");

    tooltipLocation.appendChild(tooltip);

    tooltipLocation.addEventListener("mouseover", displayTooltip); // Accounts for hover functionality
    tooltipLocation.addEventListener("mouseout", hideTooltip); // Accounts for hover functionality

    function displayTooltip() {
      tooltip.style.display = "block";
    }

    function hideTooltip() {
      tooltip.style.display = "none";
    }
    console.log("Successfully created tooltip.");
  } else {
    console.log("Unable to find location and create tooltip.");
  }
}

// Helper function to create image search instance

function imageSearch(selector) {

  console.log("Entered functionality");
  const exploreButton = document.querySelector(selector);
  const imageTerm = "https://www.google.com/search?tbm=isch&q="; // Baseline image query

  let searchTerm = exploreButton.textContent; // We go to the parent node of the element we appended our button to
  searchTerm = searchTerm.trim().replace(/ /g, "+"); // Creating search query to be appended to baseline image query
  queryUrl = imageTerm.concat(searchTerm);
  console.log(queryUrl);

  if (exploreButton) {
    exploreButton.style.cursor = "pointer"; // Changing cursor style so that the user knows this is now a clickable element

    exploreButton.addEventListener("click", () => { // Upon clicking the explore button, this sends a message to the background service worker
      chrome.runtime.sendMessage({ action: "executeSearch", query: queryUrl })
      .then(() => console.log("Successfully created new tab to display search results."))
      .catch((err) => console.log(err));
    });
  } else {
    console.log("Button doesn't exist on this page.");
  }
}

// ------------------------------------ Scripting and other function calls -----------------------------------------//


// Functionality to implement button insertion

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "insertion") {
    console.log("Received request for button insertion.");
    chrome.scripting.executeScript({
      target: { tabId: request.currentTab },
      func: createButton,
      args: [request.element, request.text, request.granularity]
    })
    .then(() => { console.log("Successfully executed button insertion."); })
    .catch((err) => console.log(err));
  }
});

// Functionality to implement element removal

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "removal") {
    console.log("Received request for element removal.");
    chrome.scripting.executeScript({
      target: { tabId: request.currentTab },
      func: removeElement,
      args: [request.element, request.granularity, request.type]
    })
    .then(() => { console.log("Successfully executed element removal."); })
    .catch((err) => console.log(err));
  }
});

// Functionality to implement tooltip creation and insertion

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "tooltip") {
    console.log("Received request for tooltip insertion.");
    chrome.scripting.insertCSS({ // 
      target: { tabId: request.currentTab },
      files: ["contentScript.css"]
    });
    chrome.scripting.executeScript({
      target: { tabId: request.currentTab },
      func: createTooltip,
      args: [request.element, request.text]
    })
    .then(() => { console.log("Successfully executed tooltip insertion."); })
    .catch((err) => console.log(err));
  }
});

// Functionality to create the image search instance on the selected text 

chrome.runtime.onMessage.addListener((request) => {

  if(request.action === "initialiseSearch") {
    console.log(request.currentTab);

    chrome.scripting.executeScript({
      target: { tabId: request.currentTab },
      func: imageSearch,
      args: [request.element]
    })
    .then(() => { console.log("Successfully initialised image search instance."); })
    .catch((err) => console.log(err));
  }
});

// Functionality to execute the image search instance on the selected text

chrome.runtime.onMessage.addListener((request) => {

  if(request.action === "executeSearch") {
    console.log(request.currentTab);

    chrome.tabs.create({ url: request.query })
    .then(() => { console.log("Successfully created new tab to display search results."); })
    .catch((err) => console.log(err));
  } 
});

// Functionality to transfer styles from one element to another

chrome.runtime.onMessage.addListener((request) => {

  if(request.action === "transfer") {
    console.log(request.currentTab);

    chrome.scripting.executeScript({
      target: { tabId: request.currentTab },
      func: styleTransfer,
      args: [request.sourceElement, request.destinationElement]
    })
    .then(() => { console.log("Successfully executed style transfer."); })
    .catch((err) => console.log(err));
  }
});