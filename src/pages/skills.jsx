import React from 'react';
import { BiLogoMongodb, BiLogoDocker, BiLogoVisualStudio, BiLogoGit, BiLogoNodejs, BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoPhp } from 'react-icons/bi'
import { DiLinux, DiMysql } from 'react-icons/di'
const Skills = () => {

    // const skillsList = [
    //     { title: 'HTML', description: 'The basics of HTML I have learned at 1 year course' },
    //     { title: 'CSS', description: 'lorem ipsum 2' },
    //     { title: 'JavaScript', description: 'lorem ipsum 3' },
    //     { title: 'React', description: 'lorem ipsum 4' },
    // ];


    // return (
    //     <div className='skills'>
    //         <h2>Skills</h2>
    //         <ul>
    //             {skillsList.map(skill => {
    //                 return (
    //                     <li>
    //                         <h3>{skill.title}</h3>
    //                         <p>{skill.description}</p>
    //                     </li>
    //                 )
    //             })}
    //         </ul>
    //     </div>
    // );
    return (
        <div className="skills">
            <h1>My Skills</h1>

            <h2><BiLogoHtml5 />HTML <span className='light-font'>(Hypertext Markup Language)</span></h2>
            <ul className='list-group'>
                <li className='list-group-item'>Creating semantically correct web pages.</li>
                <li>Handling various types of elements such as headers, lists, forms, and multimedia.</li>
                <li>Understanding the significance of attributes and their impact on page structure.</li>
                <li>Applying modern HTML5 standards, including canvas and video elements.</li>
            </ul>

            <h2><BiLogoCss3 />CSS  <span className='light-font'>(Cascading Style Sheets)</span></h2>
            <ul>
                <li>Designing attractive and responsive user interfaces.</li>
                <li>Creating animation effects and transitions using CSS3.</li>
                <li>Using CSS preprocessors such as SASS or LESS for increased efficiency.</li>
                <li>Understanding selector specificity and the cascading nature of CSS styles.</li>
            </ul>

            <h2><BiLogoJavascript /> JavaScript</h2>
            <ul>
                <li>Programming interactive web applications.</li>
                <li>Utilizing libraries and frameworks like jQuery or Vue.js.</li>
                <li>Asynchronous programming using Promises and async/await.</li>
                <li>Working with ES6 modules and managing dependencies.</li>
            </ul>

            <h2><BiLogoPhp /> PHP  <span className='light-font'>(Hypertext Preprocessor)</span></h2>
            <ul>
                <li>Building dynamic web pages and web applications.</li>
                <li>Working with databases, including MySQL and PostgreSQL.</li>
                <li>Developing backends for e-commerce, content management, and other applications.</li>
                <li>Securing applications against attacks such as SQL Injection and XSS.</li>
            </ul>

            <h2><BiLogoReact /> React</h2>
            <ul>
                <li>Building modern user interfaces using the React library.</li>
                <li>Managing state using React Hooks and Redux.</li>
                <li>Routing with React Router.</li>
                <li>Integrating with external APIs and server communication.</li>
            </ul>

            <h2><BiLogoNodejs /> Node.js</h2>
            <ul>
                <li>Creating servers and backend applications in the Node.js environment.</li>
                <li>Using Express.js to build RESTful APIs.</li>
                <li>Working with WebSockets and real-time communication.</li>
                <li>Efficiently managing resources using npm or yarn.</li>
            </ul>

            <h2><BiLogoGit /> Git and GitHub</h2>
            <ul>
                <li>Version control of source code using Git.</li>
                <li>Branching and merging code.</li>
                <li>Resolving conflicts and applying best practices in collaborative work.</li>
                <li>Creating and managing repositories on the GitHub platform.</li>
            </ul>

            <h2><BiLogoVisualStudio /> Visual Studio Code</h2>
            <ul>
                <li>Daily work with the efficient code editor Visual Studio Code.</li>
                <li>Configuring the work environment, including extensions and themes.</li>
                <li>Utilizing developer tools and the debugger.</li>
                <li>Integrating with version control systems like Git.</li>
            </ul>
            {/* <h2><BiLogoDocker /> Docker</h2>
            <ul>
                <li>Creating and managing containers using Docker.</li>
                <li>Building containerized applications for easy deployment.</li>
                <li>Orchestrating containers with tools like Docker Compose and Kubernetes.</li>
                <li>Understanding containerization concepts and best practices.</li>
            </ul>

            <h2><DiLinux /> Linux</h2>
            <ul>
                <li>Proficient in Linux operating systems, including Ubuntu, CentOS, and Debian.</li>
                <li>Working with the command line for system administration and development tasks.</li>
                <li>Configuring and securing Linux servers for web hosting and application deployment.</li>
                <li>Scripting and automation using Bash and Shell.</li>
            </ul>

            <h2><BiLogoMongodb /> MongoDB</h2>
            <ul>
                <li>Working with NoSQL databases like MongoDB for scalable and flexible data storage.</li>
                <li>Creating and querying MongoDB databases and collections.</li>
                <li>Using Mongoose ODM for Node.js to interact with MongoDB.</li>
                <li>Designing schema-less data structures for various applications.</li>
            </ul>

            <h2><DiMysql /> MySQL</h2>
            <ul>
                <li>Managing relational databases using MySQL.</li>
                <li>Creating and optimizing database schemas and queries.</li>
                <li>Integrating MySQL with backend applications for data storage and retrieval.</li>
                <li>Implementing database security and performance tuning.</li>
            </ul> */}
        </div>
    )
};

export default Skills;
