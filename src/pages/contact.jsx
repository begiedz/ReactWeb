import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <form action="">
                {/* <div className="inputWrapper">
                    <label htmlFor="nameInput">Name:</label>
                    <input type="text" id="nameInput" />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="emailInput">Email:</label>
                    <input type="email" id="emailInput" />
                </div>

                <div className="inputWrapper">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" />
                </div> */}


                <input type="text" id="nameInput" placeholder='Your name' />
                <input type="email" id="emailInput" placeholder='Your email' />
                <input type="text" id="title" placeholder='Message Title' />
                <textarea id="textarea" placeholder='Message' />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Contact;
