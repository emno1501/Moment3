"use strict";

/* Fälla upp och ned mobilmeny */
var navigation = document.getElementById("navigation");
var menuicon = document.getElementById("hamburgermenu");
navigation.addEventListener("click", mobileMenu, false);

function mobileMenu() {
    if (navigation.className === "menudefault") {
        navigation.className = "menudown";
        menuicon.src = "pics/hamburgerclose.svg";
    } else {
        navigation.className = "menudefault";
        menuicon.src = "pics/hamburger.svg";
    }
}
