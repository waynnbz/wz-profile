import Image from 'next/image';
import React from 'react';

type Props = {
  darker: boolean;
};

function About({ darker }: Props) {
  return (
    <div
      className={`flex flex-col-reverse relative h-fit gap-12 lg:gap-32 items-center justify-center text-left
    lg:grid lg:grid-cols-5
    
    py-24 md:py-48
    xl:px-64 md:px-32 sm:px-16 px-8 ${darker && 'darker'}
    `}
      id="about"
    >
      <div className="lg:col-span-2 flex relative justify-center text-center rounded-lg overflow-hidden">
        {/* <Image src="/about.png" alt="about me pic" fill /> */}
        <video loop autoPlay muted>
          <source src="/CompressedBurningComputer.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex flex-col lg:col-span-3">
        <div className="text-3xl md:text-4xl xl:text-6xl font-bold mb-10 font-CircularStd">
          About me
        </div>
        <div className="flex flex-col gap-8 text-xl md:text-2xl xl:text-3xl font-LeagueSpartan">
          <span>
            Two years working in Web/Mobile Development and Product Ops. I am
            comfortable with Agile/Scrum development and CI/CD workflow. While I
            came from a technical CS background, I pay close attention to
            business logic and strive to deliver real-world solutions.
          </span>
          <span>
            I am currently looking for a Singapore-based developer role.{' '}
            <span className="decoration-[#F7AB0A]/50 dark:decoration-[#3b82f680] underline font-bold">
              Hire me?
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
