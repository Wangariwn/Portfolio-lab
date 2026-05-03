import React, { useState } from 'react'
import './App.css'

// Import components
import Header from './components/Header'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'

function App() {
  // 1. Logic: State for projects
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // 2. Logic: Function to add projects
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  // 3. UI: The Layout
  return (
    <div className="app-container">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="main-layout">
        <ProjectForm onAddProject={addProject} />
        <ProjectList projects={projects} searchQuery={searchQuery} />
      </div>
    </div>
  )
}

export default App