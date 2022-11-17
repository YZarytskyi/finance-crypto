import NavCrypto from "../NavCrypto";
import TableScanner from "./TableScanner";
import CheckResult from "./CheckResult";
import { useAppSelector } from "../../../Store/hooks";
// import { Navigate } from "react-router-dom";

const Arbitrage = () => {
  const userId = useAppSelector(state => state.auth.user.uid);
  return (
    // <>
    //   {userId
    //   ? <> 
    //     <NavCrypto />
    //     <CheckResult />
    //     <TableScanner />
    //   </>
    //   : <Navigate to="/"/>
    //   }
    // </>
    <>
        <NavCrypto />
        <CheckResult />
        <TableScanner />
        </>
  );
};

export default Arbitrage;
