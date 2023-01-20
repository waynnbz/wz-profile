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
        className={`relative h-screen overflow-scroll
        text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 transition duration-500 ease-in-out`}
      >
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        {/* <Skills /> */}
        {/* Work Experience */}

        <section id="projects" className="snap-center">
          <Projects />
        </section>

        <section id="contact" className="snap-end">
          <Contact />
        </section>
      </div>
    </div>
  );
}
