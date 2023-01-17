import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  description: string;
  imageLink: string;
};

function Project({ title, description, imageLink }: Props) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <Image src={imageLink} alt="imageLink" width="600" height="400" />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-xl font-semibold text-center">{title}</h4>
        <p className='text-lg text-center md:text-left'>{description}</p>
        {/* <p className='text-md text-center md:text-left'>{description}</p> */}
      </div>
    </div>
  );
}

export default Project;
