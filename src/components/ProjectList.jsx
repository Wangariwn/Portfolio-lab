import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects, searchQuery }) => {
  // Logic: Filter projects by title or description based on search
  const filtered = projects.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="project-grid">
      {filtered.length > 0 ? (
        filtered.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))
      ) : (
        <p>No projects match your search.</p>
      )}
    </div>
  );
};

export default ProjectList;