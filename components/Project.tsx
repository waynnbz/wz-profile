import Image from 'next/image';
import { useState } from 'react';
import { IoPlayForward as PlayIcon } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useWindowSize } from 'react-use';
// import {
//   RxDoubleArrowLeft as LeftArrowIcon,
//   RxDoubleArrowRight as RightArrowIcon,
// } from 'react-icons/rx';

type Props = {
  id: number;
  title: string;
  projectType: string;
  description: string;
  imageLinks: string[];
  vertical: boolean;
  video: boolean;
  bgColors: string[];
};

function Project({
  id,
  title,
  projectType,
  description,
  imageLinks,
  vertical,
  video,
  bgColors,
}: Props) {
  const { width } = useWindowSize();
  const isMobile = width < 1200;
  // const [play, setPlay] = useState(false);

  return (
    <motion.div
      className={`flex flex-col justify-start items-center text-center gap-8
       w-full h-[540px] md:h-[780px]
      ${id % 2 != 0 && 'lg:mt-32'} group
      `}
      initial={{
        x: (id % 2 === 0 ? -100 : 100) / (isMobile ? 4 : 1),
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Image/Video */}
      <div
        className={`relative w-full h-3/4 md:h-5/6 bg rounded-[28px]
        flex justify-center items-center p-8  ${
          vertical ? 'flex-row-reverse' : 'flex-col'
        } bg-gradient-to-bl ${bgColors[0]} ${bgColors[1]}
        shadow-md shadow-gray-300 dark:shadow-gray-600
        overflow-hidden 
        group-hover:ring-2 dark:group-hover:ring-brand-blue/50 group-hover:ring-brand-yellow/50
      `}
      >
        {video ? (
          vertical ? (
            <video
              loop
              muted
              playsInline
              autoPlay
              // preload="none"
              // onMouseEnter={event => event.currentTarget.play()}
              // onMouseLeave={event => event.currentTarget.pause()}
              // onClick={event => {
              //   !play ? event.currentTarget.play() : event.currentTarget.pause();
              //   setPlay(!play);
              // }}
              className={`w-fit h-5/6 z-20 hover:scale-110 rounded-2xl transition-transformation duration-500`}
            >
              <source
                src="/Projects/FoodDemo/FoodAnimation.mp4"
                type="video/mp4"
              />
            </video>
          ) : (
            <video
              loop
              muted
              playsInline
              autoPlay
              // preload="none"
              // onMouseEnter={event => event.currentTarget.play()}
              // onMouseLeave={event => event.currentTarget.pause()}
              // onClick={event => {
              //   !play ? event.currentTarget.play() : event.currentTarget.pause();
              //   setPlay(!play);
              // }}
              className={`w-fit h-5/6 hover:scale-110 rounded-2xl transition-transformation duration-500`}
            >
              <source
                src="/Projects/IceManDemo/IceManAnimation.mp4"
                type="video/mp4"
              />
            </video>
          )
        ) : (
          imageLinks.map((image, index) => (
            <motion.div
              key={index}
              className={`relative  ${
                vertical ? 'w-[200px] h-[321px] ' : 'w-3/5 h-2/5 '
              }
              `}
              whileInView={{
                zIndex: index === 1 ? 20 : 10,
                scale: index === 1 ? 1.4 : 1,
              }}
              // viewport={{ once: true }}
              whileHover={
                isMobile
                  ? {}
                  : {
                      scale: 1.7,
                      y: !vertical && index != 1 ? (index === 0 ? 45 : -45) : 0,
                      x: vertical && index != 1 ? (index === 0 ? -45 : 45) : 0,
                      zIndex: 30,
                    }
              }
              whileTap={
                isMobile
                  ? {
                      scale: 1.7,
                      y: !vertical && index != 1 ? (index === 0 ? 45 : -45) : 0,
                      x: vertical && index != 1 ? (index === 0 ? -45 : 45) : 0,
                      zIndex: 30,
                    }
                  : {}
              }
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            >
              <Image
                src={image}
                alt="image 1"
                fill
                className={`object-contain object-center rounded-md 
                
            `}
              />
            </motion.div>
          ))
        )}
        {/* {video ? (
          <div className="absolute top-2/5 z-10">
            <PlayIcon className="text-5xl text-brand-yellow/80 dark:text-brand-blue/80" />
          </div>
        ) : (
          <></>
        )} */}
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-2 px-4 md:px-8">
        <h1 className="text-2xl md:text-4xl font-medium group-hover:border-b-2 w-fit dark:border-brand-blue/50 border-brand-yellow/50">
          {title}
        </h1>
        <span className="text-[#A6A6A6] dark:text-gray-400 text-[20px] md:text-[24px] font-medium">
          {projectType}
        </span>
        <p className="text-[20px] md:text-[24px]  font-LeagueSpartan ">
          {description}
        </p>
      </div>
    </motion.div>
    // <div className="flex flex-row relative justify-center items-center">
    //   {/* <div
    //     className={`text-8xl absolute top-[40%] left-[15%] text-[#F7AB0A]/30 dark:text-[#3b82f680] hover:scale-110 hover:text-[#F7AB0A]/70 dark:hover:text-[#3b82f680]/70 hover:cursor-pointer animate-pulse duration-100
    //     ${id <= 0 && 'hidden'}
    //   `}
    //   >
    //     <LeftArrowIcon />
    //   </div> */}
    //   <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
    //     <Image src={imageLinks[0]} alt="imageLinks" width="600" height="400" />
    //     <div className="space-y-10 px-0 md:px-10 max-w-6xl">
    //       <h4 className="text-xl font-semibold text-center">{title}</h4>
    //       <p className="text-lg text-center md:text-left">{description}</p>
    //       {/* <p className='text-md text-center md:text-left'>{description}</p> */}
    //     </div>
    //   </div>
    //   {/* <div
    //     className={`text-8xl absolute top-[40%] right-[15%] text-[#F7AB0A]/30 dark:text-[#3b82f680] hover:scale-110 hover:text-[#F7AB0A]/70 dark:hover:text-[#3b82f680]/70 hover:cursor-pointer animate-pulse duration-100
    //     ${id >= 3 && 'hidden'}
    //     `}
    //   >
    //     <RightArrowIcon />
    //   </div> */}
    // </div>
  );
}

export default Project;
