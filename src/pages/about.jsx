import React from 'react';
import about from '../json/aboutData.json'

// const RenderJSON = (json) => {



// if (Array.isArray(json)) {
//     return json.map((item, index) => {
//         <div key={index}>{RenderJSON(item)}</div>
//     })

// } else if (typeof json === 'object') {
//     return Object.entries(json).map(([key, value], index) => {
//         <div key={index}>
//             <strong>{key}:</strong> {RenderJSON(value)}
//         </div>
//     })

// } else {
//         return json
//     }
// }

const About = () => {
    return (
        <main className='about'>
            <h1>Welcome to my corner of the digital realm!</h1>
            <article>
                {about && about.map((item, index) => {
                    if (typeof item.paragraph === 'string') {
                        return (
                            <p key={index}>{item.paragraph}</p>)
                    } else if (Array.isArray(item.paragraph)) {
                        return (
                            <p key={index}>{item.paragraph.map((paragraphItem, paragraphIndex) => {
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
                {/* <div className="paragraphWrapper">
                    <p>
                        Allow me to introduce myself — a budding web developer fueled by a <b>relentless passion</b> for creating captivating online experiences.
                        While my journey may not follow a straight path, it has been an
                        adventure filled with twists and turns, ultimately leading me to the
                        fascinating world of web development.
                    </p>

                    <p>
                        In the early days, I immersed myself in the <b>art of graphic design</b>
                        , attending a high school focused on this creative discipline. The
                        allure of visual storytelling captivated me, inspiring dreams of
                        crafting stunning visuals that would captivate audiences. Eager to
                        explore my artistic inclinations further, I pursued studies in sculpture
                        and computer graphics during my college years. However, as fate would
                        have it, I realized that these paths weren't my true calling.
                    </p>
                </div>

                <div className="paragraphWrapper">
                    <p>
                        It was during this introspective period that I stumbled upon <b>web development</b>—an enchanting fusion of artistry and technical wizardry. Intrigued by the power to shape the digital landscape, I decided
                        to redirect my efforts and delve into the realm of web development.
                    </p>

                    <p>
                        With fervor and determination, I embarked on a series of immersive courses
                        and online tutorials. Through these learning experiences, I honed my skills
                        in <b>HTML</b> and <b>CSS</b>, embracing the foundational elements of web
                        design. But my hunger for knowledge didn't stop there. I eagerly delved into
                        the world of <b>JavaScript</b>, captivated by its versatility and the
                        endless possibilities it offered.
                    </p>
                </div>

                <div className="paragraphWrapper">
                    <p>
                        Driven by a desire to create seamless and engaging user experiences, I
                        ventured into the realm of <b>React</b> and <b>React Native</b>. These
                        powerful frameworks became my allies, enabling me to breathe life into my
                        visions and bring them to fruition on both web and mobile platforms.
                    </p>

                    <p>
                        As a web developer, my passion lies in crafting{' '}
                        <b>functional and visually appealing interfaces</b> that leave a lasting
                        impact on users. The fusion of my background in graphic design and newfound
                        technical prowess allows me to create harmonious digital spaces that blend{' '}
                        <b>aesthetics with usability</b>.
                    </p>
                </div>

                <div className="paragraphWrapper">
                    <p>
                        So, if you're seeking a <b>determined and adaptable</b> web developer to
                        join your team, I would be thrilled to collaborate. Together, we can embark
                        on a transformative journey, creating extraordinary digital experiences that
                        leave a mark on the virtual landscape.
                    </p>

                    <p>Let's bring our digital dreams to life!</p>
                </div> */}
            </article>
        </main>
    );
};

export default About;
