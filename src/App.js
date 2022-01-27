import axios from "axios";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Coin from "./components/Coin";
import { FaCoins } from "react-icons/fa";
import CoinDetails from "./pages/CoinDetails";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    setLoading(true);
    const fetchCoins = async () => {
      try {
        const res = await axios.get(url);
        setLoading(false);
        setCoins(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCoins();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <div>
      <div className="nav">
        <Link to="/">
          <div className="navbar">
            <FaCoins className="icon" />
            <h1>
              Coin <span className="purple">Tracker</span>
            </h1>
          </div>
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="coin-input"
          onChange={handleChange}
        />
      </div>
      <Routes>
        <Route path="/" element={<Coin coins={filteredCoins} />} />
        <Route path="/:coinId" element={<CoinDetails />} />
      </Routes>
    </div>
  );
}

export default App;
