import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <ProjectCard key={project.id} project={project} />
          <div className="icon-container">X</div>

          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>  


        </div>
      ))}
    </div>
  )
};

export default ProjectList;