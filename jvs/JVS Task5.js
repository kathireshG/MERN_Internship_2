const form = document.querySelector("#form");
const name_ = document.querySelector("#name");
const email = document.querySelector("#email");
const website = document.querySelector("#website");
const Message = document.querySelector("#Message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateinputs();
});

function validateinputs() {
  const nameVal = name_.value.trim();
  const emailVal = email.value.trim();
  const websiteVal = website.value.trim();
  const MessageVal = Message.value.trim();

  if (nameVal === "") {
    setErrorMessage(name_, "This field is required");
  }
  if (emailVal === "") {
    setErrorMessage(email, "A valid email address is required");
  }
  if (websiteVal === "") {
    setErrorMessage(website, "A valid URL is required");
  }
  if (MessageVal === "") {
    setErrorMessage(Message, "This field is required");
  }
}

function setErrorMessage(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error-message");

  errorElement.innerText = message;
  inputGroup.classList.add("error-message");
}
