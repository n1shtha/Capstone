// home image improvisations

var element = document.querySelector(
  "#divMain > div > app-main-page > div > div > div.level_2.slanted-div > div.col-xs-12.remove-padding.tbis-box.tbis-box-pad > div:nth-child(1) > app-jp-input > div > form > div:nth-child(4)"
);

if (element) {
  element.style.display = "none";
}

// image transcoding version

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
