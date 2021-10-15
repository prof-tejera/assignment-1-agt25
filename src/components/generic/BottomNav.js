import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StopwatchFill, HourglassTop, ArrowRepeat, ClockHistory } from 'react-bootstrap-icons';


const Container = styled.div`
display: inline-flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
align-items: flex-start;
align-content: center;
text-align: center;

  li {
    letter-spacing: -1.6px;
    font-family: Roboto;
    line-height: 15px;
    font-size: 15px;
    width: 60px;
  }
  a:hover {
    color: #458FEB !important;
  }

`;

const NavLink = styled(Link)`

  text-decoration: none;
  color: grey;

  
  
  



`;







class BottomNav extends React.Component {
    render() {

        return (
        
            <>
           <Container>
           <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <StopwatchFill size={20}/>
                <div>Stopwatch
                  </div>
                </NavLink>
            </li>
            <li>
              <NavLink to="/Countdown">
              <HourglassTop size={20}/>
                <div>Countdown
                  </div>
              </NavLink>
            </li>
            <li>
            <NavLink to="/">
              <ArrowRepeat size={20}/>
                <div>Intervals
                  </div>
              </NavLink>
            </li>
            <li>
            <NavLink to="/">
              <ClockHistory size={20}/>
                <div>Tabata
                  </div>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
           
            
          </Route>
          <Route path="/">
          
           
          </Route>
          <Route path="/">
            
          </Route>

          <Route path="/">
          
          </Route>
        </Switch>
      </Router>
            

            
          
           
           
            
        </Container>
            </>
        );
    }
}

export default BottomNav;
