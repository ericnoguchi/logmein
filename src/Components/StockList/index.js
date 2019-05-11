import React, { useContext } from "react";
import Context from "../../Services/context";
import StockItem from "../StockItem";
import "./index.css";

export function StockList() {
  const { stocks } = useContext(Context);

  return (
    <div className="stock-list">
      {stocks.map(stock => (
        <StockItem {...stock} key={stock.stockSymbol + stock.date} />
      ))}
    </div>
  );
}

export default StockList;
