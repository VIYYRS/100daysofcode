const fs = require('fs');
const path = require('path');
const { get } = require('http');

// JSON 파일 경로 설정
const filePath = path.join(__dirname, '..', 'data', 'restaurants.json');

function getStoredRestaurants() {
  // JSON 파일 열고, fileData에 정보 저장
  const fileData = fs.readFileSync(filePath);

  // fileData에 저장되어있던 JSON 추출
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
};

function storeRestaurants(storableRestaurants) {
  fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
};

module.exports = {
  getStoredRestaurants: getStoredRestaurants,
  storeRestaurants: storeRestaurants,
};