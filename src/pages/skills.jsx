import React from 'react';
import { BiLogoTypescript, BiLogoMongodb, BiLogoVisualStudio, BiLogoGit, BiLogoNodejs, BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoPhp, BiLogoSass } from 'react-icons/bi'
import { DiMysql } from 'react-icons/di'

// import skillsData from '../data/skillsData.json'

import { useTranslation } from 'react-i18next';

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
        case 'Git, GitHub':
            return <BiLogoGit />;
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
    const { t } = useTranslation()
    const skills = t('skills.technologies', { returnObjects: true });

    return (
        <main className="skills">
            <h1>{t('skills.heading')}</h1>
            <section>
                {skills && skills.map((skill, index) => {
                    return (
                        <div
                            key={skill.category}
                            className='card reveal'
                            style={{ animationDelay: index * 200 + 'ms' }}
                        >
                            <div className="underlay"><SkillIcon category={skill.category} /></div>
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
                                {skill.list.map((list, listIndex) => {
                                    return <li key={listIndex}>{list}</li>
                                })}
                            </ul>
                        </div>)
                })}
            </section>
        </main>
    )
};

export default Skills;
