import { fetchInput } from "../../dependencies/inputLib.js";
import { add } from "./11.js";
import { requiredFuel } from "./11.js";

const fuelForFuel = (fuel, totalFuel) => {
  const fuelRequiredByFuel = requiredFuel(fuel);
  if (fuelRequiredByFuel < 1) return totalFuel;
  return fuelForFuel(fuelRequiredByFuel, totalFuel + fuelRequiredByFuel);
};

const totalFuel = (input) => {
  const modulesFuel = requiredFuel(input);
  return fuelForFuel(modulesFuel, modulesFuel);
};

const main = (input) => {
  return input.map(totalFuel).reduce(add);
};

const output = main(fetchInput("input/12.txt"));
console.log(output);
