import { fetchInput } from "../../../dependencies/inputLib.js";

const operations = {
  1: (a, b) => a + b,
  2: (a, b) => a * b,
};

const sprint = (intCode, address) => {
  const opcode = intCode[address];
  if (opcode === 99) return intCode;

  const parameter1 = intCode[intCode[address + 1]];
  const parameter2 = intCode[intCode[address + 2]];
  const resultPos = intCode[address + 3];
  intCode[resultPos] = operations[opcode](parameter1, parameter2);

  return sprint(intCode, address + 4);
};

const main = (memory) => {
  const intCode = memory.map((data) => +data);
  return sprint(intCode, 0)[0];
};

const input = fetchInput("../../input/day_02/part_1.txt", ",");
const output = main(input);
console.log(output);
