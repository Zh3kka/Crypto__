import React from "react";
import styles from "./Coin.module.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <div className={styles.coinContainer}>
      <div className={styles.coinRow}>
        <div className={styles.coin}>
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className={styles.coinSymbol}>{symbol}</p>
        </div>
        <div className={styles.coinData}>
          <p className={styles.coinPrice}>$ {price}</p>
          <p className={styles.coinVolume}>$ {volume.toLocaleString()} RUB</p>
          {priceChange < 0 ? (
            <p className={styles.coinPercentRed}> <KeyboardArrowDownIcon/>{priceChange.toFixed(2)}% </p>
          ) : (
            <p className={styles.coinPercentGreen}><KeyboardArrowUpIcon/> {priceChange.toFixed(2)}%</p>
          )}
          <p className={styles.coinMarketCap}>Market cap: {marketCap}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
