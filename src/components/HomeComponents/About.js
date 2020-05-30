import React from 'react';
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";
import Image from "../../assets/KNUCKLE_web.jpg";


export default class About extends React.Component {
    render() {
        return(
            <div className="home-about-us-container" id="about-us">
                <h1>HOW TO ORDER ART</h1>
                <div className="main">
                    <div className="left">
                        <img src={Image}/>
                    </div>
                    <div className="right">
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
                </div>
            </div>
        )
    }
}