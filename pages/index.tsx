import { Inter } from '@next/font/google';
import { useTheme } from '../utils/theme';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode && 'dark'}`}>
      <Head>
        <title>WP ZENG</title>
      </Head>
      <div
        className={`relative h-full
        text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 
        transition-colors duration-500 ease-in-out`}
      >
        <Header darker={true} />

        <Hero darker={true} />

        <Projects darker={false} />

        <About darker={true} />

        {/* <Skills /> */}

        {/* Work Experience */}

        <Contact darker={false} />
      </div>
    </div>
  );
}
