import Image from 'next/image';
import { useState } from 'react';
import { IoPlayForward as PlayIcon } from 'react-icons/io5';
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
  bgColor: string;
};

function Project({
  id,
  title,
  projectType,
  description,
  imageLinks,
  vertical,
  video,
  bgColor,
}: Props) {
  const [play, setPlay] = useState(true);

  return (
    <div
      className={`flex flex-col justify-start items-center text-center gap-8
       w-full h-[780px]
      ${id % 2 != 0 && 'lg:mt-32'}
      `}
    >
      {/* Image/Video */}
      <div
        className={`relative w-full h-5/6 bg rounded-[28px]
        flex justify-center items-center p-8  ${
          vertical ? 'flex-row-reverse' : 'flex-col py-28 lg:py-8'
        }  ${bgColor} shadow-md shadow-gray-300 dark:shadow-gray-600
        overflow-hidden 
        hover:ring-2 dark:hover:ring-4 hover:dark:ring-brand-blue/50 hover:ring-brand-yellow/50
      `}
      >
        {video ? (
          // <div className=''>
          <video
            loop
            muted
            // autoPlay
            playsInline
            onMouseOver={event => event.currentTarget.play()}
            onMouseOut={event => event.currentTarget.pause()}
            className={`w-fit ${
              vertical ? 'h-5/6' : 'h-fit max-h-[420px]'
            } z-20 opacity-0 md:opacity-100 hover:opacity-100
            hover:scale-110 rounded-xl transition-transformation duration-500`}
          >
            <source src={imageLinks[0]} />
          </video>
        ) : (
          imageLinks.map((image, index) => (
            <div
              key={index}
              className={`relative  ${
                vertical ? 'w-[200px] h-[321px] ' : 'w-3/5 h-2/5 '
              }`}
            >
              <Image
                src={image}
                alt="image 1"
                fill
                className={`object-contain object-center rounded-md hover:scale-[1.7] hover:z-40 transition duration-700
              ${
                index === 0 &&
                `${
                  vertical ? 'hover:-translate-x-14' : 'hover:translate-y-14'
                }`
              }
              ${index === 1 && 'scale-[1.4] z-10'}
              ${
                index === 2 &&
                `${
                  vertical ? 'hover:translate-x-14' : 'hover:-translate-y-14'
                }`
              }
            `}
              />
            </div>
          ))
        )}
        {video ? (
          <div className="absolute top-2/5 z-10">
            <PlayIcon className="text-5xl text-brand-yellow/80 dark:text-brand-blue/80" />
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 px-4 md:px-8">
        <h1 className="text-2xl md:text-4xl font-medium">{title}</h1>
        <span className="text-[#A6A6A6] dark:text-gray-700 text-[20px] md:text-[24px] font-medium">
          {projectType}
        </span>
        <p className="text-[20px] md:text-[24px]  font-LeagueSpartan ">
          {description}
        </p>
      </div>
    </div>
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
