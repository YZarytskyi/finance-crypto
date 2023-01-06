import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import TableArbitrageBody from './TableArbitrageBody';
import { setCurrencies } from 'Store/Reducers/arbitrageSlice';
import { Preloader } from 'Components/Common';
import { arbitrageApi } from 'api/arbitrageApi';
import { useWebWorker } from 'hooks/useWebWorker';
import { getArbitrageTableResult } from 'utils/getArbitrageResult';
import { useAppDispatch } from 'hooks/redux-hooks';
import sprite from 'assets/images/icons.svg';
import style from './Arbitrage.module.scss';

export const ScannerTable = () => {
  const dispatch = useAppDispatch();
  const { result, setResult, run } = useWebWorker(getArbitrageTableResult);

  useEffect(() => {
    getArbitrageData();
  }, []);

  useEffect(() => {
    if (!result) {
      return;
    }
    dispatch(setCurrencies(result.currencies));
  }, [result]);

  async function getArbitrageData() {
    const res = await arbitrageApi.getAllCurrencies();
    run(res);
  }

  const handleRefresh = () => {
    setResult(null);
    getArbitrageData();
  };

  return (
    <>
      <svg className={style.refreshIcon} onClick={handleRefresh}>
        <use href={sprite + '#refresh'} />
      </svg>

      {!result ? (
        <div className={style.tablePreloader}>
          <Preloader className="small" />
        </div>
      ) : (
        <div className={`${style.table} ${style.tableArbitrage}`}>
          <Table hover size="sm" variant="dark">
            <thead className={style.arbitrageHead}>
              <tr>
                <th>Pair&nbsp;1</th>
                <th>Price&nbsp;1</th>
                <th>Pair&nbsp;2</th>
                <th>Price&nbsp;2</th>
                <th>Pair&nbsp;3</th>
                <th>Price&nbsp;3</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <TableArbitrageBody result={result.result} />
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};
