import React from 'react';

import { Slide } from 'react-slideshow-image';
import img0 from '../../assets/_MG_4330.jpg'
import img1 from '../../assets/_MG_4397.jpg'
import img2 from '../../assets/_MG_4409.jpg'


const slideImages = [img0, img1, img2];

const properties = {
    duration: 10000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
};

export default class SlideShow extends React.Component {
    render() {
        return(
            <div className="home-slide-show-container" id="slide-show">
                <div className="slide-container">
                    <Slide {...properties}>
                        {
                            slideImages.map((img,index) =>
                                <div className='each-slide' key={index}>
                                    <div style={{'backgroundImage': `url(${img})`}}></div>
                                </div>
                            )
                        }
                    </Slide>
                </div>
            </div>
        )
    }
}