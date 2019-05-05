import React, { useEffect, useState } from "react";
import {
  getSocialMediaInfoMockEndPoint,
  getStocksMockEndPoint,
  getStockSymbolsMockEndPoint
} from "../../Services/api";
import "./index.css";
import StockList from "../StockList";
import { Provider } from "../../context";
import StockFilterForm from "../StockFilterForm";

const api = {
  getStocks: (startDate, endDate, filterStockSymbol, filterSocialMedia) => {
    const params = JSON.stringify({
      startDate,
      endDate,
      filterStockSymbol,
      filterSocialMedia
    });
    console.log("getStocks()", params);
    return new Promise(resolve => {
      resolve(getStocksMockEndPoint(params));
    });
  }
};

function useStockData(startDate, endDate) {
  let [stocks, setStocks] = useState([]);

  function getStocks(startDate, endDate, filterStockSymbol, filterSocialMedia) {
    api
      .getStocks(startDate, endDate, filterStockSymbol, filterSocialMedia)
      .then(stocks => {
        setStocks(stocks);
      });
  }

  useEffect(() => {
    getStocks(startDate, endDate);
  }, [startDate, endDate]);

  return { stocks, setStocks, getStocks };
}

const initialEndDate = new Date();
const initialStartDate = new Date();
initialStartDate.setDate(initialEndDate.getDate() - 10);

function App() {
  const socialMediaInfo = getSocialMediaInfoMockEndPoint();
  const stockSymbols = getStockSymbolsMockEndPoint();

  const { stocks, getStocks } = useStockData(initialStartDate, initialEndDate);

  const store = {
    initialEndDate,
    initialStartDate,
    stocks,
    getStocks,
    socialMediaInfo,
    stockSymbols
  };

  return (
    <Provider value={store}>
      <StockFilterForm />
      <StockList />
    </Provider>
  );
}

export default App;
