const overlayCategory = document.querySelector(".overlay-adding-category");
const closePopup = document.getElementById("back_icon");
const openPopup = document.getElementById("add_button");

document.addEventListener("click", (e) => {
    if(e.target === overlayCategory) {
        overlayCategory.classList.remove("active");
    }
})

closePopup.addEventListener("click", () => {
    overlayCategory.classList.remove("active");
})

openPopup.addEventListener("click", () => {
    overlayCategory.classList.add("active");
})