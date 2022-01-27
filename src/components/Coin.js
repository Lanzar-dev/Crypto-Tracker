import React from "react";
import CoinItem from "./CoinItem";
import { Link } from "react-router-dom";
import "./coin.css";

const Coin = ({ coins }) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24hr</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>
      </div>
      {coins.map((coin) => {
        const {
          id,
          market_cap_rank,
          image,
          symbol,
          current_price,
          price_change_percentage_24h,
          total_volume,
          market_cap,
        } = coin;
        return (
          <Link to={`${id}`} key={id}>
            <CoinItem
              marketCapRank={market_cap_rank}
              image={image}
              symbol={symbol}
              currentPrice={current_price}
              priceChange={price_change_percentage_24h}
              totalVolume={total_volume}
              marketCap={market_cap}
            />
          </Link>
        );
      })}

      {/* <CoinItem
        marketCapRank={marketCapRank}
        image={image}
        symbol={symbol}
        currentPrice={currentPrice}
        priceChange={priceChange}
        totalVolume={totalVolume}
        marketCap={marketCap}
      /> */}
    </div>
  );
};

export default Coin;
