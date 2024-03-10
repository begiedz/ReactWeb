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
            <Link className='logoWrapper' to='/'>
                <svg id="bgdzLogo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.82 250">
                    <path d="M172.5,162.26l-82.43,82.42c-7.13,7.13-18.71,7.09-25.8-.09l-27.26-27.64-31.7-31.7C1.91,181.85,0,177.23,0,172.42V0H.21L39.92,39.71c3.41,3.41,5.32,8.03,5.32,12.85V208.72l46.43-46.42c7.12-7.12,7.1-18.66-.04-25.76l-31.77-31.41,27.29-27.67c7.08-7.17,18.64-7.23,25.78-.12l59.54,59.18c7.13,7.1,7.14,18.63,.03,25.74Z" />
                </svg>

                <span className="logo">begiedz<span className='lightfont'>Developer</span></span>
            </Link>


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
