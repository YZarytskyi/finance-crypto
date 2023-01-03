import { useLayoutEffect, useRef } from 'react';

function usePrevious<T>(value: T) {
  const valueRef = useRef<T>(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}
export default usePrevious;