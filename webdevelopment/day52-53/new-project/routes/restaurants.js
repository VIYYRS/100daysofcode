const express = require('express');
const router = express.Router();

const uuid = require('uuid');
const resData = require('../util/restaurant-data');

router.get('/restaurants', function(req, res) {
  let order = req.query.order;
  let nextOrder = 'desc';
  const storedRestaurants = resData.getStoredRestaurants();

  if (order !== 'asc' && order !== 'desc') {
    order = 'asc';
    nextOrder = 'desc';
  }

  if (order === 'desc') {
    nextOrder = 'asc';
  }

  storedRestaurants.sort(function(resA, resB) {
    if ((order === 'asc' && resA.name > resB.name) || (order === 'desc' && resA.name < resB.name)) {
      return 1;
    }
    return -1;
  });

  res.render('restaurants', { numberOfRestaurants: storedRestaurants.length, 
  restaurants: storedRestaurants, nextOrder: nextOrder });
});

router.get('/restaurants/:id', function(req, res) {
  const rid = req.params.id;
  const storedRestaurants = resData.getStoredRestaurants();

  // for문으로 data.id와 rid가 일치하는 data 배열 찾기
  for (const restaurant of storedRestaurants) {
    if (restaurant.id === rid) {
      return res.render('restaurant-detail', { restaurant: restaurant }); 
    }
  }

  res.status(404).render('404');
});

router.get('/recommend', function(req, res) {
  res.render('recommend');
});

router.post('/recommend', function(req, res) {
  // 폼 제출 정보 가져오기
  const restaurant = req.body;

  restaurant.id = uuid.v4();

  const storedRestaurants = resData.getStoredRestaurants();

  // storedRestaurants(fileData JSON)에 폼에서 입력받은 식당 정보 푸시
  storedRestaurants.push(restaurant);

  resData.storeRestaurants(storedRestaurants);

  // 파일 작성
  
  res.redirect('/confirm');
});


router.get('/confirm', function(req, res) {
  res.render('confirm');
});

module.exports = router;