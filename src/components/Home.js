import React from 'react';

import About from "./HomeComponents/About";
import Contact from "./HomeComponents/Contact";
import Gallery from "./HomeComponents/Gallery";
import SlideShow from "./HomeComponents/SlideShow";

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <SlideShow/>
                <About/>
                <Gallery/>
                <Contact/>
            </div>
        )
    }
}