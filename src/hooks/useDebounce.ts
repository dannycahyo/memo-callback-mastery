import { useState, useEffect } from "react";

type DebounceParams<T> = {
  value: T;
  delay: number;
};

function useDebounce<T>({ value, delay }: DebounceParams<T>): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export { useDebounce };
