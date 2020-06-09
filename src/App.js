import React from 'react';
import {HashRouter as Router, Switch,Route} from "react-router-dom";

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
                    <div className="main-nav">
                        <Navigation/>
                        <Button />
                    </div>
                </header>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/makingof" component={MakingOf}/>
                    <Route path="/history" component={HistoryHD}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
