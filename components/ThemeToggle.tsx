'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'phosphor-react';

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

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative flex items-center bg-gray-300 dark:bg-gray-700 rounded-full w-14 h-7 p-1 transition-all"
    >
      {/* Sun Icon (Light Mode) */}
      <Sun
        size={16}
        weight="bold"
        className="absolute left-2 text-yellow-500 transition-opacity duration-300"
        style={{ opacity: theme === 'dark' ? 1 : 0 }}
      />

      {/* Moon Icon (Dark Mode) */}
      <Moon
        size={16}
        weight="bold"
        className="absolute right-2 text-white transition-opacity duration-300"
        style={{ opacity: theme === 'dark' ? 0 : 1 }}
      />

      {/* Toggle Button */}
      <div
        className={`absolute w-5 h-5 bg-white dark:bg-gray-900 rounded-full shadow-md transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
        }`}
      />
    </button>
  );
}
