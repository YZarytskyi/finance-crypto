import React from 'react'
import { useAppDispatch } from 'hooks/redux-hooks'
import { setPair1, setPair2, setPair3 } from 'Store/Reducers/arbitrageSlice'
import { Result } from 'types/Types'
import { removeFloatNull } from 'utils/utils'
import style from './Arbitrage.module.scss'

interface TableArbitrageBodyProps {
  result: Array<Result>
}

const TableArbitrageBody = ({ result }: TableArbitrageBodyProps) => {
  const dispatch = useAppDispatch()

  const handleClickPairs = (pairs: Result) => {
    dispatch(setPair1(pairs.pair1))
    dispatch(setPair2(pairs.pair2))
    dispatch(setPair3(pairs.pair3))
  }

  return (
    <>
      {result.map((pairs, index) => (
        <tr key={index} className={style.arbitrageBody} onClick={() => handleClickPairs(pairs)}>
          <td>{pairs?.pair1}</td>
          <td>{removeFloatNull(+pairs.price1)}</td>
          <td>{pairs?.pair2}</td>
          <td>{removeFloatNull(+pairs.price2)}</td>
          <td>{pairs?.pair3}</td>
          <td>{removeFloatNull(+pairs.price3)}</td>
          <td>{pairs?.result}</td>
        </tr>
      ))}
    </>
  )
}

export default React.memo(TableArbitrageBody)
