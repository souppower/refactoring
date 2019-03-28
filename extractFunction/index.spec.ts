import { printOwing } from "./start";
import { printOwing as firstPrintOwing } from "./1";
import { printOwing as secondPrintOwing } from "./2";
import { printOwing as finalPrintOwing } from "./final";

describe("Extract Function", () => {
  test("Start", () => {
    const invoice = {
      orders: [{ amount: 10 }],
      customer: "Jones"
    };
    printOwing(invoice);
  });

  test("1", () => {
    const invoice = {
      orders: [{ amount: 10 }],
      customer: "Jones"
    };
    firstPrintOwing(invoice);
  });

  test("2", () => {
    const invoice = {
      orders: [{ amount: 10 }],
      customer: "Jones"
    };
    secondPrintOwing(invoice);
  });

  test("final", () => {
    const invoice = {
      orders: [{ amount: 10 }],
      customer: "Jones"
    };
    finalPrintOwing(invoice);
  });
});
