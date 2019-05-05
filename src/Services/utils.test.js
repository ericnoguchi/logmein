import { dateToStr, strToDate, getRandomInt } from "./utils";

describe("getRandomInt()", () => {
  it("should should return a random number", () => {
    expect(typeof getRandomInt(100)).toEqual("number");
  });
});

describe("dateToStr()", () => {
  it("should convert a date into a string with format yyyy-mm-dd", () => {
    expect(dateToStr(new Date(2019, 0, 1))).toEqual("2019-01-01");
  });
});

describe("strToDate()", () => {
  it("should convert a string with format yyyy-mm-dd into a date object", () => {
    expect(
      strToDate("2019-01-01")
        .toLocaleDateString()
        .split("T")[0]
    ).toEqual("1/1/2019");
  });
});
