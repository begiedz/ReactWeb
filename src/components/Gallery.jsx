import projectsData from '../data/projects.json';
import { useTranslation } from 'react-i18next';

const Gallery = ({ selectedTechnology, searchText }) => {

  // Filtering projects based on selected technology and search text
  const filteredProjects = projectsData.filter((project) => {

    // If a specific technology is selected and the project doesn't include it, filter it out
    if (selectedTechnology !== 'all' && !project.technologies.includes(selectedTechnology)) {
      return false;
    }

    // If there's a search text and the project name doesn't include it (case insensitive), filter it out
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
            <h2>{project.appName}</h2>
            <p>{t(`projects.${project.appName}`)}</p>
            <ul>
              {project.technologies.map((technology, index) => (
                <li key={index}>{
                  technology.includes(' ') ? technology.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') :
                    (technology.length === 2 || technology === 'php' ? technology.toUpperCase() :
                      technology[0].toUpperCase() + technology.substring(1))
                }</li>
              ))}
            </ul>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Gallery;
