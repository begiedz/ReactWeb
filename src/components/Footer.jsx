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
                    <a href={`tel:${process.env.REACT_APP_TELEPHONE_NUMBER.split(' ').join('')}`}>{process.env.REACT_APP_TELEPHONE_NUMBER}</a>
                </li>
                <li>
                    {t('footer.contact.discord')}
                    <a href={`https://discordapp.com/users/${process.env.REACT_APP_DISCORD_LINK}`} target='_blank' rel="noreferrer">{process.env.REACT_APP_DISCORD}</a>
                </li>
                <li>
                    {t('footer.contact.email')}
                    <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>{process.env.REACT_APP_EMAIL}</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
