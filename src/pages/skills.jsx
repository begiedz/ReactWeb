import React from 'react';

const Skills = () => {

    const skillsList = [
        { title: 'HTML', description: 'The basics of HTML I have learned at 1 year course' },
        { title: 'CSS', description: 'lorem ipsum 2' },
        { title: 'JavaScript', description: 'lorem ipsum 3' },
        { title: 'React', description: 'lorem ipsum 4' },
    ];


    return (
        <div className='skills'>
            <h2>Skills</h2>
            <ul>
                {skillsList.map(skill => {
                    return (
                        <li>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Skills;
