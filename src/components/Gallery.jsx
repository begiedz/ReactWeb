import React from 'react';

const Gallery = () => {
    return (
        <div className="gallery">
            <h2> My work</h2>
            <div className="buttonWrapper">
                <button>All</button>
                <button>JS</button>
                <button>PHP</button>
                <button>React</button>
                <button>React Native</button>
            </div>
            <div className="output">
                <div className="item">item</div>
                <div className="item">item</div>
                <div className="item">item</div>
                <div className="item">item</div>
                <div className="item">item</div>
                <div className="item">item</div>
            </div>
        </div>
    );
};

export default Gallery;
