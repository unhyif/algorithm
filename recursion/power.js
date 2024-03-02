function power(base, n) {
  if (n === 0) return 1;
  return base * power(base, n - 1);
}
