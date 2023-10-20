const rangeInput = document.querySelector('input[type="range"]')
const displayInput = document.querySelector('.text-input-container input')
const copyBtn = document.querySelector('.text-input-container button')
const number = document.getElementById('number-value')
const form = document.querySelector('form')
const img = document.querySelector('.meter-container img')

const checkboxUpper = document.getElementById('upper')
const checkboxLower = document.getElementById('lower')
const checkboxNumber = document.getElementById('number')
const checkboxSymbol = document.getElementById('symbol')

var status = [
  "/assets/poor.png",
  "/assets/week.png",
  "/assets/medium.png",
  "/assets/strong.png",
  "/assets/great.png",
]
number.textContent = rangeInput.value;
rangeInput.addEventListener('input', () => {
  number.textContent = rangeInput.value;
})

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  let chars = isChecked()
  let passwordLength = parseInt(rangeInput.value);
  let password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
   displayInput.value = password
   checkStatus(password)
})

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(displayInput.value);
  console.log(`${displayInput.value} has been copy`);
})

function checkStatus(str) {
  if (/[a-z]/.test(str) && /[A-Z]/.test(str) && /[0-9]/.test(str) && /[`@#$%^&*()`]/.test(str) ) {
    if(parseInt(rangeInput.value) <= 5) {
      img.src = "/assets/poor.png"
    } else if (parseInt(rangeInput.value) <= 8) {
      img.src = "/assets/week.png"
    } else if (parseInt(rangeInput.value) <= 10) {
      img.src = "/assets/medium.png"
    } else if (parseInt(rangeInput.value) <= 12) {
      img.src = "/assets/strong.png"
    } else if (parseInt(rangeInput.value) <= 15)  {
      img.src = "/assets/great.png"
    }
  } else if(/[a-z]/.test(str) && /[A-Z]/.test(str)  && /[0-9]/.test(str)){
    if(parseInt(rangeInput.value) <= 5) {
      img.src = "/assets/poor.png"
    } else if (parseInt(rangeInput.value) <= 8) {
      img.src = "/assets/week.png"
    } else if (parseInt(rangeInput.value) <= 10) {
      img.src = "/assets/medium.png"
    } else if (parseInt(rangeInput.value) <= 13) {
      img.src = "/assets/strong.png"
    } else if (parseInt(rangeInput.value) <= 15)  {
      img.src = "/assets/great.png"
    }
  } else if(/[a-z]/.test(str) && /[A-Z]/.test(str)) {
    if(parseInt(rangeInput.value) <= 6) {
      img.src = "/assets/poor.png"
    } else if (parseInt(rangeInput.value) <= 9) {
      img.src = "/assets/week.png"
    } else if (parseInt(rangeInput.value) <= 11) {
      img.src = "/assets/medium.png"
    } else if (parseInt(rangeInput.value) <= 14) {
      img.src = "/assets/strong.png"
    } else if (parseInt(rangeInput.value) === 15)  {
      img.src = "/assets/great.png"
    }
  } else if(/[a-z]/.test(str) || /[A-Z]/.test(str)) {
    if(parseInt(rangeInput.value) <= 7) {
      img.src = "/assets/poor.png"
    } else if (parseInt(rangeInput.value) <= 10) {
      img.src = "/assets/week.png"
    } else if (parseInt(rangeInput.value) <= 13) {
      img.src = "/assets/medium.png"
    } else if (parseInt(rangeInput.value) <= 15) {
      img.src = "/assets/strong.png"
    }
  } else if(/[0-9]/.test(str)) {
    if(parseInt(rangeInput.value) <= 10) {
      img.src = "/assets/poor.png"
    } else if (parseInt(rangeInput.value) <= 15) {
      img.src = "/assets/week.png"
    }
  }
}

function isChecked() {
  let tempStr = ""
  if(checkboxUpper.checked){
    tempStr += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(checkboxLower.checked){
    tempStr += "abcdefghijklmnopqrstuvwxyz"
  }
  if(checkboxNumber.checked){
    tempStr += "0123456789"
  }
  if(checkboxSymbol.checked){
    tempStr += "!@#$%^&*()"
  }
  if(tempStr.length === 0) {
    tempStr = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log("No check");
  }
  return tempStr
}

