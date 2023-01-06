import { useCallback, useState } from "react";
import { localStorageWrapper } from "utils/storageWrapper";
import { AnyFunction } from "types/Types";
import usePrevious from "./usePrevious";

function isFunction(val: unknown): val is AnyFunction {
  return typeof val === "function";
}

export function useLocalStorageState<T>(
  key: string,
  initialValue: T | (() => T)
) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorageWrapper.get<T>(key);

    if (typeof savedValue !== "undefined") {
      return savedValue;
    }

    return isFunction(initialValue) ? initialValue() : initialValue;
  });

  const latestValue = usePrevious(value);

  const updateValue = useCallback(
    (newValue: React.SetStateAction<T>) => {
      setValue(newValue);

      const actualValue = isFunction(newValue)
        ? newValue(latestValue.current)
        : newValue;

      localStorageWrapper.set(key, actualValue);
    },
    [key, latestValue]
  );

  return [value, updateValue] as const;
}