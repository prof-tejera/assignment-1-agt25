import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";


const Container = styled.div`
  background-image: linear-gradient(to left bottom, 
                    #f5fdff, #f4fefe, #f4fffc, #f6fff9, 
                    #f9fff6, #fbfff5, #fdfef4, #fffef3, 
                    #fffef3, #fffef3, #fffef3, #fffef3);
  height: 100vh;
  overflow: auto;
  text-align: center;
  ul {
    list-style: none;
    padding: 0.25rem;
    margin: 0;
  };
  li {
    display: inline-block;
    padding: 0.5rem;
    
    
  };
  a:hover {
    color: orangered;
  };
  nav {
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #191919;
  font-size: 1.3rem;
  font-weight: 500;
  

`;


function App() {
  return (
    <Container>      
      <Router>
        <nav>
          <ul>
            <li>
              <StyledLink to="/stopwatch">Timers</StyledLink>
            </li>
            <li>
              <StyledLink to="/docs">Documentation</StyledLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/docs">
            <DocumentationView />
          </Route>
          <Route path="/stopwatch">
            <TimersView />
          </Route>
        </Switch>
      </Router>
      
    </Container>
  );
}

export default App;
