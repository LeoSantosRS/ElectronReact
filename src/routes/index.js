import React from "react";
import { BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";

// importamdo as paginas
import {Home} from '../pages/home/home';


export const Routes = () => {
    return(
        <Router>           
            <Switch>
                <Route path="/" element={<Home />} />
            </Switch>
        </Router>
)
}