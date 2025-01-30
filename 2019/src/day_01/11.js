import { fetchInput } from "../../../dependencies/inputLib.js";

export const add = (a, b) => a + b;

export const requiredFuel = (mass) => ((mass / 3) >> 0) - 2;

export const fuelForAllModules = (masses) => {
  return masses.map(requiredFuel).reduce(add, 0);
};

const main = (input) => fuelForAllModules(input);

const output = main(fetchInput("input/11.txt"));

// console.log(output);
