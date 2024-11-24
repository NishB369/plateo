var loadingPage = document.querySelector('.loading-page');
var hoemPage = document.querySelector('.home-page');
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        loadingPage.style.display = 'none';
        hoemPage.style.display = 'flex';
    }, 3000);
});

