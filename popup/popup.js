// Funcionality to expand interventions in accordion style

document.addEventListener("DOMContentLoaded", () => {
  const interventionContents = document.querySelectorAll(
    ".intervention-content"
  );

  interventionContents.forEach((content) => {
    content.style.display = "none";
  });

  const buttons = document.querySelectorAll(
    ".intervention-action .expand-button"
  );
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => expandIntervention(index));
  });
});

function expandIntervention(index) {
  console.log(`interventionContent${index + 1}`);
  const interventionContent = document.getElementById(
    `interventionContent${index + 1}`
  );
  if (
    interventionContent.style.display === "none" ||
    interventionContent.style.display === ""
  ) {
    interventionContent.style.display = "block";
  } else {
    interventionContent.style.display = "none";
  }
}

// Funcionality to open help information in modal overlay style

document.addEventListener("DOMContentLoaded", function () {
  // Select all open and close buttons
  const openModalButtons = document.querySelectorAll(".open-modal");
  const closeModalButtons = document.querySelectorAll(".close-modal");

  // Function to open the modal
  openModalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "flex";
      }
    });
  });

  // Function to close the modal
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  // Optional: Close modal if the user clicks outside the content
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", function (event) {
      if (event.target === this) {
        this.style.display = "none";
      }
    });
  });
});

// Functionality to transfer styles from one element to another

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var currentTabId = tabs[0].id;

  var button = document.getElementById("styleTransferConfirmation");

  if (button) {
    button.addEventListener("click", function () {
      var sourceElementSelector = document.getElementById(
        "sourceElementLocation"
      ).value;
      console.log(sourceElementSelector);
      var destinationElementSelector = document.getElementById(
        "destinationElementLocation"
      ).value;
      console.log(destinationElementSelector);

      chrome.runtime
        .sendMessage({
          action: "transfer",
          currentTab: currentTabId,
          sourceElement: sourceElementSelector,
          destinationElement: destinationElementSelector,
        })
        .then(() => {
          console.log("Successfully sent request for style transfer.");
        })
        .catch((err) => console.log(err));
    });
  } else {
    console.log("Element not found.");
  }
});

// Functionality to create a helper button based on the location and the user's input text

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var currentTabId = tabs[0].id;

  var button = document.getElementById("buttonConfirmation");

  if (button) {
    button.addEventListener("click", function () {
      var elementSelector = document.getElementById("buttonLocation").value;
      console.log(elementSelector);
      var elementText = document.getElementById("buttonText").value;
      console.log(elementText);
      var elementGranularityType = document.querySelector(
        'input[name="buttonGranularityType"]:checked'
      ).value;
      console.log(elementGranularityType);

      chrome.runtime
        .sendMessage({
          action: "insertion",
          currentTab: currentTabId,
          element: elementSelector,
          text: elementText,
          granularity: elementGranularityType,
        })
        .then(() => {
          console.log("Successfully sent request for button insertion.");
        })
        .catch((err) => console.log(err));
    });
  } else {
    console.log("Element not found.");
  }
});

// Functionality to implement removal of an element based on the selector and element hiding type

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var currentTabId = tabs[0].id;
  // console.log(currentTabId);

  var button = document.getElementById("removalConfirmation");

  if (button) {
    button.addEventListener("click", function () {
      var elementSelector = document.getElementById("removalInput").value;
      console.log(elementSelector);
      var elementGranularityType = document.querySelector(
        'input[name="removalGranularityType"]:checked'
      ).value;
      console.log(elementGranularityType);
      var elementRemovalType = document.querySelector(
        'input[name="removalType"]:checked'
      ).value;
      console.log(elementRemovalType);

      chrome.runtime
        .sendMessage({
          action: "removal",
          currentTab: currentTabId,
          element: elementSelector,
          granularity: elementGranularityType,
          type: elementRemovalType,
        })
        .then(() => {
          console.log("Successfully sent request for element removal.");
        })
        .catch((err) => console.log(err));
    });
  } else {
    console.log("Element not found.");
  }
});

// Functionality to implement insertion of a tooltip hoverbox based on the selector and text entered by input

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var currentTabId = tabs[0].id;
  console.log(currentTabId);

  var button = document.getElementById("tooltipConfirmation");

  if (button) {
    button.addEventListener("click", function () {
      var elementSelector = document.getElementById("tooltipLocation").value;
      // console.log(elementSelector);
      var elementText = document.getElementById("tooltipText").value;
      console.log(elementText);

      chrome.runtime
        .sendMessage({
          action: "tooltip",
          currentTab: currentTabId,
          element: elementSelector,
          text: elementText,
        })
        .then(() => {
          console.log("Successfully sent request for tooltip insertion.");
        })
        .catch((err) => console.log(err));
    });
  } else {
    console.log("Element not found.");
  }
});

// Functionality to implement insertion of Google search by image

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var currentTabId = tabs[0].id;
  console.log(currentTabId);

  var button = document.getElementById("imageSearchConfirmation");

  if (button) {
    button.addEventListener("click", function () {
      var imageSearchLocation = document.getElementById(
        "imageSearchLocation"
      ).value;
      console.log(imageSearchLocation);

      chrome.runtime
        .sendMessage({
          action: "initialiseSearch",
          currentTab: currentTabId,
          element: imageSearchLocation,
        })
        .then(() => {
          console.log(
            "Successfully sent request for image search instance creation."
          );
        })
        .catch((err) => console.log(err));
    });
  } else {
    console.log("Element not found.");
  }
});
