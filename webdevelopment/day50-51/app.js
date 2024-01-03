const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

// POST body 파싱 가능하게 만들기
app.use(express.urlencoded({extended: false}));

app.get('/currenttime', function(req, res) {
  res.send('<h1>' + new Date().toISOString() + '</h1>');
})

app.get('/', function(req, res) {
  res.send('<form action="/store-user" method="post"><label>Your Name: </label><input type="text" name="username"><button>Submit</button></form>');
})

app.post('/store-user', function(req, res) {

  // POST로 전송된 username을 가져옴
  const userName = req.body.username;

  // 파일 경로 저장
  const filePath = path.join(__dirname, 'data', 'users.json');
  
  // 경로가 filePath인 파일 읽기
  const fileData = fs.readFileSync(filePath);

  // JS 객체 형식으로 변경
  const existingUsers = JSON.parse(fileData);

  // POST로 전송된 userName을 existingUsers에 push해줌
  existingUsers.push(userName);

  // existingUsers를 JSON 형식으로 변경한후, filePath에 existingUsers를 대입함
  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send('<h1>Username stored!</h1>');

})

app.get('/users', function(req, res) {

  // 파일 경로 저장
  const filePath = path.join(__dirname, 'data', 'users.json');
  
  // 경로가 filePath인 파일 읽기
  const fileData = fs.readFileSync(filePath);

  // JS 객체 형식으로 변경
  const existingUsers = JSON.parse(fileData);

  // <ul>
  let responseData = '<ul>';

  // <ul> <li></li>
  for (const user of existingUsers) {
    responseData += '<li>' + user + '</li>';
  }

  // <ul> <li></li> </ul>
  responseData += '</ul>';

  res.send(responseData);

})

app.listen(3000);