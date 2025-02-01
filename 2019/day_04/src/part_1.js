const start = 231832;
const end = 767346;

const validPassword = (candidateInNum) => {
  const candidate = candidateInNum.toString();
  if (candidate.length !== 6) return false;

  const differnces = [];
  const digits = candidate.split('');
  for (let i = 1; i < 6; i++) {
    differnces.push(digits[i] - digits[i - 1]);
  }

  return (
    !differnces.find((differnce) => differnce < 0) &&
    differnces.indexOf(0) !== -1
  );
};

let passwords = 0;
for (let candidate = start; candidate < end; candidate++) {
  if (validPassword(candidate)) passwords++;
}

console.log(passwords);
