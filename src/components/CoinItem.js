import React from "react";
import "./coin.css";

const CoinItem = ({
  marketCapRank,
  image,
  symbol,
  currentPrice,
  priceChange,
  totalVolume,
  marketCap,
}) => {
  return (
    <div className="coin-row">
      <p>{marketCapRank}</p>
      <div className="img-symbol">
        <img src={image} alt="crypto" />
        <p>{symbol.toUpperCase()}</p>
      </div>
      <p>${currentPrice.toLocaleString()}</p>
      <p className={`${priceChange < 0 ? "red" : "green"}`}>
        {priceChange.toFixed(2)}%
      </p>
      <p className="hide-mobile">${totalVolume.toLocaleString()}</p>
      <p className="hide-mobile">${marketCap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
