// 1. Producer
const promise = new Promise((resolve, reject) => {
  // 네트워크 작업, 파일 작업 등으로 시간이 소요됨
  console.log('do something...');
  setTimeout(() => {
    // resolve('');
    reject(new Error('에러발생'))
  }, 2000);
})

// 2. Consumer
promise
  .then(value => {
    console.log(value);
  })
    .catch(error => {
      console.log(error);
  });