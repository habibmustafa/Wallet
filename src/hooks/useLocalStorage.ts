import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type ReturnValue<T> = [T, Dispatch<SetStateAction<T>>];

function useLocalStorage<T>(key: string, initialValue: T): ReturnValue<T> {
  const storedValue: T = JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue));

  const [value, setValue] = useState<T>(storedValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
