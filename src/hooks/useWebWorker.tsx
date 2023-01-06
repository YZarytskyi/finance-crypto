import { useState } from 'react';
import { AnyFunction, ArbitrageWorkerResult } from 'types/Types';

const workerHandler = (fn: AnyFunction) => {
  onmessage = event => {
    postMessage(fn(event.data));
  };
};

export const useWebWorker = (fn: AnyFunction) => {
  const [result, setResult] = useState<ArbitrageWorkerResult | null>(null);

  const run = (value: any) => {
    const worker = new Worker(
      URL.createObjectURL(new Blob([`(${workerHandler})(${fn})`]))
    );
    worker.onmessage = event => {
      setResult(event.data);
      worker.terminate();
    };
    worker.onerror = (error) => {
      console.log(error.message)
      worker.terminate();
    };
    worker.postMessage(value);
  };

  return {
    result,
    setResult,
    run,
  };
};




// export const useWebWorker = (fn: AnyFunction) => {
//   const [result, setResult] = useState<ArbitrageWorkerResult | null>(null);

//   const workerRef = useRef<Worker | null>(null);

//   useEffect(() => {
//     const worker = new Worker(
//       URL.createObjectURL(new Blob([`(${workerHandler})(${fn})`]))
//     );
//     workerRef.current = worker;
//     worker.onmessage = event => setResult(event.data);
//     return () => {
//       worker.terminate();
//     };
//   }, [fn]);

//   return {
//     result,
//     setResult,
//     run: (value: any) => workerRef.current!.postMessage(value),
//   };
// };
