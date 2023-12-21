const calcBtn = document.querySelector('#calculator button');
const calcInput = document.getElementById('user-number');
const calcOutput = document.getElementById('calculated-sum');
let calcSum = 0;
calcBtn.addEventListener('click', calc);
function calc() {
  for (let i=0;i<calcInput.value;i++) {
    calcSum ++;
    calcOutput.textContent = calcSum;
    calcOutput.style.display = 'block';
  }
}

const hlBtn = document.querySelector('#highlight-links button');
const hlATag = document.querySelectorAll('#highlight-links a');
hlBtn.addEventListener('click', WorkingHlATag);
function WorkingHlATag() {
  if (document.querySelectorAll('#highlight-links a.highlight').length != 3) {
    for (const item of hlATag) {
      item.classList.add('highlight');
    }
  } else {
    for (const item of hlATag) {
      item.classList.remove('highlight');
    }
  }
}

const userInfo = {
  name: 'X',
  age: 18,
  sex: 'Male'
}
const displayUserDataBtn = document.querySelector('#user-data button');
const displayArea = document.querySelector('#output-user-data');
displayUserDataBtn.addEventListener('click', displayUserInfo);
function displayUserInfo() {
  for (const key in userInfo) {
    let output = key + ': ' + userInfo[key];
    let eachData = document.createElement('li');
    eachData.textContent = output;
    displayArea.append(eachData);
  }
}

const statBtn = document.querySelector('#statistics button');
const displayRolls = document.querySelector('#dice-rolls');
let targetNum = 0;
statBtn.addEventListener('click', roll);
function roll() {
  targetNum = document.querySelector('#user-target-number').value;
  displayRolls.innerHTML = '';
  rollWhileLoop(targetNum);
}
function rollWhileLoop(target) {
  let stop = false;
  let rollCount = 0;
  while (!stop) {
    rollCount ++;
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(target, dice);
    let eachRoll = document.createElement('li');
    eachRoll.textContent = 'Roll ' + rollCount + ': ' + dice;
    displayRolls.append(eachRoll);
    if (target == dice) {
      stop = true;
    }
  }
}