import { React, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

// import CV from '../img/DariuszBegiedzaCV.pdf';

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
};




const Navbar = () => {

    // If browser is Google Chrome check, transparency fix. Nested backdrop-filter does not work on Chrome.
    const detectBrowser = () => {
        return navigator.userAgent.includes('Chrome')
    }

    const navRef = useRef();
    const openMenu = () => {
        navRef.current.classList.toggle('active');
    };

    const { t, i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    };

    return (
        <nav className={detectBrowser() && 'chromeBackground'}>
            <div className="logoWrapper">
                <svg id="bgdzLogo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182.06 250">
                    <polygon points="80.24 46.83 42.52 85.07 42.52 0 0 0 0 169.23 42.52 211.75 42.52 85.1 106.06 148.22 42.52 211.75 80.25 250 182.06 148.2 80.24 46.83" />
                </svg>

                <span className="logo">begiedz<span className='lightfont'>Developer</span></span>
            </div>

            <ul ref={navRef}>
                <CustomLink to="/" onClick={openMenu}>
                    {t('navbar.home')}
                </CustomLink>
                <CustomLink to="/about" onClick={openMenu}>
                    {t('navbar.about')}
                </CustomLink>
                <CustomLink to="/skills" onClick={openMenu}>
                    {t('navbar.skills')}
                </CustomLink>
                <CustomLink to="/mywork" onClick={openMenu}>
                    {t('navbar.myWork')}
                </CustomLink>
                {/* <CustomLink to={CV} target="_blank">
                    Resume
                </CustomLink> */}
                <CustomLink to="/contact" onClick={openMenu}>
                    {t('navbar.contact')}
                </CustomLink>
                <div className='selectWrapper'>
                    <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
                        <option value="en">🇬🇧</option>
                        <option value="pl">🇵🇱</option>
                        <option value="de">🇩🇪</option>
                        <option value="nl">🇳🇱</option>
                    </select>
                </div>
            </ul>
            <button onClick={openMenu}>
                <FaBars />
            </button>
        </nav>
    );
};

export default Navbar;
