import React from 'react';

interface IProject {
  title: string;
  description: string;
  demoImage: string;
}

function Project({ title, description, demoImage }: IProject) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>{title}</div>
      <div>{description}</div>
      <div>{demoImage}</div>
    </div>
  );
}

export default Project;
