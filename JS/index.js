// Codigo para el navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link")

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//----------------------------------------------------

// https://mfab.azurewebsites.net/api/HttpTrigger1?code=DpyUIT3b3zXTUkFejs9YAAoajTyzFMie2/5KNvKNLMXOCqTaewCkEA==

// DpyUIT3b3zXTUkFejs9YAAoajTyzFMie2/5KNvKNLMXOCqTaewCkEA==
