import { useTransition, animated } from '@react-spring/web';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from '../utils/theme';
import Image from 'next/image';
// import { clearTimeout } from 'timers';

type Props = {
  darker: boolean;
};

function Hero({ darker }: Props) {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, setItems] = useState<string[]>([]);
  const { isDarkMode } = useTheme();
  const lightColors = ['#8fa5b6', '#28d79f', '#c23369', '#28b4d7'];
  // const lightColors = ['#D6D6D6', '#72B940', '#EF7432', '#2C60EF']
  const darkColors = ['#D4D4D4', '#CAB853', '#456B96', '#AA455D'];

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 124,
      transform: 'perspective(600px) rotateX(0deg)',
      color: isDarkMode ? darkColors[0] : lightColors[0],
    },
    enter: [
      { opacity: 1, height: 124, innerHeight: 124 },
      {
        transform: 'perspective(600px) rotateX(180deg)',
        color: isDarkMode ? darkColors[1] : lightColors[1],
      },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [
      { color: isDarkMode ? darkColors[2] : lightColors[2] },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: isDarkMode ? darkColors[3] : lightColors[3] },
  });

  const reset = useCallback(() => {
    const greetings = ["Hi, I'm Waynn.", 'Product Ops &', 'Web Developer'];

    ref.current.forEach(clearTimeout);
    ref.current = [];
    setItems([]);
    ref.current.push(setTimeout(() => setItems(greetings), 2000));
    ref.current.push(
      setTimeout(() => setItems([greetings[0], greetings[2]]), 5000),
    );
    ref.current.push(
      setTimeout(
        () => setItems([greetings[0], 'Mobile &', greetings[2]]),
        8000,
      ),
    );
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  return (
    <div
      id="hero"
      className={`flex flex-col items-center h-screen justify-center text-center px-64 gap-6 
      lg:flex-row lg:justify-between lg:text-left lg:gap-24
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
      <div className="flex justify-center items-center text-4xl md:text-5xl lg:text-6xl font-CircularStd leading-tight">
        <h2>
          Hi, I{'\''}m{' '}
          <span className="decoration-brand-blue/50 dark:decoration-brand-yellow/50 underline">
            WEI PENG
          </span>
          <br />
          Software Developer
        </h2>
        <></>
      </div>

      <div className="flex relative w-[300px] h-[500px] lg:w-[600px] lg:h-[600px] lg:mt-[480px]">
        <Image
          src="/web3Coder.png"
          alt="web3 coder png"
          fill
          className="object-cover overflow-visible"
        />
      </div>
    </div>
  );

  // return (
  //   <div className=" font-bold text-6xl flex justify-center text-left py-44 px-12 leading-relaxed ">
  //     Hi, I'm Waynn. <br />
  //     React Native & Web Developer
  //   </div>
  // );
}

export default Hero;
