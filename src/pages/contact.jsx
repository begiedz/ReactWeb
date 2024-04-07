import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import Notification from '../components/Notification';

import { MdDone } from "react-icons/md";
// import { RiProhibitedLine } from "react-icons/ri";

const Contact = () => {
    const [showNotification, setShowNotification] = useState(false)
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (userName.length === 0 || userName === '') {
            setErrorMessage('Name should not be empty.')
            return;
        }
        if (userEmail.length === 0 || userEmail === '') {
            setErrorMessage('Email should not be empty.')
            return;
        }
        if (message.length < 5 || message === '') {
            setErrorMessage('Message should have at least 5 characters.')
            return;
        }

        emailjs.sendForm(
            process.env.REACT_APP_YOUR_SERVICE_ID,
            process.env.REACT_APP_YOUR_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_YOUR_PUBLIC_KEY)

            .then((/* result */) => {
                // console.log(result.text);

                setShowNotification(true)
                setTimeout(() => {
                    setShowNotification(false)
                }, 3000)
                e.target.reset() // Reset form after successful submission
            }, (error) => {
                console.log(error.text);
            });


    };

    const { t } = useTranslation()

    const formFields = [
        { type: "text", name: "user_name", placeholder: "contact.form.yourName" },
        { type: "email", name: "user_email", placeholder: "contact.form.yourEmail" },
        { type: "textarea", name: "message", placeholder: "contact.form.message" },
        { type: "submit", value: "contact.form.send" }
    ];

    return (
        <main className="contact">
            <h1>{t('contact.heading')}</h1>
            {showNotification &&
                <Notification
                    icon={<MdDone size='2rem' />}
                    text='Email sent.'
                />}

            <form ref={form} onSubmit={sendEmail}>
                {formFields.map((field, index) => {
                    if (field.type === 'textarea') {
                        return (
                            <textarea
                                key={index}
                                name={field.name}
                                placeholder={t(field.placeholder)}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                                className="reveal"
                                style={{ animationDelay: index * 200 + "ms" }}
                            />)

                    } else {
                        return (
                            <input
                                key={index}
                                type={field.type}
                                name={field.name && field.name}
                                placeholder={field.placeholder && t(field.placeholder)}
                                value={field.value && t(field.value)}
                                onChange={(e) => {
                                    if (field.name === "user_name") setUserName(e.target.value)
                                    else if (field.name === "user_email") setUserName(e.target.value)
                                }}
                                className="reveal"
                                style={{ animationDelay: index * 200 + "ms" }} />)
                    }
                })}
            </form>
        </main>
    );
};

export default Contact;
