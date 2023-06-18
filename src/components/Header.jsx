import React from 'react';
import avatar from '../img/avatarApple.jpeg';

const Greeting = () => {
    return (
        //rafce
        <header>
            <div className="headerBackground"></div>
            <div className="titleWrapper">
                <div className="hello">hello,</div>
                <h1>I'm Dariusz</h1>
                <h2>Beginner Web Developer</h2>
                <p>
                    Welcome to my corner of the digital world! I'm a budding web developer fueled by
                    a passion for creating captivating online experiences. With a background in
                    graphic design and a newfound love for coding, I strive to craft visually
                    appealing and functional interfaces that leave a lasting impression. I'm eager
                    to collaborate and embark on transformative journeys, bringing digital dreams to
                    life. Let's create wonders together!
                </p>
            </div>
            <img src={avatar} alt="avatar begiedz" />
        </header>
    );
};

export default Greeting;
