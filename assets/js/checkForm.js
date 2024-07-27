const all_inputs = document.querySelectorAll(".form_input");
const loginBtn = document.querySelector(".login");

function checkInputs() {
    let allFilled = true;
    for(let btn of all_inputs) {
        if(btn?.value?.trim() === "") {
            allFilled = false;
            break;
        }
    }

    if(allFilled) {
        loginBtn.disabled = false;
        loginBtn.classList.remove("disabled");
    } else {
        loginBtn.disabled = true;
        loginBtn.classList.add("disabled");
    }
}

checkInputs();

for(let btn of all_inputs) {
    btn.addEventListener("change", (e) => {
        checkInputs();
    });
}