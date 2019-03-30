import { inNewEngland } from "./start";
import { inNewEngland as finalInNewEngland } from "./final";

describe("Change Function Declaration", () => {
  const someCustomers = [
    { id: 1, address: { state: "NY" } },
    { id: 2, address: { state: "MA" } },
    { id: 3, address: { state: "CT" } }
  ];

  test("Start", () => {
    const newEnglanders = someCustomers.filter(c => inNewEngland(c));
    expect(newEnglanders.map(e => e.id)).toEqual([2, 3]);
  });

  test("Final", () => {
    const newEnglanders = someCustomers.filter(c =>
      finalInNewEngland(c.address.state)
    );
    expect(newEnglanders.map(e => e.id)).toEqual([2, 3]);
  });
});
