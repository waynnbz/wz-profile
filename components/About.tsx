import React from 'react';

function About() {
  return (
    <div className="flex flex-col gap-12 lg:grid lg:grid-cols-3 -mt-64 px-24 lg:px-48 items-center text-left py-44">
      <div className="col-span-2">
        <div className="text-4xl mb-10">About me</div>
        <div className='flex flex-col gap-8 text-2xl'>
          <span>
            Two years working in Web/Mobile Development and Product Ops. I am
            comfortable with Agile/Scrum development and CI/CD workflow. While I
            come from a technical CS background, I pay close attention to
            business logic and strive to deliver real-world solutions.
          </span>
          <span>
            I am currently looking for a Singapore-based developer role. Hire me?
          </span>
        </div>
      </div>
      <div className="text-center">Photo</div>
    </div>
  );
}

export default About;
