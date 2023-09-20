import React from 'react';
// import about from '../data/aboutData.json'
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    const about = t('about.article', { returnObjects: true })

    return (
        <main className='about'>
            <h1>{t('about.heading')}</h1>
            <article>
                {about.map((item, index) => {
                    if (typeof item.paragraph === 'string') {
                        return (
                            <p key={index} className='reveal' style={
                                { animationDelay: index * 200 + 'ms' }
                            } >{item.paragraph}</p>)
                    } else if (Array.isArray(item.paragraph)) {
                        return (
                            <p key={index} className='reveal' style={
                                { animationDelay: index * 200 + 'ms' }
                            }>{item.paragraph.map((paragraphItem, paragraphIndex) => {
                                if (typeof paragraphItem === 'string') {
                                    return paragraphItem
                                }
                                else {
                                    const tag = Object.keys(paragraphItem)[0];
                                    const content = paragraphItem[tag]
                                    return React.createElement(tag, { key: paragraphIndex }, content)

                                }
                            })}</p>
                        )
                    }
                })}
            </article>
        </main>
    );
};

export default About;
