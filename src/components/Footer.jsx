import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <ul className="footerWrapper">
                <li>{t('footer.trademark')}</li>
                <li>{t('footer.react')}</li>
                <li>{t('footer.i18next')}</li>
            </ul>

            <ul>
                {t('footer.contact.heading')}
                <li>
                    {t('footer.contact.phone')}
                    <a href="tel:+48782041173">+48 782 041 173</a>
                </li>
                <li>
                    {t('footer.contact.discord')}
                    <a href="https://discordapp.com/users/689833947995046039">begiedz#5194</a>
                </li>
                <li>
                    {t('footer.contact.email')}
                    <a href="mailto:begiedz.developer@gmail.com">begiedz.developer@gmail.com</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
