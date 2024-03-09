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
                    <path d="M87.15,77.45l-27.29,27.67,31.77,31.41c7.14,7.09,7.16,18.64,.04,25.75l-54.66,54.65,27.26,27.64c7.09,7.18,18.67,7.22,25.8,.09l82.42-82.42c7.11-7.11,7.1-18.65-.03-25.74l-59.54-59.18c-7.14-7.11-18.7-7.06-25.77,.12Z" />
                    <path d="M45.24,52.56V225.17L5.31,185.25c-3.4-3.4-5.31-8.02-5.31-12.83V0H.21L39.92,39.7c3.41,3.41,5.33,8.03,5.33,12.86Z" />
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
            <img src={bgdzImg} alt="begiedz image" className='reveal' style={{ animationDelay: 1200 + 'ms' }} />

        </header>
    );
};

export default Home;
