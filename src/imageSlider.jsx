import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ImageSlider = ({imageSlides}) => {
    const indicators = (index) => (
        <div className="indicator">{index +1}</div>
    
    );
    const buttonStyle = {
        width: "30px",
        background: 'white',
        width:'35px',
        padding:'13px',
        borderRadius:'50%',
        marginRight: '10px',
        marginLeft: '10px',
        border: '0px',
        color:'black'
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
        nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
    }
    
    return (
        <Slide
        transitionDuration={500}
        indicators={indicators} scale={1.4}
        {...properties}
    >
        {imageSlides.map((image, index) => (
            <div className="each-slide-effect" key={index}>
                <div style={{ 'backgroundImage': `url(${image})` }}>
                    <span>{`Slide ${index + 1}`}</span>
                </div>
            </div>
        ))}
    </Slide>
    );
};

export default ImageSlider;