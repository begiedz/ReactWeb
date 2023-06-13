import React from 'react';
import movieClip from '../img/bgdz-synapse-mpeg4.gif';

const Greeting = () => {
    return (
        //rafce
        <header>
            {/* <div className="gifWrapper">
                <img src={movieClip} alt="" />
                <div className="gifFilter"></div>
            </div> */}

            <h1>
                <span className="hello">hello,</span>
                I'm Dariusz
            </h1>
            <h3>Beginner Web Developer</h3>
            <span>React</span>
        </header>
    );
};

export default Greeting;
