import { add } from './add.rs';
import { fib } from './fib.rs';

let t0, t1, result;

// t0 = performance.now();
// result = add(1, 2);
// t1 = performance.now();

// console.log(`rust/wasm add(1,2) took ${t1-t0} ms. result: ${result}`);

// t0 = performance.now();
// result = 1 + 2;
// t1 = performance.now();

// console.log(`js 1 + 2 took ${t1-t0} ms. result: ${result}`);

const N = 30;

t0 = performance.now();
result = fib(N);
t1 = performance.now();

console.log(`rust/wasm recursive fib(${N}) took ${t1-t0} ms. result: ${result}`);

t0 = performance.now();
result = fibonacci(N)
t1 = performance.now();

console.log(`js recursive fibonacci(${N}) took ${t1-t0} ms. result: ${result}`);

function fibonacci(num) {
  if (num === 1 || num === 2) return 1;
  else if (num === 3) return 2;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
