import { circum } from "./start";
import { circum as finalCircum } from "./final";

describe("Change Function Declaration - Migration Mechanics", () => {
  const radius = 3;
  const expected = 2 * Math.PI * radius;

  test("Start", () => {
    const result = circum(radius);

    expect(result).toBe(expected);
  });

  test("Final", () => {
    const result = finalCircum(radius);

    expect(result).toBe(expected);
  });
});
