import React from 'react';
import { useTheme } from '../utils/theme';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useRouter } from 'next/router';

function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const router = useRouter();

  return (
    <div className="flex justify-around items-center py-12">
      <div
        onClick={() => router.push('/')}
        className="text-xl font-script font-extrabold flex flex-col cursor-pointer hover:opacity-80"
      >
        <span>WP</span>
        <span className="-mt-2">ZENG.</span>
      </div>
      <button
        className="bg-gray-700 text-gray-100 dark:bg-gray-300 dark:text-gray-800 font-medium p-3 text-xl rounded-full hover:shadow-md hover:opacity-80 active:scale-95"
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
