import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";


import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

import HeartRate from "../images/grey-heart-rate.svg";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  width: 85%;
  align-content: center;
  border: 1px solid blue;
  margin: 0 auto;
  padding-top: 1rem;
`

const Intro = styled.div`
  border: 1px solid green;
  img {
    margin-top: -1rem;
  };
  ul {
    margin-bottom: 3rem;
    display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
  align-content: center;
    li {
      font-size: 21px;
      color: #50874A;
      :hover, :active {
        color: #33492C;
      }
    };
    
  };
`;


const Timer = styled.div`
  border: 2px solid pink;
  padding: 0.5rem 2.5rem 0.5rem 2.5rem;
  
  
`;


const TimerTitle = styled.h1`
  font-size: 77px;
  font-family: Open Sans;
  color: #3679C0;
  margin: 0 auto;

`;

class TimersView extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsLoaded: false,
      activeComponent: "Stopwatch"
      
    }
  }
  componentDidMount() {
    document.fonts.ready.then(() => {
        this.setState({
            fontsLoaded: true
        })
    })
  } 

  

  render() {
    const timers = [
      { title: "Stopwatch", C: <Stopwatch /> },
      { title: "Countdown", C: <Countdown /> },
      { title: "XY", C: <XY /> },
      { title: "Tabata", C: <Tabata /> },
    ];

  return (
      <>
      {this.state.fontsLoaded && 
        <Container>
          <Intro>
            <TimerTitle>Timers</TimerTitle>
            <img src={HeartRate} width="350px" alt="Heart beat line vector"/>
            <ul>
              {timers.map((timer) => (
                <li onClick={() => {this.setState({
                  activeComponent: timer.title
                })}}>
                {timer.title}
               </li>
              )

                 
              )}
            </ul>
          </Intro>

         

        <Timer>
        
        {this.state.activeComponent === "Stopwatch" && 
          <Stopwatch/>
        }
        {this.state.activeComponent === "Countdown" && 
          <Countdown/>
        }
        {this.state.activeComponent === "XY" && 
          <XY/>
        }
        {this.state.activeComponent === "Tabata" && 
          <Tabata/>
        }
        
        </Timer>
        </Container>
      }

      </>
    

  );
  }
}

export default TimersView;
