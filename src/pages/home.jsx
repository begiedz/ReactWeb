import bgdzImg from '../img/github_avatar.jpg'
import { useTranslation } from 'react-i18next';

import { FaGithub, FaCodepen, FaLinkedin } from 'react-icons/fa';

const Home = () => {
    const { t } = useTranslation();
    return (
        <header>
            <div className="underlay reveal" style={{ animationDelay: 200 + 'ms' }}>
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
