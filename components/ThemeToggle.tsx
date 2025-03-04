'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const lightMode = () => (
    <div className={`flex`}>
      <span>☀️</span>
      <span className={`hidden md:block  pl-2.5`}>Light Mode</span>
    </div>
  );
  const darkMode = () => (
    <div className={`flex`}>
      <span>🌙 </span>
      <span className={`hidden md:block  pl-2.5`}> Dark Mode</span>
    </div>
  );
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      {theme === 'dark' ? lightMode() : darkMode()}
    </button>
  );
}
