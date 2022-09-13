import style from "./Arbitrage.module.scss";
import { parseValue } from "../Coins/TableBody";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import { setPair1, setPair2, setPair3 } from "../../../Store/Reducers/cryptoSlice";
import { Result } from "../../../Types/Types";


const TableArbitrageBody = () => {

  const result = useAppSelector((state) => state.crypto.result);
  const dispatch = useAppDispatch();

  const handleClickPairs = (pairs: Result) => {
    dispatch(setPair1(pairs.pair1));
    dispatch(setPair2(pairs.pair2));
    dispatch(setPair3(pairs.pair3));
  };

  return (
    <>
      {result.map((pairs: any, index: number) => (
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
