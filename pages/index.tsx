import { Inter } from '@next/font/google';
import { useTheme } from '../utils/theme';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode && 'dark'}`}>
      <div
        className={`bg-white dark:bg-black transition duration-500 ease-in-out origin-top-right`}
      >
        <Header />
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
