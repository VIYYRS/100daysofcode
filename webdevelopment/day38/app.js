const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');
const maxAllowChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;
  remainingCharsElement.textContent = maxAllowChars - enteredTextLength;
  if ((maxAllowChars - enteredText.length) === 0) {
    productNameInputElement.classList.add('error');
    remainingCharsElement.classList.add('error');
  } else if ((maxAllowChars - enteredText.length) <= 10) {
    productNameInputElement.classList.add('warning');
    remainingCharsElement.classList.add('warning');
  } else {
    productNameInputElement.classList.remove('warning', 'error');
    remainingCharsElement.classList.remove('warning', 'error');
  }
}
productNameInputElement.addEventListener('input', updateRemainingCharacters);