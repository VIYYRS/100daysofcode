const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');
const maxAllowChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;
  remainingCharsElement.textContent = maxAllowChars - enteredTextLength;
}
productNameInputElement.addEventListener('input', updateRemainingCharacters);