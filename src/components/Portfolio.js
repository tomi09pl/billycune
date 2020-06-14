import React from 'react';
import ImageGallery from 'react-image-gallery';

//=======images for black gallery=======//
import blk1 from '../assets/black/AtmosfericTwin.jpg';
import blk2 from '../assets/black/Evolution.jpg';
import blk3 from '../assets/black/F-Head.jpg';
import blk4 from '../assets/black/FirstSingle.jpg';
import blk5 from '../assets/black/Flathead.jpg';
import blk6 from '../assets/black/GeneratorShovelhead.jpg';
import blk7 from '../assets/black/Ironhead.jpg';
import blk8 from '../assets/black/Knucklehead.jpg';
import blk9 from '../assets/black/KnuckleheadVer2.jpg';
import blk10 from '../assets/black/Milwaukee8.jpg';
import blk11 from '../assets/black/Panhead.jpg';
import blk12 from '../assets/black/Panshovel.jpg';
import blk13 from '../assets/black/Shovelhead.jpg';
import blk14 from '../assets/black/TwinCam.jpg';
//=======================================//

//=======images for classic gallery=======//
import cls1 from '../assets/classic/AtmosfericV-Twin.jpg';
import cls2 from '../assets/classic/Evolution.jpg';
import cls3 from '../assets/classic/F-Head.jpg';
import cls4 from '../assets/classic/Flathead.jpg';
import cls5 from '../assets/classic/FlatheadVer2.jpg';
import cls6 from '../assets/classic/GeneratorShovelhead.jpg';
import cls7 from '../assets/classic/Knucklehead.jpg';
import cls8 from '../assets/classic/KnuckleheadVer2.jpg';
import cls9 from '../assets/classic/m8.jpg';
import cls10 from '../assets/classic/PanheadS_S.jpg';
import cls11 from '../assets/classic/Shovelhead.jpg';
import cls12 from '../assets/classic/SingleHead.jpg';
import cls13 from '../assets/classic/TwinCam.jpg';
//=======================================//

import classicIcon from '../assets/portfolioClassic_icon.jpg';
import blackIcon from '../assets/portfolioBlack_icon.jpg';

import {Link} from "react-scroll";

const black = [
    {
        original: blk1,
        thumbnail: blk1,
    },
    {
        original: blk2,
        thumbnail: blk2,
    },
    {
        original: blk3,
        thumbnail: blk3,
    },
    {
        original: blk4,
        thumbnail: blk4,
    },
    {
        original: blk5,
        thumbnail: blk5,
    },
    {
        original: blk6,
        thumbnail: blk6,
    },
    {
        original: blk7,
        thumbnail: blk7,
    },
    {
        original: blk8,
        thumbnail: blk8,
    },
    {
        original: blk9,
        thumbnail: blk9,
    },
    {
        original: blk10,
        thumbnail: blk10,
    },
    {
        original: blk11,
        thumbnail: blk11,
    },
    {
        original: blk12,
        thumbnail: blk12,
    },
    {
        original: blk13,
        thumbnail: blk13,
    },
    {
        original: blk14,
        thumbnail: blk14,
    }

];

const classic = [
    {
        original: cls1,
        thumbnail: cls1,
    },
    {
        original: cls2,
        thumbnail: cls2,
    },
    {
        original: cls3,
        thumbnail: cls3,
    },
    {
        original: cls4,
        thumbnail: cls4,
    },
    {
        original: cls5,
        thumbnail: cls5,
    },
    {
        original: cls6,
        thumbnail: cls6,
    },
    {
        original: cls7,
        thumbnail: cls7,
    },
    {
        original: cls8,
        thumbnail: cls8,
    },
    {
        original: cls9,
        thumbnail: cls9,
    },
    {
        original: cls10,
        thumbnail: cls10,
    },
    {
        original: cls11,
        thumbnail: cls11,
    },
    {
        original: cls12,
        thumbnail: cls12,
    },
    {
        original: cls13,
        thumbnail: cls13,
    }
];

const properties = {
    thumbnailPosition: "bottom",
};

class PortfolioNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clickedGallery: null
        };
    }

    clickHandler = (e) => {
        this.setState({clickedGallery: e})
    }

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
                        className="portfolio-nav-list-link classic"
                        onClick={e => this.clickHandler(e)}
                    ><img src={classicIcon} alt='Classic Portfolio icon' /></Link>
                    <Link
                        activeClass="active"
                        to="black-gallery"
                        spy={true}
                        smooth={true}
                        offset={-5}
                        duration= {600}
                        className="portfolio-nav-list-link black"
                        onClick={this.clickHandler}
                    ><img src={blackIcon} alt='Black Portfolio icon' /></Link>
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
                    <ImageGallery {...properties} items={classic} />
                </div>
                <div id="black-gallery">
                    <ImageGallery {...properties} items={black} />
                </div>

            </div>
        )
    }
}
