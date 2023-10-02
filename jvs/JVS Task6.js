const form = document.querySelector("#form");
const username = document.querySelector("#user");
const password = document.querySelector("#pass");
const errorMessage = document.querySelector("#error_");

form.addEventListener("submit", (e) => {
  const error = [];
  if (username.value.trim() === "") {
    error.push("Username Required");
  }
  if (password.value.trim() === "") {
    error.push("Password Required");
  }
  if (error.length > 0) {
    e.preventDefault();
    errorMessage.style.display = "block";
    password.value = "";
    errorMessage.innerHTML = error.join(", ");
  }
});
