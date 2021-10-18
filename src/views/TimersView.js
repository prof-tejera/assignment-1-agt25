import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";


// const Timers = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Timer = styled.div`
//   border: 1px solid gray;
//   padding: 20px;
//   margin: 10px;
//   font-size: 1.5rem;
// `;

// const TimerTitle = styled.div``;

function App() {
  

  return (
      <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Stopwatch</Link>
            </li>
            <li>
              <Link to="/countdown">Countdown</Link>
            </li>
            <li>
              <Link to="/xy">XY</Link>
            </li>
            <li>
              <Link to="/tabata">Tabata</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <Stopwatch />
            
          </Route>
          <Route path="/countdown">
            <Countdown />
           
          </Route>
          <Route path="/xy">
            <XY />
          </Route>

          <Route path="/tabata">
            <Tabata />
          </Route>
        </Switch>
      </Router>
     
     
      </>
    

  );
}

export default App;
