for (let i=0;i<10;i++) {
  console.log(i);
}

const users = ['X', 'Y', 'Z'];
for (const user of users) {
  console.log(user)
}

const loggedInUser = {
  name: 'X',
  age: 18,
  isAdmin: true
}

for (const key in loggedInUser) {
  console.log(key);
  console.log(loggedInUser);
}

let isFinished = false;

while (!isFinished) {
  isFinished = confirm('Do you want to quit?');
}