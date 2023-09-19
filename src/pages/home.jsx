import React from 'react';
// import avatar from '../img/avatarApple.jpeg';
import bgdzImg from '../img/IMG_0002.jpg'
import { useTranslation } from 'react-i18next';

import { FaGithub, FaCodepen, FaLinkedin } from 'react-icons/fa';

const Home = () => {
    const { t } = useTranslation();
    return (
        <header>
            <div className="titleWrapper">
                <div className="hello">{t('header.hello')}</div>
                <h1>{t('header.name')}</h1>
                <h2>{t('header.profession')}</h2>
                <p>{t('header.description')}</p>
                <ul>
                    <li>
                        <a href="https://github.com/begiedz">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/begiedz">
                            <FaCodepen />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dariusz-begiedza-602054272/">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            </div>
            {/* <img src={avatar} alt="avatar begiedz" /> */}
            <img src={bgdzImg} alt="bgdz img" />

        </header>
    );
};

export default Home;
