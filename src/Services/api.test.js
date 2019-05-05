import { getSocialMediaInfo, getStocks } from "./api";
import {
  getSocialMediaInfoMockEndPoint,
  getStocksMockEndPoint
} from "./backendMock";

jest.mock("./backendMock");

getSocialMediaInfoMockEndPoint.mockImplementation(
  () => "resolveSocialMediaInfoMockEndPoint"
);
getStocksMockEndPoint.mockImplementation(() => "resolveStocksMockEndPoint");

describe("getSocialMediaInfo()", () => {
  it("should return a promise which resolve data", () => {
    return expect(getSocialMediaInfo()).resolves.toBe(
      "resolveSocialMediaInfoMockEndPoint"
    );
  });
});

// Async/Await demo
describe("getStocks()", () => {
  it("should return a promise which resolve data for params", async () => {
    expect.assertions(2);
    const data = await getStocks(
      "startDate",
      "endDate",
      "stockSymbol",
      "socialMedia"
    );
    expect(getStocksMockEndPoint).toHaveBeenCalledWith(
      '{"startDate":"startDate","endDate":"endDate","filterStockSymbol":"stockSymbol","filterSocialMedia":"socialMedia"}'
    );
    expect(data).toEqual("resolveStocksMockEndPoint");
  });
});
