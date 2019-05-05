import {
  socialMediaCountGenerator,
  stockPriceGenerator,
  recommendationAlgorithm
} from "./api";

describe("socialMediaCountGenerator()", () => {});

describe("stockPriceGenerator()", () => {
  it("should generate stock prices", () => {
    const startDate = new Date("2019-01-01");
    const endDate = new Date("2019-01-02");
    expect(stockPriceGenerator("Smb", startDate, endDate))
      .toMatchInlineSnapshot(`
      Array [
        Object {
          "date": "2019-01-01T00:00:00.000Z",
          "price": 77,
          "stockSymbol": "Smb",
        },
      ]
    `);
  });
});

describe("recommendationAlgorithm()", () => {});
