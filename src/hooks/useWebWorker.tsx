import { useEffect, useRef, useState } from "react";
import { ArbitrageWorkerResult } from "../types/Types";

const workerHandler = (fn: any) => {
  onmessage = (event) => {
    postMessage(fn(event.data))
  }
}

export const useWebWorker = (fn: any) => {
   const [result, setResult] = useState<ArbitrageWorkerResult | null>(null)

  const workerRef = useRef<Worker | null>(null)

  useEffect(() => {
    const worker = new Worker(
      URL.createObjectURL(new Blob([`(${workerHandler})(${fn})`]))
    )
    workerRef.current = worker;
    worker.onmessage = (event) => setResult(event.data)
    return () => {
      worker.terminate()
    }
  }, [fn])

  return {
    result,
    setResult,
    run: (value: any) => workerRef.current!.postMessage(value),
  }
};