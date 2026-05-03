import React, { useState } from 'react';

const ProjectForm = ({ onAddProject }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return alert("Please fill in all fields");

    onAddProject({ title, description: desc, link: "#" });
    
    // Reset form
    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <input 
        placeholder="Project Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Description" 
        value={desc} 
        onChange={(e) => setDesc(e.target.value)} 
      />
      <button type="submit">Add to Showcase</button>
    </form>
  );
};

export default ProjectForm;