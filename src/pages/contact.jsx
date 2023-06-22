import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            Contact
            <form action="">
                <label htmlFor="nameInput">Name</label>
                <input type="text" id="nameInput" />
                <label htmlFor="emailInput">Email</label>
                <input type="email" id="emailInput" />
                <label htmlFor="title">Title</label>
                <input type="text" id="title" />
                <label htmlFor="textarea">Message</label>
                <textarea id="textarea" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Contact;
