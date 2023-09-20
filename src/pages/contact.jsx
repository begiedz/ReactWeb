import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import emjsData from '../data/emailJS.json'
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            emjsData[0].YOUR_SERVICE_ID,
            emjsData[0].YOUR_TEMPLATE_ID,
            form.current,
            emjsData[0].YOUR_PUBLIC_KEY)

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
