import React from 'react';
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
       whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: -100 }}
       transition={{ duration: 1.5 }}
       className='my-20 text-center text-4xl'>Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -100 }}
             transition={{ duration: 1 }} className="w-full lg:w-1/4 text-center lg:text-left">
              <img 
                src={project.image} 
                width={150}
                height={150}
                alt={project.title} 
                className='mb-6 rounded mx-auto lg:mx-0'
              />
            </motion.div>
            <motion.div
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: 100 }}
             transition={{ duration: 1 }}
             className="w-full max-w-xl lg:w-3/4">
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              <div className="mb-4 flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className='mr-2 bg-neutral-900 rounded px-2 py-1 text-sm font-medium text-purple-100'>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            {/* Separate each project with a line */}
            {index !== PROJECTS.length - 1 && (
              <hr className="w-full border-t border-neutral-700 my-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
