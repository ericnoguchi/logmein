import React, { useContext, useState } from "react";
import Context from "../../context";
import { dateToStr, strToToDate } from "../../Services/utils";
import Select from "../Select";
import "./index.css";

function StockFilterForm() {
  const {
    initialEndDate,
    initialStartDate,
    getStocks,
    stockSymbols,
    socialMediaInfo
  } = useContext(Context);

  const [startDate, setStartDate] = useState(dateToStr(initialStartDate));
  const [endDate, setEndDate] = useState(dateToStr(initialEndDate));
  const [socialMediaType, setSocialMediaType] = useState("");
  const [stockSymbol, setStockSymbol] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    getStocks(
      strToToDate(startDate),
      strToToDate(endDate),
      stockSymbol,
      socialMediaType
    );
  }

  return (
    <form className="stock-filter-form" onSubmit={handleSubmit}>
      <Select
        collection={stockSymbols}
        valueProp="symbol"
        titleProp="title"
        value={stockSymbol}
        onChange={e => setStockSymbol(e.target.value)}
      />

      <Select
        collection={socialMediaInfo}
        valueProp="id"
        titleProp="title"
        value={socialMediaType}
        onChange={e => setSocialMediaType(e.target.value)}
      />

      <input
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        type="date"
      />
      <input
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
        type="date"
      />
      <button>filter</button>
    </form>
  );
}

export default StockFilterForm;
