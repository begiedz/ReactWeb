import React from 'react';
import projects from '../json/projects.json'
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const MyWork = () => {
    console.log(projects);

    const handleInput = () => {

    }
    return (
        <div className="myWork">
            <h2>My work</h2>

            <div className='searchUI'>
                <input type="search" placeholder='Search...' onInput={handleInput()} />
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
                            <div className='card'>
                                <a href={project.githubURL}>
                                    <img src={project.imgPath} alt={project.appName} />
                                    <h3>{project.appName}</h3>
                                    <p>{project.description}</p>
                                    <ul>
                                        <li>
                                            {project.previewURL && <li><Link to={project.previewURL}>Preview</Link></li>}
                                        </li>
                                    </ul>
                                </a>
                            </div>
                        )
                    })

                }


            </div>
        </div>
    );
};

export default MyWork;
