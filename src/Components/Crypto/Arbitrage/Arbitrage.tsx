import NavCrypto from "../NavCrypto";
import { useEffect } from "react"
import TableScanner from "./TableScanner";
import CheckResult from "./CheckResult";
import { fetchCurrencies } from "../../../Store/Reducers/cryptoSlice";
import { useAppDispatch } from "../../../Store/hooks";

const Arbitrage = () => {
  
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  return (
    <>
      <NavCrypto />
      <CheckResult />
      <TableScanner />
    </>
  );
};

export default Arbitrage;
