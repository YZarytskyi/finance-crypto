import { ScannerTable } from './ScannerTable';
import { CheckResult } from './CheckResult';
// import { COOKIE_TOKEN_NAME, getCookie } from '../../../utils/cookie';
// import { Navigate } from "react-router-dom";

const Arbitrage = () => {
  // const userId: string | null = getCookie(COOKIE_TOKEN_NAME);
  
  return (
    // <>
    //   {userId
    //   ? <>
    //     <CheckResult />
    //     <TableScanner />
    //   </>
    //   : <Navigate to="/"/>
    //   }
    // </>
    <>
      <CheckResult />
      <ScannerTable />
    </>
  );
};

export default Arbitrage;