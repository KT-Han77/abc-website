const navLink = document.querySelector(".nav-items");
const menuIcon = document.querySelector(".menu-icon");
const socialLinks = document.querySelector(".social-links");

menuIcon.addEventListener("click", () => {
    navLink.classList.toggle("show");
    socialLinks.classList.toggle("show");
})