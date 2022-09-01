import * as React from "react";
import { parseValue } from "../Coins/TableBody";
import style from "./Arbitrage.module.scss";

const TableArbitrageBody = ({result, setPair1, setPair2, setPair3, dispatch}) => {  

  const handleClickPairs = (pairs) => {
    dispatch(setPair1(pairs.pair1))
    dispatch(setPair2(pairs.pair2))
    dispatch(setPair3(pairs.pair3))
  }

  return result.map((pairs, index) => (
      <tr key={index} className={style.arbitrageBody} onClick={() => handleClickPairs(pairs)}>
        <td>{pairs.pair1}</td>
        <td>{parseValue(pairs.price1)}</td>
        <td>{pairs.pair2}</td>
        <td>{parseValue(pairs.price2)}</td>
        <td>{pairs.pair3}</td>
        <td>{parseValue(pairs.price3)}</td>
        <td>{pairs.result}</td>
      </tr>
    )
  )
};

export default TableArbitrageBody;