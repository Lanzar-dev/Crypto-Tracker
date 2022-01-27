import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./coinDetails.css";

const CoinDetails = () => {
  const [coin, setCoin] = useState({});

  const { coinId } = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await axios.get(url);
      setCoin(res.data);
    };

    fetchCoins();
  }, []);

  return (
    <div>
      <div className="coin-container">
        <div className="content">
          <h1>{coin.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              <img src={coin.image?.small} alt="coinImg" />
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>
            </div>
            <div className="coin-price">
              <h1>{coin.market_data?.current_price?.usd}</h1>
            </div>
          </div>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{coin.market_data?.price_change_1h_in_currency?.usd}</td>
                <td>{coin.market_data?.price_change_24h_in_currency?.usd}</td>
                <td>{coin.market_data?.price_change_7d_in_currency?.usd}</td>
                <td>{coin.market_data?.price_change_14d_in_currency?.usd}</td>
                <td>{coin.market_data?.price_change_30d_in_currency?.usd}</td>
                <td>{coin.market_data?.price_change_1y_in_currency?.usd}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                <p>{coin.market_data?.low_24h?.usd}</p>
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                <p>{coin.market_data?.high_24h?.usd}</p>
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                <p>{coin.market_data?.market_cap?.usd}</p>
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                <p>{coin.market_data?.circulating_supply}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="about">
            <h3>About</h3>
            <p>{coin.description?.en}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
