const hobbies = ['Game', 'Sports'];
const age = 18

hobbies.push('Reading'); // const push 가능

console.log(hobbies);

const person = { age: 18 };
function getAdultYears(p) {
  p.age -= 18;
  return p.age;

  // return p.age - 18; - 얘 쓰면 단순히 p.age에서 18을 뺀 값을 리턴함, person 내부 값 안바뀜
}
console.log(getAdultYears(person));
console.log(getAdultYears({ age: person.age })) // 값 공유 안함
console.log(getAdultYears({ ...person })) // 값 공유 안함, person을 펼침
console.log(person); // p와 person은 같은 객체, 값을 공유