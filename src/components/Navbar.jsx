import { React, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
// import CV from '../img/DariuszBegiedzaCV.pdf';

const CustomLink = ({ to, children, ...props }) => {
    // const path = window.location.pathname;
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
    return (
        <nav>
            <div className="logoWrapper">
                <svg
                    id="bgdzLogo"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 174.56 250"
                >
                    <path
                        className="b"
                        d="M123.38,88.14l-45.77,19.52c-2.15,.92-2.69,3.71-1.04,5.36l9.22,9.22c1.29,1.29,1.29,3.38,0,4.66l-27.4,27.4c-2.08,2.08-5.63,.61-5.63-2.33V3.3c0-2.39-2.46-3.99-4.64-3.01L1.95,20.95c-1.19,.53-1.95,1.71-1.95,3.01V211.33c0,.87,.35,1.71,.97,2.33l34.01,34.01c1.29,1.29,3.38,1.29,4.66,0l120.76-120.76c1.29-1.29,1.29-3.38,0-4.66l-33.4-33.4c-.95-.95-2.39-1.23-3.63-.7Z"
                    />
                    <path
                        className="b"
                        d="M173.59,210.04l-32.64-32.64c-1.29-1.29-3.38-1.29-4.66,0l-66.97,66.97c-2.08,2.08-.61,5.63,2.33,5.63h65.29c.87,0,1.71-.35,2.33-.97l34.33-34.33c1.29-1.29,1.29-3.38,0-4.66Z"
                    />
                </svg>
                <span className="logo">begiedz</span>
            </div>

            <ul ref={navRef}>
                <CustomLink to="/" onClick={openMenu}>
                    Home
                </CustomLink>
                <CustomLink to="/about" onClick={openMenu}>
                    About
                </CustomLink>
                <CustomLink to="/skills" onClick={openMenu}>
                    Skills
                </CustomLink>
                <CustomLink to="/mywork" onClick={openMenu}>
                    My work
                </CustomLink>
                {/* <CustomLink to={CV} target="_blank">
                    Resume
                </CustomLink> */}
                <CustomLink to="/contact" onClick={openMenu}>
                    Contact
                </CustomLink>
            </ul>
            <button onClick={openMenu}>
                <FaBars />
            </button>
        </nav>
    );
};

export default Navbar;
