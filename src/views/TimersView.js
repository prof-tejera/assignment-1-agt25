import React from "react";
import styled from "styled-components";

// Timers 
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

// Vector
import HeartRate from "../images/grey-heart-rate.svg";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 85%;
  align-content: center;
  margin: 0 auto;
  padding-top: 1rem;
`
const Intro = styled.div`
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
      :hover {
        color: #33492C;
      };
    };
  };
`;

const Timer = styled.div`
  padding: 0.5rem 3rem 0.5rem 3rem;
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
    // Load fonts and set state 
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
      {/* Only once the fonts have loaded, show the homepage */}
      {this.state.fontsLoaded && 
        <Container>
          <Intro>
            <TimerTitle>Timers</TimerTitle>
            <img src={HeartRate} width="350px" alt="Heartbeat line vector"/>
            {/* List each timer */}
            <ul>
              {timers.map((timer) => (
                <li 
                  key={timer.title}
                  onClick={() => {this.setState({
                  activeComponent: timer.title
                })}}>
                {timer.title}
               </li>
              )   
              )}
            </ul>
          </Intro>

          <Timer>
            {/* Show only the selected timer */}
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
