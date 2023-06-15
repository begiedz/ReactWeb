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
            <div className="headerBackground">
                {/* <img
                    src="https://images.unsplash.com/photo-1594190854095-4ad3052f0cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=926&q=80"
                    alt="background image"
                /> */}
                <div className="imgFilter"></div>
            </div>
            <div className="titleWrapper">
                {' '}
                <span className="hello">hey!</span>
                <h1>I'm Dariusz</h1>
                <h2>Beginner Web Developer</h2>
                {/* <span>React</span> */}
            </div>
        </header>
    );
};

export default Greeting;
