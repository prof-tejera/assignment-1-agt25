import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Stopwatch from "../timers/Stopwatch";






class BottomNav extends React.Component {
    render() {

        return (
        
            <>
            <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Stopwatch</Link>
            </li>
            <li>
              <Link to="/">Countdown</Link>
            </li>
            <li>
              <Link to="/">XY</Link>
            </li>
            <li>
              <Link to="/">Tabata</Link>
            </li>
            
          </ul>
        </nav>
        <Switch>
         
          <Route path="/">
            
          </Route>
        </Switch>
      </Router>
      
            

            </>
        );
    }
}

export default BottomNav;
