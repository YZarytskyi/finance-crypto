import React, { useEffect, useState } from "react";
import style from "./Converter.module.scss";
import { Autocomplete } from "./Converter"

interface LastUpdateTimerProps {
  coin: Autocomplete
}

const LastUpdateTimer = ({ coin }: LastUpdateTimerProps) => {
  const [updateCount, setUpdateCount] = useState<number>(0);
  const [timerChange, setTimerChange] = useState<number>(1000);

  useEffect(() => {
    let timer: any;
    timer = setTimeout(() => {
      setUpdateCount(updateCount + 1);
      if (updateCount === 59) {
        setUpdateCount(1);
        setTimerChange(60000);
      }
    }, timerChange);
    return () => clearInterval(timer);
  }, [updateCount]);

  useEffect(() => {
    setUpdateCount(0);;
  }, [coin]);

  return (
    <p className={style.lastUpdateText}>
      Last price update:{" "}
      <span>
        {updateCount}
        {timerChange === 1000 ? "s" : "m"}
      </span>{" "}
      ago
    </p>
  );
};

export default LastUpdateTimer;
