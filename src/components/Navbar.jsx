import { useRef } from 'react';
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

    const navRef = useRef();
    const openMenu = () => {
        navRef.current.classList.toggle('active');
    };

    const { t, i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    };

    return (
        <nav>
            <div className="logoWrapper">
                <svg id="bgdzLogo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.82 250">
                    <path d="M87.15,77.45l-27.29,27.67,31.77,31.41c7.14,7.09,7.16,18.64,.04,25.75l-54.66,54.65,27.26,27.64c7.09,7.18,18.67,7.22,25.8,.09l82.42-82.42c7.11-7.11,7.1-18.65-.03-25.74l-59.54-59.18c-7.14-7.11-18.7-7.06-25.77,.12Z" />
                    <path d="M45.24,52.56V225.17L5.31,185.25c-3.4-3.4-5.31-8.02-5.31-12.83V0H.21L39.92,39.7c3.41,3.41,5.33,8.03,5.33,12.86Z" />
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
