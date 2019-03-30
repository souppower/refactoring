import { price } from "./start";
import { price as finalPrice } from "./final";

describe("Extract Variable", () => {
  const order = { quantity: 5, itemPrice: 200 };

  test("Start", () => {
    const result = price(order);
    expect(result).toBe(1100);
  });

  test("Final", () => {
    const result = finalPrice(order);
    expect(result).toBe(1100);
  });
});
