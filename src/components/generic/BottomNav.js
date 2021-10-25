import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StopwatchFill, HourglassTop, ArrowRepeat, ClockHistory } from 'react-bootstrap-icons';

import Stopwatch from "../timers/Stopwatch";
import Countdown from "../timers/Countdown";
import XY from "../timers/XY";
import Tabata from "../timers/Tabata";

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
           
        </Container>
        </>
        );
    }
}

export default BottomNav;
