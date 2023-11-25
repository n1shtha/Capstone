/** 

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('toggleButton');
  
    button.addEventListener("click", function() {
        chrome.runtime.sendMessage({ action: "toggleFunction" });
    });
  });

*/
  