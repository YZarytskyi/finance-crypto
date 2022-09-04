import style from "./Arbitrage.module.scss";
import { parseValue } from "../Coins/TableBody";
import { AppDispatch } from "../../../Store/store";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";


interface TableArbitrageBodyProps {
  result: {
    pair1: string;
    price1: string;
    pair2: string;
    price2: string;
    pair3: string;
    price3: string;
    result: string;
  }[];
  setPair1: ActionCreatorWithPayload<string, string>;
  setPair2: ActionCreatorWithPayload<string, string>;
  setPair3: ActionCreatorWithPayload<string, string>;
  dispatch: AppDispatch;
}
const TableArbitrageBody: React.FC<TableArbitrageBodyProps> = ({
  result,
  setPair1,
  setPair2,
  setPair3,
  dispatch,
}) => {
  interface Pairs {
    pair1: string;
    price1: string;
    pair2: string;
    price2: string;
    pair3: string;
    price3: string;
    result: string;
  }
  const handleClickPairs = (pairs: Pairs) => {
    dispatch(setPair1(pairs.pair1));
    dispatch(setPair2(pairs.pair2));
    dispatch(setPair3(pairs.pair3));
  };

  return (
    <>
      {result.map((pairs, index) => (
        <tr
          key={index}
          className={style.arbitrageBody}
          onClick={() => handleClickPairs(pairs)}
        >
          <td>{pairs.pair1}</td>
          <td>{parseValue(+pairs.price1)}</td>
          <td>{pairs.pair2}</td>
          <td>{parseValue(+pairs.price2)}</td>
          <td>{pairs.pair3}</td>
          <td>{parseValue(+pairs.price3)}</td>
          <td>{pairs.result}</td>
        </tr>
      ))}
    </>
  );
};

export default TableArbitrageBody;
