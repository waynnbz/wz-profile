import React from 'react';
import { useTheme } from '../utils/theme';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex justify-around items-center py-12">
      <div className='text-2xl'></div>
      <button
        className="bg-gray-700 text-gray-100 dark:bg-gray-300 dark:text-gray-800 font-medium p-2 text-xl rounded-full hover:shadow-lg"
        onClick={() => {
          toggleDarkMode();
          localStorage.setItem('dark', JSON.stringify(!isDarkMode));
        }}
      >
        {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
}

export default Header;
