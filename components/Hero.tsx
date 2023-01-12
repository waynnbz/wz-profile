import { useTransition, animated } from '@react-spring/web';
import React, { useCallback, useEffect, useRef, useState } from 'react';
// import { clearTimeout } from 'timers';

function Hero() {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const greetings = ["Hi, I'm Waynn.", 'React Native &', 'Web Developer'];
  const [items, setItems] = useState<string[]>([]);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [
      { color: '#c23369' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: '#28b4d7' },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    setItems([]);
    ref.current.push(setTimeout(() => setItems(greetings), 2000));
    ref.current.push(
      setTimeout(() => setItems([greetings[0], greetings[2]]), 5000),
    );
    ref.current.push(setTimeout(() => setItems(greetings), 8000));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex min-h-screen py-40 justify-center text-left">
      <div className="flex flex-col space-y-8 text-8xl  font-bold ">
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div style={rest} onClick={reset}>
            <animated.div className="cursor-pointer leading-8" style={{}}>
              {item}
            </animated.div>
          </animated.div>
        ))}
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
