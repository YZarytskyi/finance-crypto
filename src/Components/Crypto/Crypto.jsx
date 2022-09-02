import React, { useEffect } from "react";
import style from "./Crypto.module.scss";
import TableCoins from "./Coins/Table";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchExchanges, fetchMarkets } from "../../Store/Reducers/cryptoSlice";
import NavCrypto from "./NavCrypto";

const Crypto = () => {

  const dispatch = useDispatch();
  const markets = useSelector((state) => state.crypto.markets);
  const exchanges = useSelector((state) => state.crypto.exchanges);

  useEffect(() => {
    if (markets.length === 0) {
      dispatch(fetchMarkets());
    }
    if (exchanges.length === 0) {
      dispatch(fetchExchanges())
    }
  }, []);

  return (
    <>
      <NavCrypto />
      <div className={style.crypto}>
        {markets.length !== 0 && <TableCoins />}
      </div>
    </>
  );
};

export default Crypto;
