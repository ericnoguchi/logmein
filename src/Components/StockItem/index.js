import React from "react";
import "./index.css";

export function StockItem(props) {
  return (
    <div className="stock-item">
      <div className="stock-item__item">{props.stockSymbol}</div>
      <div className="stock-item__item">{props.title}</div>
      <div className="stock-item__item">{props.date}</div>
      <div className="stock-item__item">${props.price}</div>
      <div className="stock-item__item">{props.recommendation.title}</div>
      <div className="stock-item__item">
        {props.socialMedia.socialMediaTitle}:{" "}
        {props.socialMedia.socialMediaCount} posts
      </div>
    </div>
  );
}

export default StockItem;
