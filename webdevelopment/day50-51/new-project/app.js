const fs = require('fs');
const path = require('path');

const express = require('express');
const uuid = require('uuid');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res) {
  res.render('index');
})

app.get('/restaurants', function(req, res) {
  // JSON 파일 경로 설정
  const filePath = path.join(__dirname, 'data', 'restaurants.json');

  // JSON 파일 열고, fileData에 정보 저장
  const fileData = fs.readFileSync(filePath);

  // fileData에 저장되어있던 JSON 추출
  const storedRestaurants = JSON.parse(fileData);

  res.render('restaurants', { numberOfRestaurants: storedRestaurants.length, 
  restaurants: storedRestaurants });
});

app.get('/restaurants/:id', function(req, res) {
  const rid = req.params.id;
  const filePath = path.join(__dirname, 'data', 'restaurants.json');
  const fileData = fs.readFileSync(filePath);
  const datas = JSON.parse(fileData);
  for (const data of datas) {
    if (data.id === rid) {
      return res.render('restaurant-detail', { restaurant: data }); 
    }
  }
})

app.get('/about', function(req, res) {
  res.render('about');
})

app.get('/recommend', function(req, res) {
  res.render('recommend');
})

app.post('/recommend', function(req, res) {
  // 폼 제출 정보 가져오기
  const restaurant = req.body;

  restaurant.id = uuid.v4();

  // JSON 파일 경로 설정
  const filePath = path.join(__dirname, 'data', 'restaurants.json');

  // JSON 파일 열고, fileData에 정보 저장
  const fileData = fs.readFileSync(filePath);

  // fileData에 저장되어있던 JSON 추출
  const storedRestaurants = JSON.parse(fileData);

  // storedRestaurants(fileData JSON)에 폼에서 입력받은 식당 정보 푸시
  storedRestaurants.push(restaurant);

  // 파일 작성
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
  res.redirect('/confirm');
})


app.get('/confirm', function(req, res) {
  res.render('confirm');
})

app.listen(3000);