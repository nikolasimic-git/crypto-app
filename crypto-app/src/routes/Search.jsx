import React, { useState } from "react";
import axios from "axios";
import { Search2Icon } from "@chakra-ui/icons";
import "./Search.css";
import { Link } from "react-router-dom";
import SearchItem from "./SearchItem";
import Coin from "./Coin";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [coins, setCoins] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${searchTerm}`
      );

      console.log(response.data);

      if (Array.isArray(response.data.coins)) {
        setCoins(response.data.coins);
      } else {
        console.error("Coins data is not an array:", response.data.coins);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search for a crypto"
        />
        <Search2Icon
          as="button"
          onClick={handleSearch}
          width={"10%"}
          cursor={"pointer"}
        />
      </div>
      <div className="search-container">
        <div className="search-heading">
          <p>#</p>
          <p className="coin-name">Coin</p>        
        </div>
      </div>
      {coins.map((coin) => (
        <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
          <SearchItem coins={coins} />
        </Link>
      ))}
    </div>
  );
};

export default Search;
