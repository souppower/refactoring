import { reportLines } from "./start";
import { reportLines as finalReportLines } from "./final";

describe("reportLines", () => {
  const customer = { name: "Jones", location: "New York" };
  const expected = [["name", "Jones"], ["location", "New York"]];

  test("Start", () => {
    const result = reportLines(customer);
    expect(result).toEqual(expected);
  });

  test("Final", () => {
    const result = finalReportLines(customer);
    expect(result).toEqual(expected);
  });
});
