import { useEffect, useRef } from 'react';

export type Themes = 'light' | 'dark' | 'automatic';

const useTheme = () => {
  const html = document.querySelector('html');
  const setTheme = (theme: Themes) => {
    if (theme === 'light') {
      html?.classList.remove('dark');
      html?.classList.add('light');
      localStorage.setItem('selectedTheme', 'light');
    }
    if (theme === 'dark') {
      html?.classList.remove('light');
      html?.classList.add('dark');
      localStorage.setItem('selectedTheme', 'dark');
    }
    if (theme === 'automatic') {
      html?.classList.remove('dark');
      html?.classList.remove('light');
      localStorage.setItem('selectedTheme', 'automatic');
    }
  };
  useEffect(() => {
    const theme = localStorage.getItem('selectedTheme') as Themes;
    if (theme) {
      setTheme(theme);
    }
  }, []);
  return { setTheme };
};

export default useTheme;
