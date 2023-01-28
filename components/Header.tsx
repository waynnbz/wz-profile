import React from 'react';
import { useTheme } from '../utils/theme';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
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
      className={`fixed top-0 w-screen flex justify-between items-center px-16 py-4 z-20 
      bg-slate-900/50 dark:bg-slate-700/50
      xl:px-64 md:px-32 md:py-8 lg:py-10
      `}
    >
      <ScrollLink
        to="hero"
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        className="text-[32px] font-bold  font-VisueltPro cursor-pointer"
      >
        <span className='hidden lg:inline'>WeiPeng ZENG</span>
        <span className='inline lg:hidden'>WP ZENG</span>
        <span className="text-brand-blue/50 dark:text-brand-yellow/50">.</span>
      </ScrollLink>

      <nav>
        <ul
          className="hidden items-center lg:flex lg:gap-8 2xl:gap-16
          text-[24px]
        "
        >
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
              className=" bg-gray-700 text-gray-100 dark:bg-gray-200 dark:text-gray-800 text-2xl p-2 rounded-full hover:shadow-md hover:opacity-80 active:scale-95"
              onClick={() => {
                toggleDarkMode();
                localStorage.setItem('dark', JSON.stringify(!isDarkMode));
              }}
            >
              {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
