let age = 18;
let userName = 'X';
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = { 
  title: 'Developer', 
  place: 'New York', 
  salary: 50000
};

// let totalAdultYears;
function calculateAdultYears(userAge) {
  return userAge - 18;
}
console.log(calculateAdultYears(age));

age = 45;
console.log(calculateAdultYears(age));

let person = {
  name: 'X', // Property
  greet() { // Method
    console.log('Hello!');
  }
}

person.greet();