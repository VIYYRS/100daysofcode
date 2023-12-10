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
alert(calculateAdultYears(age));
age = 45;
alert(calculateAdultYears(age));