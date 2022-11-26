import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Coin from "./components/data";


function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => alert(error));
  }, []);

  const filteredCoins = coins;

  return (
    <>
      <div className="App">
        
      </div>
      <div className="crypto-app fluid-container">
      <h1>Crypto Dashboard</h1>
        {filteredCoins.map((ele) => {
          return (
            <Coin
              key={ele.id}
              name={ele.name}
              price={ele.current_price}
              symbol={ele.symbol}
              marketcap={ele.total_volume}
              volume={ele.market_cap}
              image={ele.image}
              priceChange={ele.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
