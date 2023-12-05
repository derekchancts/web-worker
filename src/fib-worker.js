// const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));

// onmessage = (e) => {
//   const { num } = e.data;
//   const startTime = new Date().getTime();
//   const fibNum = fib(num);
//   postMessage({
//     fibNum,
//     time: new Date().getTime() - startTime,
//   });
// };


/* eslint-disable no-restricted-globals */
self.onmessage = function (event) {
  const userNum = Number(event.data);
  fibonacci(userNum);
};

function fibonacci(num) {
  let a = 1;
  let b = 0;
  let temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  self.postMessage(b);
}