import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CryptoList.css';

function CryptoList() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 10,
          page: 1,
          sparkline: false,
        },
      })
      .then((res) => setCoins(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="crypto-container">
      <h2>🚀 Top 10 Cryptocurrencies</h2>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            <img src={coin.image} alt={coin.name} />
            <span>{coin.name} ({coin.symbol.toUpperCase()})</span> - 💲{coin.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CryptoList;
