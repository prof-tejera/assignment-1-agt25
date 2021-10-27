import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";
import DesignView from "./views/DesignView";

import Background from "./images/background.png";
import Timer from "./components/generic/Timer";


const Container = styled.div`
  background-image: url(${Background});
  background-repeat: none;
  background-position: center;
  background-size: cover;
  height: 100vh;
  overflow: auto;
  text-align: center;
  ul {
    text-align: right;
    list-style: none;
    padding-right: 2rem;
  };
  li {
    display: inline-block;
    padding: 0.1rem 1rem 0.1rem 1rem;
    color: #414141; 
  };
  a {
    color: #414141;
  }
  a:hover {
    color: #C78233;
  };
  
  h3 {
    font-family: Roboto;
    font-size: 23px;
    color: white;
    font-weight: 400;
    letter-spacing: 1px;
    margin-top: 9px;
  } 
  h2 {
    font-family: Roboto;
    font-size: 35px;
    color: white;
    font-weight: 400;
    letter-spacing: 1px;
    margin-top: -4px;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #191919;
  font-size: 1.2rem;
  font-weight: 500;
  &.active {
    color: #976730;
  }
`;


function App() {
  return (
    <Container>      
      <Router>
        <nav>
          <ul>
            <li>
              <StyledLink to="/timers">Timers</StyledLink>
            </li>
            <li>
              <StyledLink to="/design">Design</StyledLink>
            </li>
            <li>
              <StyledLink to="/docs">Documentation</StyledLink>
            </li>
            
            
            
          </ul>
        </nav>
        <Switch>
        <Route exact path="/">
2           <Redirect to="/timers" />
3         </Route>
          <Route exact path="/docs">
            <DocumentationView />
          </Route>
          <Route exact path="/timers">
            <TimersView />
          </Route>
          <Route exact path="/design">
          <DesignView />
          </Route>
        
          
        </Switch>
      </Router>
 
       
    </Container>
      
  );
}

export default App;
