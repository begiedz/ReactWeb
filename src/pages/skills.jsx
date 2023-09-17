import React from 'react';
import { BiLogoTypescript, BiLogoMongodb, BiLogoDocker, BiLogoVisualStudio, BiLogoGit, BiLogoNodejs, BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoPhp, BiLogoSass } from 'react-icons/bi'
import { DiLinux, DiMysql } from 'react-icons/di'

import skillsData from '../json/skillsData.json'

const SkillIcon = ({ category }) => {
    switch (category) {
        case 'HTML':
            return <BiLogoHtml5 />
        case 'CSS':
            return <BiLogoCss3 />
        case "SCSS":
            return <BiLogoSass />
        case 'JavaScript':
            return <BiLogoJavascript />
        case 'TypeScript':
            return <BiLogoTypescript />;
        case "PHP":
            return <BiLogoPhp />
        case 'React':
            return <BiLogoReact />
        case 'Node.js':
            return <BiLogoNodejs />;
        case 'Git and GitHub':
            return <BiLogoGit />;
        case 'Docker':
            return <BiLogoDocker />;
        case 'Linux':
            return <DiLinux />;
        case 'MongoDB':
            return <BiLogoMongodb />;
        case 'MySQL':
            return <DiMysql />;
        case 'React Native':
            return <BiLogoReact />;
        case 'Visual Studio Code':
            return <BiLogoVisualStudio />
        default:
            return null;
    }
}

const Skills = () => {
    return (
        <main className="skills">
            <h1>My skills</h1>
            <section>
                {skillsData && skillsData.map((skill, index) => {
                    return (
                        <div
                            key={skill.category}
                            className='reveal'
                            style={{ animationDelay: index * 200 + 'ms' }}
                        >
                            <h2>
                                <SkillIcon category={skill.category} />
                                <span>
                                    {skill.category}
                                    {skill.sub &&
                                        <span className='light-font'>
                                            {skill.sub}
                                        </span>}
                                </span>
                            </h2>

                            <ul>
                                {skill.list.map(list => {
                                    return <li>{list}</li>
                                })}
                            </ul>
                        </div>)
                })}
            </section>
        </main>
    )
};

export default Skills;
