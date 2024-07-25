function palindromeChecker(input) {
  if (typeof input !== "string") {
    console.error("Lütfen bir string kullanın");
    return false;
  }

  const str = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(palindromeChecker("e ce"));
console.log(palindromeChecker(12345));
console.log(palindromeChecker("asa"));
console.log(palindromeChecker("bedirhan"));
