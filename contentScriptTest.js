
const checkboxOptions = document.querySelector("#divMain > div > app-main-page > div > div > div.level_2.slanted-div > div.col-xs-12.remove-padding.tbis-box.tbis-box-pad > div:nth-child(1) > app-jp-input > div > form > div:nth-child(4)");

if (checkboxOptions) {
  checkboxOptions.style.display = "none";
} else {
  alert("Unable to find/stylise the selected element!");
}


/** 
// Modifies the sort by button on the ticket page to be hidden

const sortByButton = document.querySelector("#divMain > div > app-train-list > div.col-sm-9.col-xs-12 > div > div:nth-child(3) > span.pull-left > button.active.btnDefault");

if (sortByButton) {
  sortByButton.style.display = "none"; // to gauge whether contentScript is executing on the ticket page
  alert("Successfully found/stylised the selected element!");
} else {
  alert("Unable to find/stylise the selected element!");
}

*/

/** 

var testElement = document.querySelector(
  "#alert-section > div > div > ul > li:nth-child(2) > div > b > font"
);

if (testElement) {
  testElement.setAttribute("color", "blue");
} else {
  console.log("Unable to find element. Please try a different selector.");
}

*/

/** 

function createButton() {
  var btn = document.createElement("button");
  btn.textContent = "Image";
  btn.classList.add("btn-primary-custom");
  btn.setAttribute("toolData", "Test Text");
  // btn.classList.add("fa-info-circle");
  btn.addEventListener("click", function () {
    alert("Info: This is a placeholder!");
  });

  return btn;
}

var path = document.querySelector(
  "#divMain > div > app-train-list > div.col-sm-9.col-xs-12 > div > div.ng-star-inserted > div:nth-child(1) > div.form-group.no-pad.col-xs-12.bull-back.border-all > app-train-avl-enq > div.ng-star-inserted > div.dull-back.no-pad.col-xs-12 > div.col-sm-5.col-xs-11.train-heading"
);

if (path) {
  path.style.display = "none";
  // path.appendChild(button);
}

var testBtn = document.querySelector(
  "#divMain > div > app-train-list > div.col-sm-9.col-xs-12 > div > div.ng-star-inserted > div:nth-child(1) > div.form-group.no-pad.col-xs-12.bull-back.border-all > app-train-avl-enq > div.col-xs-12 > div > span > span > button.btnDefault.disable-book.train_Search.ng-star-inserted"
);

if (testBtn) {
  testBtn.classList.add = "btnTest";
}

*/
