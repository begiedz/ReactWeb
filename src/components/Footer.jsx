import React from 'react';

const Footer = () => {
    return (
        <footer>
            <ul className="footerWrapper">
                <li>© 2023 Dariusz Begiedza. All rights reserved.</li>
                <li>Made with React. The library for web and native user interfaces.</li>
                <li>Used i18next. An internationalization-framework written in and for JavaScript.</li>
            </ul>

            <ul>
                Contact
                <li>
                    Phone:{' '}<a href="tel:+48782041173">+48 782 041 173</a>
                </li>
                <li>
                    Discord:{' '}
                    <a href="https://discordapp.com/users/689833947995046039">begiedz#5194</a>
                </li>
                <li>
                    e-mail:{' '}
                    <a href="mailto:begiedz.developer@gmail.com">begiedz.developer@gmail.com</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
