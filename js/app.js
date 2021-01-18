document.addEventListener("DOMContentLoaded", function (event) {
  const login = document.getElementById("login");
  const signup = document.getElementById("signup");

  login?.addEventListener("click", function (ev) {
    console.log("clicked: login");
  });

  signup?.addEventListener("click", function (ev) {
    console.log("clicked signup");
  });
});
