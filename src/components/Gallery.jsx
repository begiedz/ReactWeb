import React from 'react';
import projectsData from '../data/projects.json';
import { useTranslation } from 'react-i18next';

const Gallery = ({ selectedTechnology, searchText }) => {

  const filteredProjects = projectsData.filter((project) => {
    if (selectedTechnology !== 'All' && !project.technologies.includes(selectedTechnology)) {
      return false;
    }
    if (searchText && !project.appName.toLowerCase().includes(searchText.toLowerCase())) {
      return false;
    }
    return true;
  });

  const { t } = useTranslation();

  return (
    <div className="gallery">
      {filteredProjects.map((project, index) => (
        <a href={project.githubURL} key={index}>
          <div className='card'>
            <img src={project.imgPath} alt={project.appName} />
            <h3>{project.appName}</h3>
            <p>{t(`projects.${project.appName}`)}</p>
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
