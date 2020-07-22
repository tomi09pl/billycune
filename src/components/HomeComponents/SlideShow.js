import React from 'react';

import { Slide } from 'react-slideshow-image';
import img0 from '../../assets/_MG_4330_new.jpg'
import img1 from '../../assets/_MG_4397.jpg'
import img2 from '../../assets/_MG_4409.jpg'


// const slideImages = [img0, img1, img2];

const slideImages = [
    {
        img: img0,
        desc: 'welcome on the road'
    },
    {
        img: img1,
        desc: null
    },
    {
        img: img2,
        desc: null
    }
]

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
                                    <div style={{'backgroundImage': `url(${img.img})`}}>{img.desc===null?'':<span>{img.desc}</span>}</div>
                                </div>
                            )
                        }
                    </Slide>
                </div>
            </div>
        )
    }
}