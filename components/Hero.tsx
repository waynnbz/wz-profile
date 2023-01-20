import { useTransition, animated } from '@react-spring/web';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from '../utils/theme';
import Image from 'next/image';
// import { clearTimeout } from 'timers';

function Hero() {
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
    <div className="flex flex-col items-center h-screen py-40 justify-center gap-6 text-center lg:pl-36
      lg:flex-row lg:text-left lg:gap-24
    ">
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
      <div className="flex justify-center items-center text-4xl md:text-6xl lg:text-8xl font-CircularStd leading-tight">
        <h2>
          Hi, Im <span className="decoration-[#F7AB0A]/50 dark:decoration-[#3b82f680] underline">WAYNN</span>
          <br />
          Software Developer
        </h2>
        <></>
      </div>

      <div className="flex relative object-fill w-[400px] h-[600px] lg:w-[600px] lg:h-[800px]">
        <Image
          src="/web3Coder.png"
          alt="web3 coder png"
          fill
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
