import React, { useState, useRef, useEffect, useCallback } from "react";

const OrdersBook = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [data, setData] = useState(null);
    const [status, setStatus] = useState("");
    const ws = useRef(null);

    useEffect(() => {
        if (!isPaused) {
            ws.current = new WebSocket("wss://stream.binance.com:9443/ws/!bookTicker"); // создаем ws соединение
            ws.current.onopen = () => setStatus("Соединение открыто");  // callback на ивент открытия соединения
            ws.current.onclose = () => setStatus("Соединение закрыто"); // callback на ивент закрытия соединения

            gettingData();
        }

        return () => ws.current.close(); // кода меняется isPaused - соединение закрывается
    }, [ws, isPaused]);

    const gettingData = useCallback(() => {
        if (!ws.current) return;

        ws.current.onmessage = e => {                //подписка на получение данных по вебсокету
            if (isPaused) return;
            const res = []
            const message = e.data;
            if(res.find(x => x.s !== message.s)){
              res.push(message.s)
            } else {
              
            }
            setData(res);
            console.log(res)
        };
    }, [isPaused]);

    return (
        <>
            {!!data &&
                <div>
                    <div>
                        <h2>{status}</h2>
                        {/* <p>{`connection ID: ${data?.connectionID}`}</p>
                        <p>{`event: ${data?.event}`}</p>
                        <p>{`status: ${data?.status}`}</p>
                        <p>{`version: ${data?.version}`}</p> */}
                    </div>
                    <button onClick={() => {
                        ws.current.close();
                        setIsPaused(!isPaused)
                    }}>{!isPaused ? 'Остановить соединение' : 'Открыть соединение' }</button>
                </div>
            }
        </>
    )
}

export default OrdersBook;