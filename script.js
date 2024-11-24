var loadingPage = document.querySelector('.loading-page');
var hoemPage = document.querySelector('.home-page');
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        loadingPage.style.display = 'none';
        hoemPage.style.display = 'flex';
    }, 3000);
});


// Select the button element
var scanBtn = document.querySelector("#nav-bar-bottom-center-btn"); // Make sure the class/ID matches your HTML structure

// Add click event listener to the button
scanBtn.addEventListener("click", function() {
  // Navigate to scanner.html
  window.location.href = "./scanner.html";
});
