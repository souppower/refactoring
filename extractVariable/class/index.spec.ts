import { Order } from "./start";
import { Order as FinalOrder } from "./final";

describe("Extract Variable", () => {
  const record = { quantity: 5, itemPrice: 200 };

  test("Start", () => {
    const order = new Order(record);
    const result = order.price;
    expect(result).toBe(1100);
  });

  test("Final", () => {
    const order = new FinalOrder(record);
    const result = order.price;
    expect(result).toBe(1100);
  });
});
