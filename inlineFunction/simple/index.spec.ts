import { rating } from "./start";
import { rating as finalRating } from "./final";

describe("Rating", () => {
  const driver1 = { numberOfLateDeliveries: 5 };
  const driver2 = { numberOfLateDeliveries: 6 };
  describe("Start", () => {
    test("Number Of Late Deliveries is not over 5", () => {
      const rate = rating(driver1);
      expect(rate).toBe(1);
    });

    test("Number Of Late Deliveries is over 5", () => {
      const rate = rating(driver2);
      expect(rate).toBe(2);
    });
  });

  describe("Final", () => {
    test("Number Of Late Deliveries is not over 5", () => {
      const rate = finalRating(driver1);
      expect(rate).toBe(1);
    });

    test("Number Of Late Deliveries is over 5", () => {
      const rate = finalRating(driver2);
      expect(rate).toBe(2);
    });
  });
});
