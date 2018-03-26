#[no_mangle]
pub fn fib(n: u32) -> u32 {
  match n {
    1 | 2 => 1,
    3     => 2,
    _     => fib(n - 1) + fib(n - 2)
  }
}
