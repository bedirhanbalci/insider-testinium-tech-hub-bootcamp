function primeNumberChecker(number) {
  if (typeof number !== "number" || !Number.isInteger(number)) {
    console.error("Lütfen bir tam sayı kullanın");
    return false;
  }

  if (number <= 1) return false;

  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  const sqrtNumber = Math.sqrt(number);

  for (let i = 5; i <= sqrtNumber; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumberChecker(2));
console.log(primeNumberChecker("Hello"));
console.log(primeNumberChecker(37));
console.log(primeNumberChecker(-7));
console.log(primeNumberChecker(100));
