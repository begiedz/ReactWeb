import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_YOUR_SERVICE_ID,
            process.env.REACT_APP_YOUR_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_YOUR_PUBLIC_KEY)

            .then((result) => {
                console.log(result.text);
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });

    };
    const { t } = useTranslation()
    return (
        <main className="contact">
            <h1>{t('contact.heading')}</h1>

            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder={t('contact.form.yourName')} />
                <input type="email" name="user_email" placeholder={t('contact.form.yourEmail')} />
                <textarea name="message" placeholder={t('contact.form.message')} />
                <input type="submit" value="Send" />
            </form>
        </main>
    );
};

export default Contact;
