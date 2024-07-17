const decreaseBtns = document.querySelectorAll(".decrease");
const increaseBtns = document.querySelectorAll(".increase");
let countInputValue = parseInt(document.getElementById("count_input").value);
const add_to_cart_btns = document.querySelectorAll(".add_to_cart");

for(let btn of decreaseBtns) {
    btn.addEventListener("click",function(){
        let inputElementValue = parseInt(this.nextElementSibling.value);
        if(inputElementValue >= 2) {
            this.nextElementSibling.value -= 1;
        }
    })
}

for(let btn of increaseBtns) {
    btn.addEventListener("click",function(){
        let inputElementValue = parseInt(this.previousElementSibling.value);
        if(inputElementValue <= 99) {
            this.previousElementSibling.value = parseInt(this.previousElementSibling.value) + 1;
        }
    })
}


document.getElementById("count_input").addEventListener("change",(e) => {
    countInputValue = parseInt(e.target.value);
    document.getElementById("count_input").value = countInputValue;

})

