import style from "./Crypto.module.scss";
import { useEffect } from "react";
import Coins from "./Coins/Coins";
import { fetchExchanges, fetchMarkets } from "../../Store/Reducers/cryptoSlice";
import NavCrypto from "./NavCrypto";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";

const Crypto = () => {

  const dispatch = useAppDispatch();
  const {markets, exchanges} = useAppSelector((state) => state.crypto);

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
        {markets.length !== 0 && <Coins />}
      </div>
    </>
  );
};

export default Crypto;
