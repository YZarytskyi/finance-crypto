import NavCrypto from "../NavCrypto";
import TableScanner from "./TableScanner";
import CheckResult from "./CheckResult";
import { COOKIE_TOKEN_NAME, getCookie } from "../../../utils/cookie";
// import { Navigate } from "react-router-dom";

const Arbitrage = () => {
  const userId: string | null = getCookie(COOKIE_TOKEN_NAME);
  
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
