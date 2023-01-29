import React from 'react';
import { useTheme } from '../utils/theme';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { TfiMenu as MenuIcon } from 'react-icons/tfi';
import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';

type Props = {
  darker: boolean;
};

function Header({ darker }: Props) {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const router = useRouter();

  return (
    <header
      className={`fixed top-0 w-screen flex justify-between items-center py-8 z-50
      bg-slate-100/50 dark:bg-slate-800/50
      xl:px-64 md:px-32 sm:px-16 px-8 md:pt-8 lg:pt-10
      `}
    >
      <ScrollLink
        to="hero"
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        className="text-[32px] font-bold cursor-pointer"
      >
        <span className="hidden lg:inline">WEIPENG</span>
        <span className="inline lg:hidden">WP</span>
        <span className="dark:text-brand-blue text-brand-yellow">.</span>
      </ScrollLink>

      <nav>
        <ul
          className="hidden items-center lg:flex lg:gap-8 2xl:gap-16
           text-[20px]  xl:text-[24px]
        "
        >
          {/* <li>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              // offset={-80}
              className="cursor-pointer hidden md:flex"
            >
              Skills
            </ScrollLink>
          </li> */}
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              // offset={-80}
              className="cursor-pointer hidden md:flex"
            >
              About Me
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              // offset={-80}
              className="cursor-pointer hidden md:flex"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              // offset={-80}
              className="cursor-pointer hidden md:flex"
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <button
              className=" bg-gray-700 text-gray-100 dark:bg-gray-200 dark:text-gray-800 text-2xl p-2 rounded-full 
              hover:shadow-md hover:opacity-80 active:scale-95 transition-opacity hover:duration-500"
              onClick={() => {
                toggleDarkMode();
                localStorage.setItem('dark', JSON.stringify(!isDarkMode));
              }}
            >
              {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </li>
        </ul>
        <div className="flex lg:hidden">
          {/* <MenuIcon onClick={() => {}} className='text-3xl cursor-pointer' /> */}
          <button
            className=" bg-gray-700 text-gray-100 dark:bg-gray-200 dark:text-gray-800 text-2xl p-2 rounded-full 
              hover:shadow-md hover:opacity-80 active:scale-95 transition-opacity hover:duration-500"
            onClick={() => {
              toggleDarkMode();
              localStorage.setItem('dark', JSON.stringify(!isDarkMode));
            }}
          >
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
