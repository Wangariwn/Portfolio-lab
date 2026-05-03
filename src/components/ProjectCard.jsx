import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <a href={project.link}>View Project</a>
    </div>
  );
};

export default ProjectCard;