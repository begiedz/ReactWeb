import React from 'react';
import about from '../json/aboutData.json'

const About = () => {
    return (
        <main className='about'>
            <h1>Welcome to my corner of the digital realm!</h1>
            <article>
                {about && about.map((item, index) => {
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
