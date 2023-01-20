import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <div
      className="flex flex-col relative h-screen gap-12 items-center justify-center text-left py-44
    lg:grid lg:grid-cols-5 px-80 lg:px-48 "
    >
      <div className="col-span-3">
        <div className="text-6xl mb-10">About me</div>
        <div className="flex flex-col gap-8 text-2xl">
          <span>
            Two years working in Web/Mobile Development and Product Ops. I am
            comfortable with Agile/Scrum development and CI/CD workflow. While I
            come from a technical CS background, I pay close attention to
            business logic and strive to deliver real-world solutions.
          </span>
          <span>
            I am currently looking for a Singapore-based developer role.{' '}
            <span className="decoration-[#F7AB0A]/50 underline font-bold">Hire me?</span>
          </span>
        </div>
      </div>
      <div className="flex relative justify-center text-center w-[500px] h-[500px]">
        <Image src="/about.png" alt="about me pic" fill />
      </div>
    </div>
  );
}

export default About;
