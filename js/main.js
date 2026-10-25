(() => {
console.log("JS file connected");
const menuBtn = document.querySelector("#menu-btn");
const mainNav = document.querySelector("#main-nav");
const navLink = document.querySelector("#navlink-con");
const navInst = document.querySelector("#nav-inst")

function toggleMobileMenu() {
    console.log("fired");
    navLink.classList.toggle("collapsible");
}

function toggleDesc() {
    if(mainNav.style.position==="fixed") {
        navInst.classList.remove("hidden");
    } else {
        navInst.classList.add("hidden");
    }
}

window.addEventListener("resize", toggleDesc);
mainNav.addEventListener("click", toggleMobileMenu);
menuBtn.addEventListener("click", toggleMobileMenu);
})();