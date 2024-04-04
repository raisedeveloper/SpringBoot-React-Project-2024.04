function delay(ms) {
  return new Promise(resolver => setTimeout(resolver, ms));
  // setTimeout(() => { }, ms);
}
function getApple() {
  delay(3000);    // 시간이 소요되는 작업
  return '맛있는 사과';
}
console.log(getApple());

async function getBanana() {
  await delay(3000);
  return '3000ms 후에 찾아오는 바나나';
}

getBanana().then(data => {console.log(data);}); //promise는 반드시 이러한 방법으로 값을 표시