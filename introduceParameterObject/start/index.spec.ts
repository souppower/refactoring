import { readingsOutsideRange } from "./index";

describe("Introduce Parameter Object", () => {
  const station = {
    name: "ZB1",
    readings: [
      { temp: 47, time: "2016-11-10 09:10" },
      { temp: 53, time: "2016-11-10 09:20" },
      { temp: 58, time: "2016-11-10 09:30" },
      { temp: 53, time: "2016-11-10 09:40" },
      { temp: 51, time: "2016-11-10 09:50" }
    ]
  };
  const min = 51;
  const max = 57;
  const expected = [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 58, time: "2016-11-10 09:30" }
  ];

  test("Start", () => {
    const result = readingsOutsideRange(station, min, max);

    expect(result).toEqual(expected);
  });
});
