(() => {
console.log("JS file connected");
const menuBtn = document.querySelector("#menu-btn");
const mainNav = document.querySelector("#main-nav");
const navLink = document.querySelector("#navlink-con");

function toggleMobileMenu() {
    console.log("fired");
    navLink.classList.toggle("collapsible");
}

window.addEventListener("resize", toggleAriaButton);
menuBtn.addEventListener("click", toggleMobileMenu);
})();