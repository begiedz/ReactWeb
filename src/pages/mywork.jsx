import React from 'react';
import projects from '../json/projects.json'

const MyWork = () => {
    console.log(projects);

    return (
        <div className="gallery">
            <h2> My work</h2>
            <div className="buttonWrapper">
                <button>All</button>
                <button>JS</button>
                <button>PHP</button>
                <button>React</button>
                <button>Node.js</button>
            </div>
            <div className="output">
                {/* <div className="item">
                    <img src="" alt="" />
                    <p>{projects[0].}</p>
                    <a href="">github</a>
                    <a href="">project</a>
                </div>
                <div className="item">item</div>
                <div className="item">item</div>
                <div className="item">item</div>
                <div className="item">item</div>
                <div className="item">item</div> */}
                {projects.map(project => {
                    return (<div className='item'>
                        <img src={project.imgPath} alt="" />
                        <p>{project.appName}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MyWork;
