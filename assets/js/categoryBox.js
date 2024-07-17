const allBoxes = document.querySelectorAll(".category-box");

for (let box of allBoxes) {
    box.addEventListener("click", function() {
        // ! DATA
        console.log(this.innerText);  
    });
}