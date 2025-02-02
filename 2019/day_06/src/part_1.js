import { fetchInput } from "../../../lib/inputLib.js";

const input = fetchInput("input/part_1.txt");
const objects = {};

const map = (pair) => {
  const [parentObject, object] = pair.split(")");
  if (objects[parentObject] === undefined) {
    objects[parentObject] = { parent: null };
  }

  if (objects[object] === undefined) {
    objects[object] = {};
  }

  objects[object].parent = parentObject;
};

const connectionsOf = (object) => {
  if (object.parent === null) return 0;

  return 1 + connectionsOf(objects[object.parent]);
};

const totalConnections = () => {
  let connections = 0;
  const keys = Object.keys(objects);

  keys.forEach((key) => {
    const connectionOfObject = connectionsOf(objects[key]);
    connections += connectionOfObject;
    objects[key].connections = connectionOfObject;
  });

  return connections;
};

const pathOf = (key, set, target) => {
  const { parent } = objects[key];
  set.add(parent);
  if (parent === target) {
    return set;
  }

  return pathOf(parent, set, target);
};

const distanceFromSanta = () => {
  const pathFromYOU = pathOf("YOU", new Set(), "COM");
  const pathFromSAN = pathOf("SAN", new Set(), "COM");

  const [connectionPoint] = [
    ...pathFromYOU.intersection(pathFromSAN).entries(),
  ][0];

  const connectionPointToYOU = pathOf("YOU", new Set(), connectionPoint);
  const connectionPointToSAN = pathOf("SAN", new Set(), connectionPoint);

  return connectionPointToYOU.size + connectionPointToSAN.size - 2;
};

const part1 = () => {
  console.log(totalConnections());
};

const part2 = () => {
  console.log(distanceFromSanta());
};

const main = (input) => {
  input.forEach((pair) => {
    map(pair);
  });

  part2();
};

main(input);

// console.log(objects);
