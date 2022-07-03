import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./components/Coin/Coin.module.scss";
import Coin from "./components/Coin/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.coinApp}>
      <div className={styles.coinSearch}>
        <h1 className={styles.coinText}>Search a currency coin</h1>
        <form>
          <input
            className={styles.coinInput}
            type="text"
            placeholder="Enter a currency coin"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            volume={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.market_cap_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
