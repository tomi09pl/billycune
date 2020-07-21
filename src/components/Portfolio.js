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
//==============classic with titles========//
import cls14 from '../assets/classic_title/1903_First_Single.jpg';
import cls15 from '../assets/classic_title/1909_Atmosferic-Twin.jpg';
import cls16 from '../assets/classic_title/1911_F-Head.jpg';
import cls17 from '../assets/classic_title/1929_Flathead.jpg';
import cls18 from '../assets/classic_title/1929_Flathead_ver_2.jpg';
import cls19 from '../assets/classic_title/1936_Knucklehead.jpg';
import cls20 from '../assets/classic_title/1936_Knucklehead_ver_2.jpg';
import cls21 from '../assets/classic_title/1948_Panhead.jpg';
import cls22 from '../assets/classic_title/1957_Ironhead.jpg';
import cls23 from '../assets/classic_title/1966_Generator_Shovelhead.jpg';
import cls24 from '../assets/classic_title/1966_Shovelhead.jpg';
import cls25 from '../assets/classic_title/1984_Evolution.jpg';
import cls26 from '../assets/classic_title/1984_Evolution_ver_2.jpg';
import cls27 from '../assets/classic_title/1999_Twin_Cam.jpg';
import cls28 from '../assets/classic_title/2017_Milwaukee-Eight.jpg';
import cls29 from '../assets/classic_title/2017_Milwaukee-Eight_114.jpg';
//=======================================//

//=======images for retro gallery=======//
import rtr1 from '../assets/retro/1903_First_Single.jpg';
import rtr2 from '../assets/retro/1909_Atmosferic_Twin.jpg';
import rtr3 from '../assets/retro/1911_F-Head.jpg';
import rtr4 from '../assets/retro/1929_Flathead.jpg';
import rtr5 from '../assets/retro//1929_Flathead_ver_2.jpg';
import rtr6 from '../assets/retro/1936_Knucklehead.jpg';
import rtr7 from '../assets/retro/1936_Knucklehead_ver_2.jpg';
import rtr8 from '../assets/retro/1948_Panhead.jpg';
import rtr9 from '../assets/retro/1957_Ironhead.jpg';
import rtr10 from '../assets/retro/1966_Generator_Shovelhead.jpg';
import rtr11 from '../assets/retro/1966_Shovelhead.jpg';
import rtr12 from '../assets/retro/1984_Evolution.jpg';
import rtr13 from '../assets/retro/1984_Evolution_ver_2.jpg';
import rtr14 from '../assets/retro/1999_Twin_Cam.jpg';
import rtr15 from '../assets/retro/2017_Milwaukee-8.jpg';
import rtr16 from '../assets/retro/2017_Milwaukee-8_114.jpg';
//=======================================//

//=======images for bikes gallery=======//
import bike1 from '../assets/bikes/Motorbike.jpg';
import bike2 from '../assets/bikes/Sportster_48_classic.jpg';
import bike3 from '../assets/bikes/Sportster_48_black.jpg';
import bike4 from '../assets/bikes/red_bike.jpg';
import bike5 from '../assets/bikes/Springer_black.jpg';
import bike6 from '../assets/bikes/Springer_classic.jpg';
//=======================================//

//=======images for others gallery=======//
import oth1 from '../assets/others/forbidden_kiss.jpg';
import oth2 from '../assets/others/zombie.jpg';
import oth3 from '../assets/others/tyrant_pro.jpg';
import oth4 from '../assets/others/the_chief.jpg';
import oth5 from '../assets/others/hetzer_non_orton.jpg';
import oth6 from '../assets/others/Jagdpanther.jpg';
import oth7 from '../assets/others/PanzerkampfwagenIV.jpg';
import oth8 from '../assets/others/StuGIIIG.jpg';
import oth9 from '../assets/others/T-34.jpg';
//=======================================//

//=======images for customersCollections gallery=======//
import cust1 from '../assets/fotki_klientow/1.jpg'
import cust2 from '../assets/fotki_klientow/2.jpg'
import cust3 from '../assets/fotki_klientow/3.jpg'
import cust4 from '../assets/fotki_klientow/4.jpg'
import cust5 from '../assets/fotki_klientow/5.jpg'
import cust6 from '../assets/fotki_klientow/6.jpg'
import cust7 from '../assets/fotki_klientow/7.jpg'
import cust8 from '../assets/fotki_klientow/8.jpg'
import cust9 from '../assets/fotki_klientow/9.jpg'
import cust10 from '../assets/fotki_klientow/10.jpg'
import cust11 from '../assets/fotki_klientow/11.jpg'
import cust12 from '../assets/fotki_klientow/12.jpg'
//====================================================//

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
        description: 'Milwaukee-8 2017',
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
        description: 'Milwaukee-8',
        thumbnail: cls13,
    }
    
];

const classicTitled = [
    {
        original: cls14,
        description: '1903 First Single',
        thumbnail: cls14,
    },
    {
        original: cls15,
        description: '1909 Atmosferic Twin',
        thumbnail: cls15,
    },
    {
        original: cls16,
        description: '1911 F-Head',
        thumbnail: cls16,
    },
    {
        original: cls17,
        description: '1929 Flathead',
        thumbnail: cls17,
    },
    {
        original: cls18,
        description: '1929 Flathead ver. 2',
        thumbnail: cls18,
    },
    {
        original: cls19,
        description: '1936 Knucklehead',
        thumbnail: cls19,
    },
    {
        original: cls20,
        description: '1936 Knucklehead ver. 2',
        thumbnail: cls20,
    },
    {
        original: cls21,
        description: '1948 Panhead',
        thumbnail: cls21,
    },
    {
        original: cls22,
        description: '1957 Ironhead',
        thumbnail: cls22,
    },
    {
        original: cls23,
        description: '1966 Generator Shovelhead',
        thumbnail: cls23,
    },
    {
        original: cls24,
        description: '1966 Shovelhead',
        thumbnail: cls24,
    },
    {
        original: cls25,
        description: '1984 Evolution',
        thumbnail: cls25,
    },
    {
        original: cls26,
        description: '1984 Evolution ver. 2',
        thumbnail: cls26,
    },
    {
        original: cls27,
        description: '1999 Twin Cam',
        thumbnail: cls27,
    },
    {
        original: cls28,
        description: '2017 Mailwaukee-Eight',
        thumbnail: cls28,
    },
    {
        original: cls29,
        description: '2017 Mailwaukee-Eight 114',
        thumbnail: cls29,
    }
];

const retro = [
    {
        original: rtr1,
        description: 'First Single',
        thumbnail: rtr1,
    },
    {
        original: rtr2,
        description: 'Atmosferic Twin',
        thumbnail: rtr2,
    },
    {
        original: rtr3,
        description: 'F-Head',
        thumbnail: rtr3,
    },
    {
        original: rtr4,
        description: 'Flathead',
        thumbnail: rtr4,
    },
    {
        original: rtr5,
        description: 'Flathead Ver. 2',
        thumbnail: rtr5,
    },
    {
        original: rtr6,
        description: 'Knucklehead',
        thumbnail: rtr6,
    },
    {
        original: rtr7,
        description: 'Knucklehead Ver. 2',
        thumbnail: rtr7,
    },
    {
        original: rtr8,
        description: 'Panhead',
        thumbnail: rtr8,
    },
    {
        original: rtr9,
        description: 'Ironhead',
        thumbnail: rtr9,
    },
    {
        original: rtr10,
        description: 'Generator Shovelhead',
        thumbnail: rtr10,
    },
    {
        original: rtr11,
        description: 'Shovelhead',
        thumbnail: rtr11,
    },
    {
        original: rtr12,
        description: 'Evolution',
        thumbnail: rtr12,
    },
    {
        original: rtr13,
        description: 'Evolution Ver. 2',
        thumbnail: rtr13,
    },
    {
        original: rtr14,
        description: 'Twin Cam',
        thumbnail: rtr14,
    },
    {
        original: rtr15,
        description: 'Milwaukee-8',
        thumbnail: rtr15,
    },
    {
        original: rtr16,
        description: 'Milwaukee-8 114',
        thumbnail: rtr16,
    }
];

const bikes = [
    {
        original: bike1,
        description:'',
        thumbnail: bike1
    },
    {
        original: bike2,
        description:'',
        thumbnail: bike2
    },
    {
        original: bike3,
        description:'Sportster 48 - black edition',
        thumbnail: bike3
    },
    {
        original: bike4,
        description:'Sportster 48 - classic edition',
        thumbnail: bike4
    },
    {
        original: bike5,
        description:'Springer - black edition',
        thumbnail: bike5
    },
    {
        original: bike6,
        description:'Springer - classic edition',
        thumbnail: bike6
    }
]

const others = [
    {
        original: oth1,
        description:'Forbidden kiss',
        thumbnail: oth1
    },
    {
        original: oth2,
        description:'Zombie',
        thumbnail: oth2
    },
    {
        original: oth3,
        description:'Tyrant Pro',
        thumbnail: oth3
    },
    {
        original: oth4,
        description:'The Chief',
        thumbnail: oth4
    },
    {
        original: oth5,
        description:'Hetzer',
        thumbnail: oth5
    },
    {
        original: oth6,
        description:'Jagdpanther',
        thumbnail: oth6
    },
    {
        original: oth7,
        description:'Panzerkampfwagen IV',
        thumbnail: oth7
    },
    {
        original: oth8,
        description:'StuG III G',
        thumbnail: oth8
    },
    {
        original: oth9,
        description:'T-34',
        thumbnail: oth9
    }
];

const customersCollections = [
    {
        original: cust1,
        thumbnail: cust1
    },
    {
        original: cust2,
        thumbnail: cust2
    },
    {
        original: cust3,
        thumbnail: cust3
    },
    {
        original: cust4,
        thumbnail: cust4
    },
    {
        original: cust5,
        thumbnail: cust5
    },
    {
        original: cust6,
        thumbnail: cust6
    },
    {
        original: cust7,
        thumbnail: cust7
    },
    {
        original: cust8,
        thumbnail: cust8
    },
    {
        original: cust9,
        thumbnail: cust9
    },
    {
        original: cust10,
        thumbnail: cust10
    },
    {
        original: cust11,
        thumbnail: cust11
    },
    {
        original: cust12,
        thumbnail: cust12
    },
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

    getGalleryArr = () => {
       
        // debugger;
        if (this.state.clickedGallery==='1'){
            return classic
        } else if (this.state.clickedGallery==='2') {
            return classicTitled
        } else if (this.state.clickedGallery==='3') {
            return black
        } else if (this.state.clickedGallery==='4') {
            return retro
        } else if (this.state.clickedGallery==='5') {
            return bikes
        } else if (this.state.clickedGallery==='6') {
            return others
        } else if (this.state.clickedGallery==='7') {
            return customersCollections
        }        
        return [];
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
                        className="portfolio-nav-list-link classic-titled"
                        onClick={e => this.clickHandler(e)}
                    ></Link>
                    <Link
                        activeClass="active"
                        data-index={3}
                        to="breakPoint"
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration= {600}
                        className="portfolio-nav-list-link black"
                        onClick={this.clickHandler}
                    ></Link>
                    <Link
                        activeClass="active"
                        data-index={4}
                        to="breakPoint"
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration= {600}
                        className="portfolio-nav-list-link retro"
                        onClick={this.clickHandler}
                    ></Link>
                    <Link
                        activeClass="active"
                        data-index={5}
                        to="breakPoint"
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration= {600}
                        className="portfolio-nav-list-link bikes"
                        onClick={this.clickHandler}
                    ></Link>
                    <Link
                        activeClass="active"
                        data-index={6}
                        to="breakPoint"
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration= {600}
                        className="portfolio-nav-list-link others"
                        onClick={this.clickHandler}
                    ></Link>
                    <Link
                        activeClass="active"
                        data-index={7}
                        to="breakPoint"
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration= {600}
                        className="portfolio-nav-list-link customers"
                        onClick={this.clickHandler}
                    ></Link>
                </ul>

                <div className='breakPoint'></div>

                <div className="portfolio-container">
                    <div className={gallery===null ? "hidden" : "classic-gallery"}>
                        <ImageGallery {...properties} items={this.getGalleryArr()} />
                    </div>
                </div>

                {/* <div className="portfolio-container">
                    <div className={gallery==='1' ? "classic-gallery" : "hidden"}>
                        <ImageGallery {...properties} items={classic} />
                    </div>
                    <div className={gallery==='2' ? "black-gallery" : "hidden"}>
                        <ImageGallery {...properties} items={black} />
                    </div>
                    <div className={gallery==='3' ? "retro-gallery" : "hidden"}>
                        <ImageGallery {...properties} items={retro} />
                    </div>
                    <div className={gallery==='4' ? "bikes-gallery" : "hidden"}>
                        <ImageGallery {...properties} items={bikes} />
                    </div>

                </div> */}

                

            </div>
        )
    }
}
