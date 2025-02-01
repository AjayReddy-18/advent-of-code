import { fetchInput } from "../../../dependencies/inputLib.js";
import { add } from "./part_1.js";
import { requiredFuel } from "./part_1.js";

const totalFuel = (mass) => {
  const fuel = requiredFuel(mass);
  if (fuel < 0) return 0;
  return fuel + totalFuel(fuel);
};

const main = (input) => {
  return input.map(totalFuel).reduce(add);
};

const output = main(fetchInput("input/day_01/part_2.txt"));
console.log(output);
