import React from 'react';
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";
import {ParallaxBanner} from 'react-scroll-parallax';
import Image from "../../assets/KNUCKLE_web.jpg";
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
                        {/* <img src={Image} alt='knuckle engine'/> */}
                        <ParallaxBanner
                            className="section3-parallax"
                            layers={[
                                {image: Image, amount: 0.6},
                                // {image: img2, amount: 0.2,}
                                ]}
                            style={{height: '95%'}}
                        >

                        </ParallaxBanner>
                    </div>
                    <div className="right">
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias animi assumenda at blanditiis, consectetur cum cumque delectus doloribus dolorum eius expedita illo incidunt ipsam ipsum mollitia nemo nostrum odio omnis placeat praesentium quasi qui quidem quis quisquam quos ratione recusandae similique suscipit vel veritatis vitae voluptates. Accusamus adipisci assumenda dignissimos earum eligendi excepturi fuga ipsa maiores quaerat ut.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ducimus eos esse iusto, neque quisquam vitae. Aliquid cum doloribus exercitationem facilis maiores obcaecati, ut voluptates!</p>
                        </div>

                        <div className="buttons">
                            <NavLink onClick={e => this.changeClick(e)} exact to="/portfolio">PORTFOLIO</NavLink>
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
            </div>
        )
    }
}