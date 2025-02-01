import { gcd } from "../../../dependencies/MathLib.js";

export class Line {
  #a;
  #b;
  #c;
  #cordinates;
  constructor(a, b, c) {
    this.#a = a;
    this.#b = b;
    this.#c = c;
  }

  intersection(other) {
    const a1 = this.#a;
    const a2 = other.#a;
    const b1 = this.#b;
    const b2 = other.#b;
    const c1 = this.#c;
    const c2 = other.#c;

    const x = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
    const y = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1);

    return { x, y };
  }

  static equation(x1, y1, x2, y2) {
    const xCof = y2 - y1;
    const yCof = -(x2 - x1);
    const hcf = gcd(xCof, yCof);
    const [a, b] = [xCof / hcf, yCof / hcf];
    const c = a * -x1 + b * -y1;

    const line = new Line(a, b, c);
    line.#cordinates = { x1, y1, x2, y2 };
    return line;
  }

  onSegment({ x, y }) {
    const { x1, y1, x2, y2 } = this.#cordinates;
    return (
      Math.min(x1, x2) <= x &&
      Math.max(x1, x2) >= x &&
      Math.min(y1, y2) <= y &&
      Math.max(y1, y2) >= y
    );
  }

  values() {
    console.log(this.#cordinates);
    return { a: this.#a, b: this.#b, c: this.#c };
  }
}
