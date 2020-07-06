import React from 'react';
import {NavLink} from "react-router-dom";

const activeStyle = {
    fontWeight: "bold"
};

export default class Navigation extends React.Component {
    changeClick(e){
        const menu = document.querySelector('.main-nav-list');
        menu.classList.remove('show');
        window.scrollTo(0, 0)
    }
    //to do mobilki będzie powyżej--Darek
    render() {
        return (
            <>
                <ul onClick={e => this.changeClick(e)} className="main-nav-list" id="menu">
                    <li><NavLink activeStyle={activeStyle} exact to="/">Home</NavLink></li>
                    <li><NavLink activeStyle={activeStyle} to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink activeStyle={activeStyle} to="/makingof">Making Of</NavLink></li>
                    {/* <li><NavLink activeStyle={activeStyle} to="/history">H-D engines</NavLink></li> */}
                </ul>
            </>
        )
    }
};