import {
  getSocialMediaInfoMockEndPoint,
  getStocksMockEndPoint,
  getStockSymbolsMockEndPoint
} from "./backendMock";

export function getStocks(
  startDate,
  endDate,
  filterStockSymbol,
  filterSocialMedia
) {
  const params = JSON.stringify({
    startDate,
    endDate,
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
