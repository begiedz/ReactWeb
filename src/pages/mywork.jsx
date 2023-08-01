import React from 'react';
import projects from '../json/projects.json'
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';


const MyWork = () => {
    console.log(projects);

    return (
        <div className="gallery">
            <h2> My work</h2>
            <div className='searchUI'>
                <input type="search" />
                <div className="buttonWrapper">
                    <button>All</button>
                    <button>JS</button>
                    <button>PHP</button>
                    <button>React</button>
                    <button>Node.js</button>
                </div>
            </div>
            <div className="output">
                {projects.map(project => {
                    return (<div className='item'>
                        <img src={project.imgPath} alt="" />
                        <p>{project.appName}</p>
                        <ul>
                            <li><a href={project.githubURL}><FaGithub /></a></li>
                            {project.previewURL ?
                                <li><Link to={project.previewURL}>Preview</Link></li> : null}

                        </ul>
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MyWork;
