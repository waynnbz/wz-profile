import { useTransition, animated } from '@react-spring/web';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from '../utils/theme';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { AiOutlineSwapRight as SwapRightIcon } from 'react-icons/ai';
// import { clearTimeout } from 'timers';

type Props = {
  darker: boolean;
};

function Hero({ darker }: Props) {
  // const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  // const [items, setItems] = useState<string[]>([]);
  // const { isDarkMode } = useTheme();
  // const lightColors = ['#8fa5b6', '#28d79f', '#c23369', '#28b4d7'];
  // // const lightColors = ['#D6D6D6', '#72B940', '#EF7432', '#2C60EF']
  // const darkColors = ['#D4D4D4', '#CAB853', '#456B96', '#AA455D'];

  // const transitions = useTransition(items, {
  //   from: {
  //     opacity: 0,
  //     height: 0,
  //     innerHeight: 124,
  //     transform: 'perspective(600px) rotateX(0deg)',
  //     color: isDarkMode ? darkColors[0] : lightColors[0],
  //   },
  //   enter: [
  //     { opacity: 1, height: 124, innerHeight: 124 },
  //     {
  //       transform: 'perspective(600px) rotateX(180deg)',
  //       color: isDarkMode ? darkColors[1] : lightColors[1],
  //     },
  //     { transform: 'perspective(600px) rotateX(0deg)' },
  //   ],
  //   leave: [
  //     { color: isDarkMode ? darkColors[2] : lightColors[2] },
  //     { innerHeight: 0 },
  //     { opacity: 0, height: 0 },
  //   ],
  //   update: { color: isDarkMode ? darkColors[3] : lightColors[3] },
  // });

  // const reset = useCallback(() => {
  //   const greetings = ["Hi, I'm Waynn.", 'Product Ops &', 'Web Developer'];

  //   ref.current.forEach(clearTimeout);
  //   ref.current = [];
  //   setItems([]);
  //   ref.current.push(setTimeout(() => setItems(greetings), 2000));
  //   ref.current.push(
  //     setTimeout(() => setItems([greetings[0], greetings[2]]), 5000),
  //   );
  //   ref.current.push(
  //     setTimeout(
  //       () => setItems([greetings[0], 'Mobile &', greetings[2]]),
  //       8000,
  //     ),
  //   );
  // }, []);

  // useEffect(() => {
  //   reset();
  //   return () => ref.current.forEach(clearTimeout);
  // }, []);

  return (
    <div
      id="hero"
      className={`flex flex-col items-center h-screen justify-center text-left gap-8 pt-24 bg-slate-100 
      md:flex-row md:justify-between md:text-left md:gap-24 xl:px-64 md:px-32 md:py-0
      ${darker && 'darker'}
    `}
    >
      {/* <div className="flex justify-center flex-col text-8xl font-bold">
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div style={rest} onClick={reset}>
            <animated.div
              className="cursor-pointer"
              style={{ overflow: 'hidden', height: innerHeight }}
            >
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div> */}
      <div
        className="flex flex-col justify-center items-star font-VisueltPro
        text-3xl md:text-4xl xl:text-6xl leading-loose"
      >
        <Image
          src="/quote.svg"
          alt="quote"
          width="128"
          height="128"
          className="md:mb-8 md:w-fit md:h-fit w-[64px] h-[64px] mb-0"
        ></Image>
        <h2 className="leading-tight md:leading-0 whitespace-nowrap">
          Hi, I{"'"}m{' '}
          <span className="dark:decoration-brand-blue/60 decoration-brand-yellow/60  font-bold">
            Wei Peng
          </span>
          <br />
          Software Developer
        </h2>
        <p className="text-sm md:text-2xl xl:text-2xl font-Rubik font-normal text-[#AFADAE] mt-2 mb-4 md:mt-4 md:mb-16">
          Based in Singapore
        </p>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          // offset={-80}
          className="flex justify-start items-center -ml-3 px-5 w-12 h-12 rounded-full cursor-pointer
          md:w-16 md:h-16 md:px-8 md:-ml-5
          dark:bg-brand-blue/80 bg-brand-yellow/80
          hover:translate-x-2 md:hover:translate-x-4 hover:w-52 md:hover:w-[318px] transition-all duration-500 animate-pulse hover:animate-none
        "
        >
          <div className="text-xl md:text-3xl font-Rubik font-medium whitespace-nowrap flex items-center gap-2 md:gap-4 tracking-wide">
            View all works <SwapRightIcon className="scale-x-150" />
          </div>
        </Link>
      </div>

      <div className="flex relative w-3/5 min-w-[238px] sm:w-2/5 h-3/5">
        <Image
          src="/web3Coder.png"
          alt="web3 coder png"
          fill
          className="object-contain md:object-cover object-top overflow-visible"
        />
      </div>
    </div>
  );
}

export default Hero;
