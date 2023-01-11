import React from 'react';
import { useTheme } from '../utils/theme';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <button
        className="bg-gray-800 text-gray-200 dark:bg-gray-300 dark:text-gray-800 font-medium p-2 rounded-full"
        onClick={() => {
          toggleDarkMode();
          localStorage.setItem('dark', JSON.stringify(!isDarkMode));
        }}
      >
        {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
}

export default Header;
