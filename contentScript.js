// Trial to check whether contentScript is persisting across tabs, modifies home page and ticket page

// Modifies the checkbox options on the homepage to be hidden

const checkboxOptions = document.querySelector("#divMain > div > app-main-page > div > div > div.level_2.slanted-div > div.col-xs-12.remove-padding.tbis-box.tbis-box-pad > div:nth-child(1) > app-jp-input > div > form > div:nth-child(4)");

if (checkboxOptions) {
  checkboxOptions.style.display = "none";
} else {
  alert("Unable to find/stylise the selected element!");
}






















// home page functionality

/** 

var secondNavBar = document.querySelector(
  "#divMain > div > app-main-page > div > div > div.level_2.slanted-div > div.col-xs-12.remove-padding.tbis-box.tbis-box-pad > div:nth-child(1) > app-jp-input > div > form > div:nth-child(4)"
);

if (secondNavBar) {
  secondNavBar.style.display = "none";
}

var element2 = document.querySelector(
  "body > app-root > app-home > div.header-fix > app-header > div.col-sm-12.h_container > div.text-center.h_main_div > div.row.col-sm-12.h_head2 > nav"
);

if (element2) {
  element2.style.visibility = "hidden";
}

var element3 = document.querySelector(
  "#divMain > div > app-main-page > div > div > div:nth-child(14)"
);

if (element3) {
  element3.style.display = "none";
}

var element4 = document.querySelector(
  "#divMain > div > app-main-page > div > div > div:nth-child(12)"
);

if (element4) {
  element4.style.display = "none";
}

function createButton() {
  var btn = document.createElement("button");
  btn.textContent = "Info";
  btn.classList.add("btn-primary-custom");
  btn.setAttribute(
    "toolData",
    "LOWER BERTH/SR CITIZEN applies to males over 60 and females over 58. TATKAL applies to fixed ticket charges. PREMIUM TATKAL applies to dynamic ticket charges."
  );
  // btn.classList.add("fa-info-circle");
  btn.addEventListener("click", function () {
    alert("Info: This is a placeholder!");
  });

  return btn;
}

var path = document.querySelector(
  "#divMain > div > app-main-page > div > div > div.level_2.slanted-div > div.col-xs-12.remove-padding.tbis-box.tbis-box-pad > div:nth-child(1) > app-jp-input > div > form > div:nth-child(3)"
);

if (path) {
  var button = createButton();
  path.appendChild(button);
}

var testElement = document.querySelector(
  "#alert-section > div > div > ul > li:nth-child(2) > div > b > font"
);

if (testElement) {
  testElement.setAttribute("color", "blue");
} else {
  console.log("Unable to find element. Please try a different selector.");
}

*/

// test functionality to save form progress

/** 

chrome.storage.sync.get(['#destination > span > input'], function(result) {
  
  const userDataInput = document.querySelector('#ui-panel-12-content > div > div.ng-star-inserted > div.col-sm-11.col-xs-12.remove-padding.pull-left > div > app-passenger > div > div:nth-child(1) > span > div.Layer_7.col-sm-3.col-xs-12 > p-autocomplete > span > input');
  if (userDataInput) {
    alert("Successfully queried for element!");
    userDataInput.value = result.userDataInput || "";

    userDataInput.addEventListener('input', function() {
      const userData = userDataInput.value;
      chrome.storage.sync.set({'userData': userData});
    });
  }
});

*/

// test functionality to transfer existing styles from an element to another

/** 
var targetElement = document.querySelector(
  "#divMain > div > app-train-list > div.col-sm-9.col-xs-12 > div > div.ng-star-inserted > div:nth-child(1) > div.form-group.no-pad.col-xs-12.bull-back.border-all > app-train-avl-enq > div.col-xs-12 > div > span > span.ng-star-inserted > span"
);

alert("Info: This is a placeholder!");

if (targetElement) {
  console.log("Existing target element has been found.");

  targetElement.classList.forEach(function (className) {
    button.classList.add(className);
  });

  path.appendChild(button);
}

*/

// image transcoding functionality

/**
function transcodeImage(imageElement) {
  const url = imageElement.src;

  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const transcodedBlob = processImage(blob);

      const reader = new FileReader();
      reader.readAsDataURL(transcodedBlob);

      reader.onloadend = function () {
        imageElement.src = reader.result;
      };
    })
    .catch((error) => {
      console.error(`Error fetching image:`, error);
    });
}

function processImage(imageBlob) {
  return imageBlob;
}

const images = document.querySelectorAll("img");

images.forEach((image) => {
  transcodeImage(image);
});

 */
