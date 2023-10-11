const form = document.getElementById("form");
const holderName = document.getElementById("holderName");
const cardNumber = document.getElementById("cardNumber");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");

// outputs
const nameOut = document.getElementById("nameOut");
const numberOut = document.getElementById("numberOut");
const dateOut = document.getElementById("dateOut");
const cvcOut = document.getElementById("cvcOut");

// continue button
const continueBtn = document.getElementById("continue");

// success screen
const success = document.getElementById("success-screen");

// creating a space after 4 digits on the card number
cardNumber.oninput = function () {
  var value = cardNumber.value.replace(/\D/g, "");
  var formattedValue = "";
  for (var i = 0; i < value.length; i++) {
    if (i % 4 == 0 && i > 0) {
      formattedValue += " ";
    }
    formattedValue += value[i];
  }
  cardNumber.value = formattedValue;
};

form.addEventListener("submit", handleSubmit);

function validate() {
  let validator = true;
  const inputs = document.querySelectorAll("input");
  inputs.forEach((i) => {
    const parent = i.parentElement;

    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("span").innerHTML = "can't be blank";
      validator = false;

      // if holder name is not valid
    } else if (!isNaN(holderName.value)) {
      holderName.style.borderColor = "red";
      holderName.parentElement.querySelector("span").innerHTML =
        "wrong format, letters only";
      validator = false;
    }

    // if cardnumber is not up to 16 digits
    else if (cardNumber.value.length < 19) {
      cardNumber.style.borderColor = "red";
      cardNumber.parentElement.querySelector("span").innerHTML =
        "must be valid";
      validator = false;

      // if month is not between 1 and 12
    } else if (month.value < 1 || month.value > 12 || isNaN(month.value)) {
      month.style.borderColor = "red";
      month.parentElement.querySelector("span").innerHTML = "must be valid";
      validator = false;

      // if year is not a number
    } else if (isNaN(year.value)) {
      year.style.borderColor = "red";
      year.parentElement.querySelector("span").innerHTML = "must be valid";
      validator = false;

      // if cvc is not a number
    } else if (isNaN(cvc.value) || cvc.value.length < 3) {
      cvc.style.borderColor = "red";
      cvc.parentElement.querySelector("span").innerHTML = "must be valid";
      validator = false;

      // when everything is inputted correctly
    } else {
      i.style.borderColor = "";
      parent.querySelector("span").innerHTML = "";
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    nameOut.innerHTML = holderName.value;
    numberOut.innerHTML = cardNumber.value;
    dateOut.innerHTML = month.value + "/" + year.value;
    cvcOut.innerHTML = cvc.value;
    success.classList.add("pop");

    success.classList.toggle("hidden");
    success.classList.toggle("flex");
    const input = document.querySelectorAll("input");
    input.forEach((i) => {
      i.value = "";
    });
  }
}

// remove the pop up screen once user clicks continue
continueBtn.addEventListener("click", () => {
  success.classList.toggle("hidden");
  success.classList.toggle("flex");
});
