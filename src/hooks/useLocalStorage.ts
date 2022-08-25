import { useState } from 'react';

type LocalStorage<T> = [T, (value: T) => void];

export function useLocalStorage<T>(key: string, initialValue: T): LocalStorage<T> {
  const [storedValue, setStoredValue]: [T, (value: T) => void] = useState((): T => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T): void => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      throw new Error('Could not save to local storage');
    }
  };

  return [storedValue, setValue];
};
