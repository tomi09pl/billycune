import React from 'react';
import ImageGallery from 'react-image-gallery';

//=======images for black gallery=======//



import blk1 from '../assets/black/FirstSingle.jpg';
import blk2 from '../assets/black/AtmosfericTwin.jpg';
import blk3 from '../assets/black/F-Head.jpg';
import blk4 from '../assets/black/Flathead.jpg';
import blk5 from '../assets/black/Knucklehead.jpg';
import blk6 from '../assets/black/KnuckleheadVer2.jpg';
import blk7 from '../assets/black/Panhead.jpg';
import blk8 from '../assets/black/Ironhead.jpg';
import blk9 from '../assets/black/GeneratorShovelhead.jpg';
import blk10 from '../assets/black/Panshovel.jpg';
import blk11 from '../assets/black/Shovelhead.jpg';
import blk12 from '../assets/black/Evolution.jpg';
import blk13 from '../assets/black/TwinCam.jpg';
import blk14 from '../assets/black/Milwaukee8.jpg';
//=======================================//

//=======images for classic gallery=======//
import cls1 from '../assets/classic/SingleHead.jpg';
import cls2 from '../assets/classic/AtmosfericV-Twin.jpg';
import cls3 from '../assets/classic/F-Head.jpg';
import cls4 from '../assets/classic/Flathead.jpg';
import cls5 from '../assets/classic/FlatheadVer2.jpg';
import cls6 from '../assets/classic/Knucklehead.jpg';
import cls7 from '../assets/classic/KnuckleheadVer2.jpg';
import cls8 from '../assets/classic/PanheadS_S.jpg';
import cls9 from '../assets/classic/GeneratorShovelhead.jpg';
import cls10 from '../assets/classic/Shovelhead.jpg';
import cls11 from '../assets/classic/Evolution.jpg';
import cls12 from '../assets/classic/TwinCam.jpg';
import cls13 from '../assets/classic/m8.jpg';
//=======================================//

import {Link} from "react-scroll";


const black = [
    {
        original: blk1,
        description: 'First Single 1903',
        thumbnail: blk1,
    },
    {
        original: blk2,
        description: 'Atmosferic-Twin 1909',
        thumbnail: blk2,
    },
    {
        original: blk3,
        description: 'F-Head 1911-1929',
        thumbnail: blk3,
    },
    {
        original: blk4,
        description: 'Flathead 1929-1973',
        thumbnail: blk4,
    },
    {
        original: blk5,
        description: 'Knucklehead 1936-1947',
        thumbnail: blk5,
    },
    {
        original: blk6,
        description: 'Knucklehead Ver. 2 1936-1947',
        thumbnail: blk6,
    },
    {
        original: blk7,
        description: 'Panhead 1948-1965',
        thumbnail: blk7,
    },
    {
        original: blk8,
        description: 'Ironhead 1957-1985',
        thumbnail: blk8,
    },
    {
        original: blk9,
        description: 'Generator Shovelhead 1966-1969',
        thumbnail: blk9,
    },
    {
        original: blk10,
        description: 'Panshovel 1966-1969',
        thumbnail: blk10,
    },
    {
        original: blk11,
        description: 'Shovelhead 1966-1984',
        thumbnail: blk11,
    },
    {
        original: blk12,
        description: 'Evolution 1984-1999',
        thumbnail: blk12,
    },
    {
        original: blk13,
        description: 'Twin Cam 1999-2017',
        thumbnail: blk13,
    },
    {
        original: blk14,
        description: 'Milwaukee 8 2017',
        thumbnail: blk14,
    }

];

const classic = [
    {
        original: cls1,
        description: 'Single Head',
        thumbnail: cls1,
    },
    {
        original: cls2,
        description: 'Atmosferic V-Twin',
        thumbnail: cls2,
    },
    {
        original: cls3,
        description: 'F-Head',
        thumbnail: cls3,
    },
    {
        original: cls4,
        description: 'Flathead',
        thumbnail: cls4,
    },
    {
        original: cls5,
        description: 'Flathead Ver. 2',
        thumbnail: cls5,
    },
    {
        original: cls6,
        description: 'Knucklehead',
        thumbnail: cls6,
    },
    {
        original: cls7,
        description: 'Knucklehead Ver. 2',
        thumbnail: cls7,
    },
    {
        original: cls8,
        description: 'Panhead S&S',
        thumbnail: cls8,
    },
    {
        original: cls9,
        description: 'Generator Shovelhead',
        thumbnail: cls9,
    },
    {
        original: cls10,
        description: 'Shovelhead',
        thumbnail: cls10,
    },
    {
        original: cls11,
        description: 'Evolution',
        thumbnail: cls11,
    },
    {
        original: cls12,
        description: 'Twin Cam',
        thumbnail: cls12,
    },
    {
        original: cls13,
        description: 'Milwaukee 8',
        thumbnail: cls13,
    }
];

const properties = {
    thumbnailPosition: "bottom",
};

export default class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clickedGallery: null
        };
    }

    clickHandler = (e) => {
        this.setState({clickedGallery: e.target.dataset.index})
    }

    render() {

        const gallery = this.state.clickedGallery;

        return (
            <div>
                <ul className={gallery != null ? "portfolio-nav-list" : "portfolio-nav-list background"}>
                    <Link
                        activeClass="active"
                        data-index={1}
                        to="breakPoint"
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration= {600}
                        className="portfolio-nav-list-link classic"
                        onClick={e => this.clickHandler(e)}
                    ></Link>
                    <Link
                        activeClass="active"
                        data-index={2}
                        to="breakPoint"
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration= {600}
                        className="portfolio-nav-list-link black"
                        onClick={this.clickHandler}
                    ></Link>
                </ul>

                <div className='breakPoint'></div>

                <div className="portfolio-container">
                    <div className={gallery==='1' ? "classic-gallery" : "hidden"}>
                        <ImageGallery {...properties} items={classic} />
                    </div>
                    <div className={gallery==='2' ? "black-gallery" : "hidden"}>
                        <ImageGallery {...properties} items={black} />
                    </div>

                </div>

                

            </div>
        )
    }
}
