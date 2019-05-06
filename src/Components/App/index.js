import React, { useEffect, useState } from "react";
import * as api from "../../Services/api";
import { Provider } from "../../Services/context";
import Header from "../Header";
import StockFilterForm from "../StockFilterForm";
import StockList from "../StockList";

import "./index.css";

const initialEndDate = new Date();
const initialStartDate = new Date();
initialStartDate.setDate(initialEndDate.getDate() - 10);

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

function useSocialMediaData() {
  let [socialMediaInfo, setSocialMediaInfo] = useState([]);

  function getSocialMediaInfo() {
    api.getSocialMediaInfo().then(socialMediaInfo => {
      setSocialMediaInfo(socialMediaInfo);
    });
  }

  useEffect(() => {
    getSocialMediaInfo();
  }, []);

  return { socialMediaInfo, setSocialMediaInfo, getSocialMediaInfo };
}

function useStockSymbolData() {
  let [stockSymbols, setStocksSymbols] = useState([]);

  function getStockSymbols() {
    api.getStockSymbols().then(stocksSymbols => {
      setStocksSymbols(stocksSymbols);
    });
  }

  useEffect(() => {
    getStockSymbols();
  }, []);

  return { stockSymbols, setStocksSymbols, getStockSymbols };
}

function App() {
  const { stocks, getStocks } = useStockData(initialStartDate, initialEndDate);
  const { socialMediaInfo } = useSocialMediaData();
  const { stockSymbols } = useStockSymbolData();

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
      <Header>
        <StockFilterForm />
      </Header>
      <StockList />
    </Provider>
  );
}

export default App;
