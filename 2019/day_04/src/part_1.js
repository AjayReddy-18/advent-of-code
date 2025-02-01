const start = 231832;
const end = 767346;

const validPassword = (candidateInNum) => {
  const candidate = candidateInNum.toString();
  if (candidate.length !== 6) return false;

  const digits = candidate.split("").map((digit) => +digit);
  
  return (
    !digits.find((digit, i) => digit > digits[i + 1]) &&
    digits.find((digit, i) => {
      return (
        digits[i - 1] !== digit &&
        digits[i + 1] === digit &&
        digits[i + 2] !== digit
      );
    }) !== undefined
  );
};

let passwords = 0;
for (let candidate = start; candidate < end; candidate++) {
  if (validPassword(candidate)) passwords++;
}

console.log(passwords);
