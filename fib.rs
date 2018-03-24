#[no_mangle]
pub fn fib(n: u32) -> u32 {
  let mut a = 0;
  let mut b = 1;
  for _ in 0..n {
    let tmp = a;
    a = b;
    b = a + tmp;
  }

  b
}
