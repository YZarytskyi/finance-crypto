import { useEffect, useState } from "react";
import style from "./Converter.module.scss";
import { Autocomplete } from "./Converter";
import sprite from "../../../assets/images/icons.svg";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import { fetchPrice, removePrice } from "../../../Store/Reducers/converterSlice";

interface LastUpdateTimerProps {
  coin: Autocomplete;
}

const LastUpdateTimer = ({ coin }: LastUpdateTimerProps) => {
  const dispatch = useAppDispatch();
  const price = useAppSelector((state) => state.converter.price);
  const [updateCount, setUpdateCount] = useState<number>(0);
  const [timerChange, setTimerChange] = useState<number>(1000);

  let timer: any = null;

  useEffect(() => {
    clearInterval(timer);
    if (!price) {
      return
    }
    timer = setTimeout(() => {
      setUpdateCount((prev) => prev + 1);
      if (updateCount === 59) {
        setUpdateCount(1);
        setTimerChange(60000);
      }
    }, timerChange);

    return () => clearInterval(timer);
  }, [updateCount, price])

  useEffect(() => {
    setUpdateCount(0);
    setTimerChange(1000);
  }, [coin]);

  function handleUpdate() {
    dispatch(removePrice())
    dispatch(fetchPrice(coin.pair));
    setUpdateCount(0);
    setTimerChange(1000);
  }

  return (
    <div className={style.lastUpdateContainer}>
      <p className={style.lastUpdateText}>
        Last price update:{" "}
        <span>
          {updateCount}
          {timerChange === 1000 ? "s" : "m"}
        </span>{" "}
        ago
      </p>
      <svg
        className={style.refreshIcon}
        role="button"
        onClick={() => handleUpdate()}
      >
        <use href={sprite + "#refresh"} />
      </svg>
    </div>
  );
};

export default LastUpdateTimer;
