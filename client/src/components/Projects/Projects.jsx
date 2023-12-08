import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({filtered}) => {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:w-full max-w-lg:px-6 gap-3'>
        {filtered && filtered.map((project) => (
            <ProjectCard  key={project._id} project={project} />
        ))}
    </div>
  )
}

export default Projects