import React from 'react';
import bgdzImg from '../img/IMG_0002.jpg'
import { useTranslation } from 'react-i18next';

import { FaGithub, FaCodepen, FaLinkedin } from 'react-icons/fa';

const Home = () => {
    const { t } = useTranslation();
    return (
        <header>
            <div className="underlay reveal" style={{ animationDelay: 200 + 'ms' }}>
                <svg id="bgdzLogo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.82 250">
                    <path d="M172.5,162.26l-82.43,82.42c-7.13,7.13-18.71,7.09-25.8-.09l-27.26-27.64-31.7-31.7C1.91,181.85,0,177.23,0,172.42V0H.21L39.92,39.71c3.41,3.41,5.32,8.03,5.32,12.85V208.72l46.43-46.42c7.12-7.12,7.1-18.66-.04-25.76l-31.77-31.41,27.29-27.67c7.08-7.17,18.64-7.23,25.78-.12l59.54,59.18c7.13,7.1,7.14,18.63,.03,25.74Z" />
                </svg>
            </div>
            <div className="boxShadow"></div>
            <div className="titleWrapper">
                <div className="hello reveal" style={{ animationDelay: 200 + 'ms' }} >{t('header.hello')}</div>
                <h1 className='reveal' style={{ animationDelay: 400 + 'ms' }}>{t('header.name')}</h1>
                <h2 className='reveal' style={{ animationDelay: 600 + 'ms' }}>{t('header.profession')}</h2>
                <p className='reveal' style={{ animationDelay: 800 + 'ms' }}>{t('header.description')}</p>
                <ul className='reveal'>

                    <li className='reveal' style={{ animationDelay: 2000 + 'ms' }}>
                        <a href="https://github.com/begiedz">
                            <FaGithub />
                        </a>
                    </li>
                    <li className='reveal' style={{ animationDelay: 2200 + 'ms' }}>
                        <a href="https://codepen.io/begiedz">
                            <FaCodepen />
                        </a>
                    </li>
                    <li className='reveal' style={{ animationDelay: 2400 + 'ms' }}>
                        <a href="https://www.linkedin.com/in/dariusz-begiedza-602054272/">
                            <FaLinkedin />
                        </a>
                    </li>

                </ul>
            </div >
            <img src={bgdzImg} alt="Dariusz Begiedza" className='reveal' style={{ animationDelay: 1200 + 'ms' }} />

        </header>
    );
};

export default Home;
