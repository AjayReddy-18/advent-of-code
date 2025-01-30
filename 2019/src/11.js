import { fetchInput } from "../../dependencies/inputLib.js";

const add = (a, b) => a + b;

const requiredFuel = (mass) => ((mass / 3) >> 0) - 2;

const main = (input) => input.map(requiredFuel).reduce(add, 0);

const output = main(fetchInput("input/11.txt"));

console.log(output);