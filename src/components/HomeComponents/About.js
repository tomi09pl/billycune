import React from 'react';
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";

export default class About extends React.Component {
    render() {
        return(
            <div className="home-about-us-container" id="about-us">About art & me
                <NavLink exact to="/portfolio">PORTFOLIO</NavLink>
                <Link
                    activeClass="active"
                    to="home-contact-container"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {900}
                    className="home-nav-list-link"
                >ORDER ART</Link>
            </div>
        )
    }
}