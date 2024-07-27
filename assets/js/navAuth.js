let contentPart = document.querySelector(".dinamic_part");
let contentPartMobile = document.querySelector(".dynamic_mobile_part");

function getParams(param) {
  const data = param;
  return data.split("=")[1];
}

var query = window.location.search;

window.addEventListener("load", () => {
  if (getParams(query) == "true") {
    contentPart.innerHTML = `
    <div class="profile-part">
      <div class="avatar"></div>
      <div class="username">John Cena</div>
    </div>`;

    contentPartMobile.innerHTML = `
    <div class="profile-part">
      <div class="avatar"></div>
      <div class="username">John Cena</div>
    </div>`;
  } else {
    contentPart.innerHTML = `
    <div class="button-groups">
      <a href="./register.html" class="register_btn">Register</a>
      <a href="index.html" class="login_btn">Login</a>
    </div>`;

    contentPartMobile.innerHTML = `
    <div class="button-groups">
      <a href="./register.html" class="register_btn">Register</a>
     <a href="index.html" class="login_btn">Login</a>
    </div>`;
  }
});
