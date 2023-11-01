import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ImageSlider = ({imageSlides}) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const indicators = (index) => {
        setCurrentSlide(index);
        return <div className="indicator">{index + 1}/{imageSlides.length}</div>;
    };
    return (
        <Slide
        transitionDuration={500}
        indicators={indicators} scale={1.4}
       
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