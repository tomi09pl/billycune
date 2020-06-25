import React from 'react';
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";
import {ParallaxBanner, Parallax} from 'react-scroll-parallax';
import Image from "../../assets/KNUCKLE_web.jpg";
import Image2 from '../../assets/about.jpg';
import Image3 from '../../assets/about2.jpg';
import Image4 from '../../assets/about3.jpg';
import Divider from '../Divider';


export default class About extends React.Component {
    changeClick(e){
        window.scrollTo(0, 0)
    }
    render() {
        return(
            <div className="home-about-us-container" id="about-us">
                <h1>about art & me</h1>
                <Divider />
                
                <div className="main">
                    <div className="left">
                        <div className='row'>
                            <ParallaxBanner
                                className="section3-parallax"
                                layers={[
                                    {image: Image2, amount: 0.2}
                                    ]}
                                style={{height: '95%', width: '45%'}}
                            >
                            </ParallaxBanner>
                            <ParallaxBanner
                                className="section3-parallax"
                                layers={[
                                    {image: Image, amount: 0.3}
                                    ]}
                                style={{height: '95%', width: '45%'}}
                            >
                            </ParallaxBanner>
                        </div>

                        <div className='row'>
                            <ParallaxBanner
                                className="section3-parallax"
                                layers={[
                                    {image: Image4, amount: 0.3}
                                    ]}
                                style={{height: '95%', width: '45%'}}
                            >
                            </ParallaxBanner>
                            <ParallaxBanner
                                className="section3-parallax"
                                layers={[
                                    {image: Image3, amount: 0.2}
                                    ]}
                                style={{height: '95%', width: '45%'}}
                            >
                            </ParallaxBanner>
                        </div>
                    </div>

                    <div className="right">
                        <div className="text">
                            <p>A few words about me for new and old friends.</p>
                            <p>I am a motorcyclist from Poland. I love Harley-Davidson motorcycles and Heavy Metal music. These are my main sources of inspiration. In the past I served in the marines in the rank of corporal.</p>
                            <p>In 2015, I had a motorcycle accident that forced me to leave further service. It was the beginning of artistic activity. In 2016, I painted the first engine. I gave it to the Harley-Davidson dealers shop in Gdańsk. Some of my arts are still there.</p>
                            <p>I would like to develop as an artist, reach the level of David Mann's art. Thank you for your support and stay tuned!</p>
                        </div>

                        <div className="buttons">
                            {/* <div className='buttons-wrapper'> */}
                                <NavLink onClick={e => this.changeClick(e)} exact to="/portfolio">
                                    <span></span>
                                    <span></span>
                                    PORTFOLIO
                                </NavLink>
                                <Link
                                    activeClass="active"
                                    to="home-contact-container"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {900}
                                    className="">
                                        ORDER ART
                                        <span></span>
                                        <span></span>
                                </Link>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}