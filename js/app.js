function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    // console.log('got 3 digit and calling again', pin);
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typedNumbers = document.getElementById("typed-numbers").value;
  const successMessage = document.getElementById("notify-success");
  const failError = document.getElementById("notify-fail");
  const triesleft = document.getElementById("tries-left").innerText;
  console.log(triesleft);
  let triesLeftNum = parseInt(triesleft);

  if (pin == typedNumbers) {
    successMessage.style.display = "block";
    failError.style.display = "none";
  } else {
    successMessage.style.display = "none";
    failError.style.display = "block";
    triesLeftNum = triesLeftNum - 1;
    if (triesLeftNum != 0) {
      document.getElementById("tries-left").innerText = triesLeftNum;
    } else {
      document.getElementById("tries-left").innerText = "No";
      failError.innerText = "You have exceeded the amount of tries. Please try again in 10 minutes";
    }
  }
  document.getElementById("typed-numbers").value = "";
}
