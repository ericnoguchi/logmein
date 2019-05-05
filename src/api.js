import { getRandomInt, strToToDate } from "./utils";

const stockNames = {
  "NASDAQ: MSFT": "Microsoft Corporation",
  "NASDAQ: LOGM": "LogMeIn Inc",
  "NASDAQ: AAPL": "Apple Inc.",
  "NASDAQ: FB": "Facebook, Inc",
  "NASDAQ: INTC": "Intel Corporation"
};

const socialMediaTitles = {
  facebook: "Facebook",
  twitter: "Twitter",
  reddit: "Reddit"
};

const stockSymbols = Object.keys(stockNames);
const socialMediaKeys = Object.keys(socialMediaTitles);

export function getSocialMediaInfoMockEndPoint() {
  return Object.keys(socialMediaTitles).map(key => ({
    id: key,
    title: socialMediaTitles[key]
  }));
}

export function getStockSymbolsMockEndPoint() {
  return Object.keys(stockNames).map(key => ({
    symbol: key,
    title: stockNames[key]
  }));
}

export function getStocksMockEndPoint(params = "{}") {
  let { startDate, endDate, filterStockSymbol, filterSocialMedia } = JSON.parse(
    params
  );
  const stocks = [];

  startDate = strToToDate(startDate);
  endDate = strToToDate(endDate);

  const filteredStockSymbols = stockSymbols.filter(stockSymbols => {
    if (filterStockSymbol) {
      return filterStockSymbol === stockSymbols;
    }
    return true;
  });

  while (startDate <= endDate) {
    filteredStockSymbols.forEach(stockSymbol => {
      const { price, date } = stockPriceGenerator(stockSymbol, endDate);
      const {
        socialMediaCount,
        socialMediaTitle,
        socialMediaType
      } = socialMediaCountGenerator(
        stockSymbol,
        socialMediaKeys[getRandomInt(socialMediaKeys.length)]
      );
      const { recommendation } = recommendationAlgorithm(price, stockSymbol);
      const stock = {
        date,
        price,
        socialMedia: {
          socialMediaTitle,
          socialMediaCount,
          socialMediaType
        },
        title: stockNames[stockSymbol],
        stockSymbol,
        recommendation
      };

      stocks.push(stock);
    });

    endDate.setDate(endDate.getDate() - 1);
  }

  return stocks.filter(stock => {
    if (filterSocialMedia) {
      return stock.socialMedia.socialMediaType === filterSocialMedia;
    }
    return true;
  });
}

export function stockPriceGenerator(stockSymbol, date) {
  return {
    date: date.toLocaleDateString("default"),
    price: (getRandomInt(100) + 1).toFixed(2)
  };
}

export function socialMediaCountGenerator(stockSymbol, socialMediaType) {
  return {
    stockSymbol,
    socialMediaTitle: socialMediaTitles[socialMediaType],
    socialMediaType,
    socialMediaCount: getRandomInt(50)
  };
}

export function recommendationAlgorithm(stockPrice, socialMediaCounts) {
  const recommendations = [
    {
      type: "buy",
      title: "Buy"
    },
    {
      type: "sell",
      title: "Sell"
    },
    {
      type: "hold",
      title: "Hold"
    }
  ];

  return { recommendation: recommendations[getRandomInt(3)] };
}
