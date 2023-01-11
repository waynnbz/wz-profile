import { Inter } from '@next/font/google';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && 'dark'}`}>
      <div
        className={`bg-white dark:bg-black transition duration-500 ease-in-out origin-top-right scale-100 `}
      >
        <h1 className="">Wei Peng Zeng</h1>
        <span>Developer & Data Scientist</span>
        <nav>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Info</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
