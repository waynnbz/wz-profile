import React from 'react';
import { useTheme } from '../utils/theme';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useRouter } from 'next/router';

function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const router = useRouter();

  return (
    <header className="sticky top-0 flex w-full justify-around items-center bg-slate-500/30 py-4 z-20">
      <div
        onClick={() => router.push('#')}
        className="text-md leading-4 tracking-wider font-bold flex flex-col cursor-pointer hover:opacity-80"
      >
        <span>__</span>
        <span>____</span>
      </div>
      <button
        className=" bg-gray-700 text-gray-100 dark:bg-gray-300 dark:text-gray-800 font-medium p-2 rounded-full hover:shadow-md hover:opacity-80 active:scale-95"
        onClick={() => {
          toggleDarkMode();
          localStorage.setItem('dark', JSON.stringify(!isDarkMode));
        }}
      >
        {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </header>
  );
}

export default Header;
