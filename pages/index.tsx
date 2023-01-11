import { Inter } from '@next/font/google';
import { useTheme } from '../utils/theme';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode && 'dark'}`}>
      <div
        className={`text-gray-800 dark:text-gray-200 bg-white dark:bg-black transition duration-500 ease-in-out origin-top-right`}
      >
        <Header />
        <Hero />
        <About />
        <Skills />
        <Project title='Project #1' description='details here' demoImage='image url' />
        <Project title='Project #2' description='details here' demoImage='image url' />
        <Project title='Project #3' description='details here' demoImage='image url' />
        <Contact />
      </div>
    </div>
  );
}
