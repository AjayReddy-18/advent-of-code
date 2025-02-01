import { fetchInput } from "../../../dependencies/inputLib.js";
import { Line } from "./line.js";

const sliceAt = (string, index) => [
  string.slice(0, index),
  string.slice(index),
];

const R = ({ x, y }, offset) => {
  return { x: x + offset, y };
};

const L = ({ x, y }, offset) => {
  return { x: x - offset, y };
};

const U = ({ x, y }, offset) => {
  return { x, y: y + offset };
};

const D = ({ x, y }, offset) => {
  return { x, y: y - offset };
};

const directions = { R, L, U, D };

const cordinates = (previousCordinates, direction, offset) => {
  return directions[direction](previousCordinates, +offset);
};

const lineSegment = (previousCordinates) => (path) => {
  const { x: x2, y: y2 } = cordinates(previousCordinates, ...sliceAt(path, 1));
  const { x: x1, y: y1 } = previousCordinates;
  previousCordinates = { x: x2, y: y2 };
  return { x1, y1, x2, y2 };
};

const [route1, route2] = fetchInput("input/day_03/part_1.txt");

const wire1 = route1.split(",");

const lines1 = [];
const lineSegmentToWire1 = lineSegment({ x: 0, y: 0 });

for (const path of wire1) {
  const { x1, y1, x2, y2 } = lineSegmentToWire1(path);
  lines1.push(Line.equation(x1, y1, x2, y2));
}

const wire2 = route2.split(",");

const lines2 = [];
const lineSegmentToWire2 = lineSegment({ x: 0, y: 0 });

for (const path of wire2) {
  const { x1, y1, x2, y2 } = lineSegmentToWire2(path);
  lines2.push(Line.equation(x1, y1, x2, y2));
}

const intersections = [];

for (const line1 of lines1) {
  for (const line2 of lines2) {
    const intersection = line1.intersection(line2);
    if (line1.onSegment(intersection) && line2.onSegment(intersection)) {
      intersections.push(intersection);
    }
  }
}

console.log(intersections);