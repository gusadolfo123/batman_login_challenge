document.addEventListener("DOMContentLoaded", function (event) {
  const login = document.getElementById("login");
  const signup = document.getElementById("signup");

  login.addEventListener("click", function (ev) {
    console.log("clicked: login");
  });

  signup.addEventListener("click", function (ev) {
    const itemsBottom = document.getElementsByClassName("login-bottom")[0];
    itemsBottom.classList.add("hide-login-bottom");

    const itemLogo = document.getElementsByClassName("login-body--img")[0];
    itemLogo.classList.remove("login-body--img");
    itemLogo.classList.add("hide-login-body--img");

    const itemImage = document.getElementsByClassName("batman-img")[0];
    itemImage.classList.remove("batman-img");
    itemImage.classList.add("down-batman-img");

    const itemTitle = document.getElementsByClassName("login-body--title")[0];
    itemTitle.classList.add("hide-login-body--title");

    const itemCity = document.getElementsByClassName("city-img")[0];
    itemCity.classList.add("show-city-img");

    const itemRegister = document.getElementsByClassName("register-bottom")[0];
    // itemRegister.classList.remove("register-bottom");
    // itemRegister.classList.add("show-register-panel");

    

  });
});
