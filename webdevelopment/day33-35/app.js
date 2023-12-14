console.log(document);

// DOM: Document Object Model

// document.body.children[2].children[0].href = '//google.com';
let anchorEl = document.getElementById('external-link');
anchorEl.href = '//google.com';

anchorEl = document.querySelector('p a');
anchorEl.href = '#';

let newAnchorEl = document.createElement('a');
let firstParagraphEl = document.querySelector('p');
firstParagraphEl.append(newAnchorEl);
newAnchorEl.href = '//google.com';
newAnchorEl.textContent = 'go to google.com';

let removeEl = document.querySelector('h1');
removeEl.remove();

firstParagraphEl.parentElement.append(firstParagraphEl);

firstParagraphEl.innerHTML = 'Hi! This is <strong>important!</strong>';

let paragraphEl = document.querySelector('.clickme');
paragraphEl.addEventListener('click', changeParagraphText);
function changeParagraphText() {
  paragraphEl.textContent = 'Clicked';
}

let inputEl = document.querySelector('input');
inputEl.addEventListener('input', inputed);
function inputed(event) {
  console.log(inputEl.value.length);
  console.log(event.target.value);
}