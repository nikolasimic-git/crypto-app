import React from "react";
import "./Search.css";
import Coin from "./Coin";
import Search from "./Search";
import { Link } from "react-router-dom";

const SearchItem = ({ coins }) => {
  return (
    <div className="search-container">
      <div className="coins">
        {coins.map((coin) => (
          <div className="search-coin-row" key={coin.id}>
            <p>{coin.market_cap_rank}</p>
            <div className="img-symbol">
              <img src={coin.large} alt="/" />
              <p>{coin.symbol.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchItem;
