// The same contentScript will be inserted across all webpages because (in most cases) our element selectors are unique and specific, meaning there won't be any overlap with elements from another page
// For the above reason, using var (outside of functions) and not const

// Creates a button to be appended at the provided location in the document along with the given text

function createButton(text) {

  const button = document.createElement("button");
  console.log("Successfully created button.");
  button.textContent = text;

  // [can add more customisation here, such as setting an ID/attribute for the button (differentiating between image and text buttons)]

  return button;
}

// Inserts element by appending to the provided parent location

function insertChildElement(parentSelector, childSelector) {

  const parentLocation = document.querySelector(parentSelector);

  if (parentLocation) {
    parentLocation.appendChild(childSelector); // [could experiment with the usage of append() if we want to add multiple objects at once]
    console.log("Successfully appended element to specified parent location.");
  } else {
    console.log("Unable to append element to the specified parent location.");
  }
}

// Adds a custom styling class to a specified element

function addCustomClass(selector, customClass) {

  const modifiedElement = document.querySelector(selector); 

  if (modifiedElement) {
    modifiedElement.classList.add(customClass);
    console.log("Successfully modified the element's style.");
  } else {
    console.log("Unable to modify the element's style.");
  }
}

// Removes an element either by changing display or visibility type

function removeElement(selector, type) {

  const selectedElement = document.querySelector(selector);
  
  if (selectedElement) {
    if (type === "display") {
      selectedElement.style.display = "none";
      console.log("Element successfully found and removed.");
    } else if (type === "visibility") {
      selectedElement.style.visibility = "hidden";
      console.log("Element successfully found and removed.");
    } else {
      console.log("Invalid type of element removal.");
    }
  }
}

// Creates a tooltip box that pops up when hovered over the selected element

function createTooltip(selector, text) {

  const tooltipLocation = document.querySelector(selector);

  if (tooltipLocation) {
    const tooltip = document.createElement("div");
    tooltip.textContent = text;
    tooltip.classList.add("tooltip-box");

    insertChildElement(selector, tooltip);

    tooltipLocation.addEventListener("mouseover", displayTooltip); 
    tooltipLocation.addEventListener("mouseout", hideTooltip);

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

// Modifications required on the homepage
// Using the highly detailed ">" selector path because it gives us the unique, specific location of our chosen element

var checkboxOptions = "#divMain > div > app-main-page > div > div > div.level_2.slanted-div > div.col-xs-12.remove-padding.tbis-box.tbis-box-pad > div:nth-child(1) > app-jp-input > div > form > div:nth-child(4)";
var secondaryNavbar = "body > app-root > app-home > div.header-fix > app-header > div.col-sm-12.h_container > div.text-center.h_main_div > div.row.col-sm-12.h_head2 > nav";
var infoButtonLocation = "#divMain > div > app-main-page > div > div > div.level_2.slanted-div > div.col-xs-12.remove-padding.tbis-box.tbis-box-pad > div:nth-child(1) > app-jp-input > div > form > div:nth-child(3)";
var advertBanner = "#divMain > div > app-main-page > div > div > div:nth-child(12)";
var holidaysInfo = "#divMain > div > app-main-page > div > div > div:nth-child(14)";

// Modifications required on the ticket page [will be adding more]

var imgButtonLocation = "#divMain > div > app-train-list > div.col-sm-9.col-xs-12 > div > div.ng-star-inserted > div:nth-child(1) > div.form-group.no-pad.col-xs-12.bull-back.border-all > app-train-avl-enq > div.col-xs-12 > div > span";

// Compilation of elements that need to be removed and subsequent removal

var removeElementsDisplay = [checkboxOptions, advertBanner, holidaysInfo]; // [will need an appropriate system/pattern to gaguge whether element's display or visibility should be modified]

for (let i = 0; i < removeElementsDisplay.length; i++) {
  removeElement(removeElementsDisplay[i], "display");
}

var removeElementsVisibility = [secondaryNavbar];

for (let i = 0; i < removeElementsVisibility.length; i++) {
  removeElement(removeElementsVisibility[i], "visibility");
}

// Creating and styling information buttons 

var infoButton = createButton("Info");
insertChildElement(infoButtonLocation, infoButton);

// [instead of manually copying the selector for newly created elements, we could search the variable name for "Button" and if it exists, append "> button" to the selector of its parent which we have already]

infoButton = "#divMain > div > app-main-page > div > div > div.level_2.slanted-div > div.col-xs-12.remove-padding.tbis-box.tbis-box-pad > div:nth-child(1) > app-jp-input > div > form > div:nth-child(3) > button";
addCustomClass(infoButton, "btn-primary");

var imgButton = createButton("Image");
insertChildElement(imgButtonLocation, imgButton);

imgButton = "#divMain > div > app-train-list > div.col-sm-9.col-xs-12 > div > div.ng-star-inserted > div:nth-child(1) > div.form-group.no-pad.col-xs-12.bull-back.border-all > app-train-avl-enq > div.col-xs-12 > div > span > button";
addCustomClass(imgButton, "btn-primary");

var ticketingInfo = "LOWER BERTH/SR CITIZEN applies to males over 60 and females over 58. TATKAL applies to fixed ticket charges. PREMIUM TATKAL applies to dynamic ticket charges.";
createTooltip(infoButton, ticketingInfo);















