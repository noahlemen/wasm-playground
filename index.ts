import { add } from './add.rs';
import { fib } from './fib.rs';

let t0, t1, result;

t0 = performance.now();
result = add(1, 2);
t1 = performance.now();

console.log(`rust/wasm add(1,2) took ${t1-t0} ms. result: ${result}`);

t0 = performance.now();
result = 1 + 2;
t1 = performance.now();

console.log(`js 1 + 2 took ${t1-t0} ms. result: ${result}`);

t0 = performance.now();
result = fib(5);
t1 = performance.now();

console.log(`rust/wasm fib(5) took ${t1-t0} ms. result: ${result}`);

t0 = performance.now();
result = fibonacci(5)
t1 = performance.now();

console.log(`js fibonacci(5) took ${t1-t0} ms. result: ${result}`);

function fibonacci(n){
  let a = 1, b = 0, temp;

  while (n >= 0){
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}
