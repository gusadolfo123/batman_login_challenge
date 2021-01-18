document.addEventListener("DOMContentLoaded", function (event) {
  const login = document.getElementById("login");
  const signup = document.getElementById("signup");

  login.addEventListener("click", function (ev) {
    console.log("clicked: login");
  });

  signup.addEventListener("click", function (ev) {
    const itemsBottom = document.getElementsByClassName("login-bottom")[0];
    itemsBottom.classList.add("hide-login-bottom");

    const itemLogo = document.querySelector(".login-body > img");
    itemLogo.classList.add("hide-login-body");

    const itemTitle = document.getElementsByClassName("login-body--title")[0];
    itemTitle.classList.add("hide-login-body--title");
  });
});
