import React from 'react';
import projects from '../json/projects.json'
// import { Link } from 'react-router-dom';
// import { FaGithub } from 'react-icons/fa';

const MyWork = () => {
    console.log(projects);

    const handleInput = () => {

    }
    return (
        <main className="my_work">
            <h1>My work</h1>

            <div className='searchUI'>
                <input type="search" placeholder='Search for project...' onInput={handleInput()} />
                <div className="buttonWrapper">
                    <button>All</button>
                    <button>JS</button>
                    <button>PHP</button>
                    <button>React</button>
                    <button>Node.js</button>
                </div>
            </div>
            <div className="gallery">
                {
                    projects &&
                    projects.map(project => {
                        return (
                            <a href={project.githubURL}>
                                <div className='card'>
                                    <img src={project.imgPath} alt={project.appName} />
                                    <h3>{project.appName}</h3>
                                    <p>{project.description}</p>
                                    <ul>
                                        {project.language && project.language.map(language => {
                                            return (
                                                <li>{language}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </a>
                        )
                    })
                }


            </div>
        </main>
    );
};

export default MyWork;
