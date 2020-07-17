import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import signature from './assets/billyCuneSignature.gif';
import CookieConsent from "react-cookie-consent";


import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import MakingOf from "./components/MakingOf";
import HistoryHD from "./components/HistoryHD";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import Button from "./components/MobileButton";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Router>

                <header className="page-header">
                <CookieConsent buttonText='OK'>This website uses cookies to enhance user experience.</CookieConsent>
                    <div className="main-nav">
                        <Navigation />
                        <Button />
                    </div>
                    <div className='main-nav-right'>
                        <img className='header-signature' src={signature} alt='signature' />
                        <div className="main-nav-social-wrapper">
                        <a href="https://www.facebook.com/BillyCune/" target='_blank' rel="noopener noreferrer">
                            <div className="facebook" />
                        </a>
                        <a href="https://www.instagram.com/billycuneart/" target='_blank' rel="noopener noreferrer">
                            <div className="instagram" />
                        </a>
                        <a href="https://www.deviantart.com/cune" target='_blank' rel="noopener noreferrer">
                            <div className="deviantart"/>
                        </a>
                        </div>
                    </div>
                </header>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/makingof" component={MakingOf} />
                    <Route path="/history" component={HistoryHD} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
