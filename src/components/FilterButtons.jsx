import React from 'react';
import { useTranslation } from 'react-i18next';

// List of available filter button technologies
const technologies = ['all', 'js', 'ts', 'react', 'react native', 'node.js', 'php'];

const FilterButtons = ({ selectedTechnology, onFilterChange }) => {
  const { t } = useTranslation();
  return (
    <div className="buttonWrapper">
      {technologies.map((tech) => (
        <button
          key={tech}
          onClick={() => onFilterChange(tech)}
          className={tech === selectedTechnology ? 'active' : ''}
        >
          {tech === 'all' ? t('projects.all') :
            tech.includes(' ') ? tech.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') :
              (tech.length === 2 || tech === 'php' ? tech.toUpperCase() :
                tech[0].toUpperCase() + tech.substring(1))
          }
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
