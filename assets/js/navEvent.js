const hamburgerIcon = document.querySelector(".mobile-hamburger");
const closeMenuIcon = document.querySelector(".close_menu_icon");
const navMobile = document.querySelector(".nav_mobile");


hamburgerIcon.addEventListener("click",() => {
    navMobile.classList.add("active");
})

closeMenuIcon.addEventListener("click",() => {
    navMobile.classList.remove("active");
})

