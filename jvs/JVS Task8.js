const firstName = document.querySelector("#First_Name");
const lastName = document.querySelector("#Last_Name");
const email = document.querySelector("#Email");
const Password = document.querySelector("#Password");
const rePassword = document.querySelector("#reenter_");
const age = document.querySelector("#Age");
const phone = document.querySelector("#PhoneNumber");
const address = document.querySelector("#Address");
const state = document.querySelector("#State");
const submit = document.querySelector("#submit__");

submit.addEventListener("click", () => {
  validateName();
  validateLast();
  validateEmail();
  validatePassword();
  validaterePassword();
  validateAge();
  validatePhone();
  validateAddress();
  validateState();
});

function validaterePassword() {
  const nameVal = rePassword.value.trim();
  const nameVal_ = Password.value.trim();
  const errorElement = document.querySelector("#errorrePassword");
  if (nameVal === "") {
    errorElement.innerText = "POOR OR MISMATCH";
  } else if (nameVal != nameVal_) {
    errorElement.innerText = "POOR OR MISMATCH";
  } else {
    errorElement.innerText = "";
  }
}

function validateName() {
  const nameVal = firstName.value.trim();
  const errorElement = document.querySelector("#errorName");
  if (nameVal === "") {
    errorElement.innerText = "POOR";
  } else {
    errorElement.innerText = "";
  }
}

function validateLast() {
  const nameVal = lastName.value.trim();
  const errorElement = document.querySelector("#error_last_name");
  if (nameVal === "") {
    errorElement.innerText = "POOR";
  } else {
    errorElement.innerText = "";
  }
}

function validateEmail() {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = document.querySelector("#Email");
  const errorElement = document.querySelector("#errorEmail");

  const emailValue = email.value.trim();

  if (emailValue === "") {
    errorElement.innerText = "POOR";
  } else if (!emailValue.match(mailformat)) {
    errorElement.innerText = "POOR";
  } else {
    errorElement.innerText = "";
  }
}

function validatePassword() {
  const nameVal = Password.value.trim();
  const errorElement = document.querySelector("#errorPassword");
  if (nameVal === "") {
    errorElement.innerText = "POOR";
  } else {
    errorElement.innerText = "";
  }
}

function validateAge() {
  const nameVal = age.value.trim();
  const errorElement = document.querySelector("#errorAge");
  if (nameVal === "") {
    errorElement.innerText = "POOR";
  } else {
    errorElement.innerText = "";
  }
}
function validatePhone() {
  const nameVal = phone.value.trim();
  const errorElement = document.querySelector("#errorPhone");
  if (nameVal === "") {
    errorElement.innerText = "POOR";
  } else {
    errorElement.innerText = "";
  }
}
function validateAddress() {
  const nameVal = address.value.trim();
  const errorElement = document.querySelector("#errorAddress");
  if (nameVal === "") {
    errorElement.innerText = "POOR";
  } else {
    errorElement.innerText = "";
  }
}
function validateState() {
  const nameVal = state.value.trim();
  const errorElement = document.querySelector("#errorState");
  if (nameVal === "") {
    errorElement.innerText = "POOR";
  } else {
    errorElement.innerText = "";
  }
}
