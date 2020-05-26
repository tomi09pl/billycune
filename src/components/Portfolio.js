import React from 'react';
import ImageGallery from 'react-image-gallery';

import img0 from '../assets/_bigMG_4330.jpg'
import img1 from '../assets/_bigMG_4397.jpg'
import img2 from '../assets/_bigMG_4409.jpg'
import thb0 from '../assets/_miniMG_4330.jpg'
import thb1 from '../assets/_miniMG_4397.jpg'
import thb2 from '../assets/_miniMG_4409.jpg'
import {Link} from "react-scroll";

const images = [
    {
        original: img0,
        thumbnail: thb0,
    },
    {
        original: img1,
        thumbnail: thb1,
    },
    {
        original: img2,
        thumbnail: thb2,
    },
];
const properties = {
    thumbnailPosition: "bottom",
};

class PortfolioNavigation extends React.Component {

    render() {
        return (
            <div>
                <ul className="portfolio-nav-list" id="portfolio-nav">
                    <Link
                        activeClass="active"
                        to="classic-gallery"
                        spy={true}
                        smooth={true}
                        offset={-5}
                        duration= {600}
                        className="portfolio-nav-list-link"
                    >Classic Gallery - click me!</Link>
                    <Link
                        activeClass="active"
                        to="black-gallery"
                        spy={true}
                        smooth={true}
                        offset={-5}
                        duration= {600}
                        className="portfolio-nav-list-link"
                    >Black Gallery - click me!</Link>
                </ul>
            </div>
        )
    }
}

export default class Portfolio extends React.Component {
    render() {
        return(
            <div className="portfolio-container">
                <div>
                    <PortfolioNavigation/>
                </div>
                <div id="classic-gallery">
                    <ImageGallery {...properties} items={images} />
                </div>
                <div id="black-gallery">
                    <ImageGallery {...properties} items={images} />
                </div>

            </div>
        )
    }
}
