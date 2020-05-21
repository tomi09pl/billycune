import React from 'react';
import {HashRouter as Router, Switch,Route} from "react-router-dom";

import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import MakingOf from "./components/MakingOf";
import HistoryHD from "./components/HistoryHD";
import NotFound from "./components/NotFound";

function App() {
    return (
        <div>
            <Router>
                {/*<Nav /> TUTAJ BEDZIE MOZNA RENDEROWAC KOMPONENT ZAWIERAJACY NAWIGACJE/MENU */}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/makingof" component={MakingOf}/>
                    <Route path="/history" component={HistoryHD}/>
                    <Route component={NotFound}/>
                </Switch>
                {/*<Footer />  TUTAJ BEDZIE MOZNA RENDEROWAC STOPKE */}
            </Router>
        </div>
    );
}

export default App;
