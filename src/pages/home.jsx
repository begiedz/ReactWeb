import React from 'react';
import bgdzImg from '../img/IMG_0002.jpg'
import { useTranslation } from 'react-i18next';

import { FaGithub, FaCodepen, FaLinkedin } from 'react-icons/fa';

const Home = () => {
    const { t } = useTranslation();
    return (
        <header>
            <div className="underlay reveal" style={{ animationDelay: 200 + 'ms' }}>
                <svg id="bgdzLogo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182.06 250">
                    <polygon points="80.24 46.83 42.52 85.07 42.52 0 0 0 0 169.23 42.52 211.75 42.52 85.1 106.06 148.22 42.52 211.75 80.25 250 182.06 148.2 80.24 46.83" />
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
