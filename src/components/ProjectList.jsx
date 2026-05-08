import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects, searchQuery }) => {
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (project.category && project.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="project-list">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project, index) => (
          <div key={index} className="project-item">
            <ProjectCard key={project.id} project={project} />
          </div>
        ))
      ) : (
        <p className="no-results">No projects found matching "{searchQuery}"</p>
      )}
    </div>
  )
};

export default ProjectList;