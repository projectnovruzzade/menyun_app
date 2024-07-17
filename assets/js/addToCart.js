const btns_accepts = document.querySelectorAll(".btn_accept");
const count_data_inputs = document.querySelectorAll(".countData");
const addBtn = document.getElementById("add_to_cart_btn");
const add_cart_container = document.querySelector(".add_cart_container");
const item_group = document.querySelector(".item_group");
const resultTotal = document.getElementById("result");

document.addEventListener("click", (e) => {
  if (e.target.id == "menu") {
    add_cart_container.classList.remove("active");
  }
});

addBtn.addEventListener("click", () => {
  add_cart_container.classList.toggle("active");
});

const API = "http://localhost:3000/orders";


// ! MELUMATI GETIRIR
const getData = async () => {
  let res = await fetch(API);
  return await res.json();
};


// ! Elave edir sebete
for (let btn of btns_accepts) {
  btn.addEventListener("click", async function (e) {
    e.preventDefault();

    let name = this.parentElement.previousElementSibling.children[0].innerText;
    let price = parseFloat(
      this.parentElement.previousElementSibling.children[1].children[0]
        .innerText
    );
    let count = parseInt(this.parentElement.children[0].children[1].value);
    let data = await getData();

    let res = await fetch(API, {
      method: "POST",
      body: JSON.stringify({
        name,
        price: count * price,
        count,
        id: name.length,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  });
}




// ! SEBET HISSESI contenti burada yaradilir
window.addEventListener("load", async function () {
  let allData = await getData();

  if (allData) {
    let groupedData = {};

    for (let data of allData) {
      let dataName = data.name;
      let dataCount = data.count;
      let dataPrice = data.price;

      if (groupedData[dataName]) {
        groupedData[dataName].count += dataCount;
        groupedData[dataName].price += dataPrice;
      } else {
        groupedData[dataName] = {
          count: dataCount,
          price: dataPrice,
        };
      }
    }
    for (let dataName in groupedData) {
      let dataCount = groupedData[dataName].count;
      let dataPrice = groupedData[dataName].price;
      resultTotal.innerHTML = parseInt(resultTotal.innerHTML) + dataPrice;
      console.log(dataName, dataCount, dataPrice);

      let html = `<div class="item_box">
        <div class="item_name">
            ${dataName}
          </div>
       <div class="item_count">
            x${dataCount}
         </div>
         <button class="remove_item">Sil</button>
      </div>`;

      item_group.insertAdjacentHTML("beforeend", html);
    }
  }
});
