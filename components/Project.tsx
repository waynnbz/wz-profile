import Image from 'next/image';
import {
  RxDoubleArrowLeft as LeftArrowIcon,
  RxDoubleArrowRight as RightArrowIcon,
} from 'react-icons/rx';

type Props = {
  id: number;
  title: string;
  description: string;
  imageLink: string;
};

function Project({ id, title, description, imageLink }: Props) {
  return (
    <div className="flex flex-row relative justify-center items-center">
      <div
        className={`text-8xl absolute top-[40%] left-[15%] text-[#F7AB0A]/30 hover:scale-110 hover:text-[#F7AB0A]/70 hover:cursor-pointer animate-pulse duration-100
        ${id <= 0 && 'hidden'}
      `}
      >
        <LeftArrowIcon />
      </div>
      <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        <Image src={imageLink} alt="imageLink" width="600" height="400" />
        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
          <h4 className="text-xl font-semibold text-center">{title}</h4>
          <p className="text-lg text-center md:text-left">{description}</p>
          {/* <p className='text-md text-center md:text-left'>{description}</p> */}
        </div>
      </div>
      <div
        className={`text-8xl absolute top-[40%] right-[15%] text-[#F7AB0A]/30 hover:scale-110 hover:text-[#F7AB0A]/70 hover:cursor-pointer animate-pulse duration-100
        ${id >= 3 && 'hidden'}
        `}
      >
        {' '}
        <RightArrowIcon />
      </div>
    </div>
  );
}

export default Project;
