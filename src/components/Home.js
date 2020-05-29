import React from 'react';
import { Link } from "react-scroll";

import About from "./HomeComponents/About";
import Contact from "./HomeComponents/Contact";
import Gallery from "./HomeComponents/Gallery";
import SlideShow from "./HomeComponents/SlideShow";
import Footer from "./HomeComponents/Footer";

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <HomeNavigation/>
                <SlideShow/>
                <About/>
                <Gallery/>
                <Contact/>
                <Footer/>
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
                        to="about-us"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {600}
                        className="home-nav-list-link"
                    >About</Link>
                    <Link
                        activeClass="active"
                        to="gallery"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {600}
                        className="home-nav-list-link"
                    >Gallery</Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {600}
                        className="home-nav-list-link"
                    >Contact</Link>
                </ul>
            </div>
        )
    }
};