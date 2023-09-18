import React from 'react';
import projects from '../data/projects.json';

const Gallery = ({ selectedTechnology, searchText }) => {
  const filteredProjects = projects.filter((project) => {

    if (selectedTechnology !== 'All' && !project.technologies.includes(selectedTechnology)) {
      return false;
    }
    if (searchText && !project.appName.toLowerCase().includes(searchText.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="gallery">
      {filteredProjects.map((project, index) => (
        <a href={project.githubURL} key={index}>
          <div className='card'>
            <img src={project.imgPath} alt={project.appName} />
            <h3>{project.appName}</h3>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Gallery;
