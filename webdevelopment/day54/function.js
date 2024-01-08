function greetUser(greetingPrefix, userName = 'user') {
  console.log(greetingPrefix + ' ' + userName + '!');
  console.log(`${greetingPrefix} ${userName}!`);
}

greetUser('hello', 'x');
greetUser();

function sumUp(numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sumUp([11, 22, 33]));

function sumUp2(...numbers) { // ... 독립 -> 배열로 수집
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sumUp2(11, 22, 33));

const inputNumbers = [1, 5, 10, 11, 20, 31];
console.log(sumUp2(...inputNumbers)); // ... 배열 -> 독립으로 변환

console.log(sumUp);