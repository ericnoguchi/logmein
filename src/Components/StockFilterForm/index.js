import React, { useContext, useState } from "react";
import Context from "../../Services/context";
import { dateToStr, strToDate } from "../../Services/utils";
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
    getStocks(startDate, endDate, stockSymbol, socialMediaType);
  }

  return (
    <form className="stock-filter-form" onSubmit={handleSubmit}>
      <Select
        data-testid="stockSymbolSelect"
        className="stock-filter-form__control"
        collection={stockSymbols}
        valueProp="symbol"
        titleProp="title"
        value={stockSymbol}
        onChange={e => setStockSymbol(e.target.value)}
      />

      <Select
        data-testid="socialMediaSelect"
        className="stock-filter-form__control"
        collection={socialMediaInfo}
        valueProp="id"
        titleProp="title"
        value={socialMediaType}
        onChange={e => setSocialMediaType(e.target.value)}
      />

      <input
        data-testid="startDateInput"
        className="stock-filter-form__control"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        type="date"
      />
      <input
        data-testid="endDateInput"
        className="stock-filter-form__control"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
        type="date"
      />
      <button
        data-testid="submitButton"
        className="stock-filter-form__control stock-filter-form__control--button"
      >
        Search
      </button>
    </form>
  );
}

export default StockFilterForm;
