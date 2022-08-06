import { act, renderHook } from '@testing-library/react';
import useLocalStorage from '../useLocalStorage';

describe('UseLocalStorageHook', () => {
  test('allows to store, update and retrieve data from localStorage', () => {
    const storageKey = 'theme';
    const storageValue = 'dark';
    const { result } = renderHook(() => useLocalStorage(storageKey, storageValue));
    const [value, setValue] = result.current;

    // initial storage value
    expect(value).toBe(storageValue);

    // update value in local storage
    act(() => setValue('light'));

    // assert updated value from storage
    const [updatedValue] = result.current;
    expect(updatedValue).toBe('light');
  });
});
