import React from 'react';
import { Link } from "react-scroll"

import About from "./HomeComponents/About";
import Contact from "./HomeComponents/Contact";
import Gallery from "./HomeComponents/Gallery";
import SlideShow from "./HomeComponents/SlideShow";
import Order from "./HomeComponents/HowToOrder";

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <HomeNavigation/>
                <SlideShow/>
                <About/>
                <Gallery/>
                {/*<Order/>*/}
                <Contact/>
            </div>
        )
    }
}

class HomeNavigation extends React.Component {

    render() {
        return (
            <div>
                <ul className="home-nav-list" id="home-menu">
                    <Link
                        activeClass="active"
                        to="slide-show"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className="home-nav-list-link"
                    >Slide Show</Link>
                    <Link
                        activeClass="active"
                        to="about-us"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {900}
                        className="home-nav-list-link"
                    >About</Link>
                    <Link
                        activeClass="active"
                        to="gallery"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {1600}
                        className="home-nav-list-link"
                    >Gallery</Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {1800}
                        className="home-nav-list-link"
                    >Contact</Link>
                </ul>
            </div>
        )
    }
};