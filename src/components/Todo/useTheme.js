import { useState } from 'react';

const appTheme = {
  dark: 'dark',
  light: 'light'
};

export default function useTheme() {
  const [theme, setTheme] = useState(appTheme.light);

  const toggleTheme = () => {
    setTheme(theme === appTheme.light ? appTheme.dark : appTheme.light);
  };

  return [theme, toggleTheme];
}
