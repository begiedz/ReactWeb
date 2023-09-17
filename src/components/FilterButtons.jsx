import React from 'react';

const technologies = ['All', 'js', 'react', 'node.js', 'php'];

const FilterButtons = ({ selectedTechnology, onFilterChange }) => {
  return (
    <div className="buttonWrapper">
      {technologies.map((tech) => (
        <button
          key={tech}
          onClick={() => onFilterChange(tech)}
          className={tech === selectedTechnology ? 'active' : ''}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
