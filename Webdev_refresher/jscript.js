// get the tips button and the tips list
var tipsBtn = document.getElementById("show-tips");
var tipsList = document.getElementById("tips-list");

// when the tips button is clicked, show or hide the tips
tipsBtn.addEventListener("click", function() {
    tipsList.classList.toggle("hidden");

    // change the button text
    if (tipsList.classList.contains("hidden")) {
        tipsBtn.textContent = "Show Tips";
    } else {
        tipsBtn.textContent = "Hide Tips";
    }
});

// get the burger button and the menu
var burgerBtn = document.getElementById("burger-btn");
var navMenu = document.getElementById("main-nav");

// when the burger is clicked, open or close the menu
burgerBtn.addEventListener("click", function() {
    navMenu.classList.toggle("open");
});