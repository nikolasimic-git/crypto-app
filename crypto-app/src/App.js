import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import Coin from "./routes/Coin";
import Search from "./routes/Search";
import { AuthProvider } from "./context/useAuth";
import PrivateRoute from "./routes/PrivateRoute";
function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Coins coins={coins} />} />
          <Route path="/coin" element={<PrivateRoute element={<Coin />} />}>
            <Route path=":coinId" element={<Coin />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;