import {
  getSocialMediaInfoMockEndPoint,
  getStocksMockEndPoint,
  getStockSymbolsMockEndPoint
} from "./backendMock";
import { dateToStr } from "./utils";

export function getStocks(
  startDate,
  endDate,
  filterStockSymbol,
  filterSocialMedia
) {
  const params = JSON.stringify({
    startDate: dateToStr(startDate),
    endDate: dateToStr(endDate),
    filterStockSymbol,
    filterSocialMedia
  });

  return new Promise(resolve => {
    resolve(getStocksMockEndPoint(params));
  });
}

export function getSocialMediaInfo() {
  return new Promise(resolve => {
    resolve(getSocialMediaInfoMockEndPoint());
  });
}

export function getStockSymbols() {
  return new Promise(resolve => {
    resolve(getStockSymbolsMockEndPoint());
  });
}
