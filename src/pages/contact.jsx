import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import emjsData from '../json/emailjs.json'

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
    return (
        <div className="contact">
            <h1>Contact</h1>

            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder='Your name' />
                <input type="email" name="user_email" placeholder='Your email' />
                <textarea name="message" placeholder='Message' />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;
