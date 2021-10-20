import React from "react";
import Device from "../generic/Device";
import Button from "../generic/Button";
import TimerScreen from "../generic/TimerScreen";
import styled from "styled-components";
import TimerInputs from "../generic/TimerInputs";



const AnimatedButton = styled(Button)`
    :hover {
        border: 1px solid #1B457929;
    }
    :active {
        transform: scale(1.05) translate(0px, 0px);
    }
    ::after {
        z-index: -1;
        transition: all .5s;
    }
    :hover::after {
        transform: scale(0.5) translate(-1px, 0px);
        
    }  
`;


const ActionButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    width: 100%;
    margin: 0 auto;
    position: relative;
    margin-top: 2.5rem;
    top: -6.5rem;  
`;




class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true, 
      showInputs: false, 
      hours : "00",
      minutes : "00", 
      seconds : "00",
      actionBtn : "New",
      actionBtnDisabled: false,
      timerStarted: false,
      timerPaused: false,
    }
  }


  handleAction = () => {
    if (this.state.actionBtn === "New") {
      this.setState({
        showTimer: false, 
        showInputs: true
      })
    } else if (this.state.actionBtn === "Pause") {
      this.setState({
        actionBtn: "Start",
      })
    } else {
      this.setState({
        actionBtn: "Pause",
      })
    }
  }
  
  handlePause = () => {
    console.log('pause started');
  }

  handleStopwatch = () => {
    console.log('Timer started!!!!');
    this.setState({actionBtn: "Pause"});
  }

  handleReset = () => {
    this.setState({hours: "00", minutes: "00", seconds: "00"});
    this.setState({actionBtn: "New"});
  }

  

  handleInputs = (e) => {
    console.log(e);
    this.setState({
      hours: e.runHours,
      minutes: e.runMinutes,
      seconds: e.runSeconds,
      timerStarted: true,
      showTimer: true,
      showInputs: false, 
      actionBtn: "Pause"
    }) 
  }
  
  render() {
    return (
      <div>
        
      <Device type="phone">
     
            {this.state.showTimer  && 
              <TimerScreen
                    showing={this.state.roundTimer} 
                    type="Stopwatch"
                    hours={this.state.hours} 
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}/> }
                
                
              
              {this.state.showTimer && 
              <ActionButtonsContainer>
                  <AnimatedButton outline="2px solid #302F2F" 
                                  outlineOffset="2px" 
                                  onClick={this.handleReset}>
                                  Reset
                  </AnimatedButton>
                  <AnimatedButton disabled={this.state.actionBtnDisabled} 
                                  outline={this.state.actionBtn === "Pause" ? "2px solid #592C0C96" : "2px solid #142F1B"}
                                  outlineOffset="2px" 
                                  background={this.state.actionBtn === "Pause" ? "#592C0C96" : "#142F1B"} 
                                  color={this.state.actionBtn === "Pause" ? "#E19F5A" : "#94D769"}
                                  onClick={this.handleAction}> 
                                  {this.state.actionBtn}
                  </AnimatedButton>
              </ActionButtonsContainer>
            } 
            {this.state.showInputs && 
            <TimerInputs type="Stopwatch" showInputs={this.state.showInputs} onClick={this.handleInputs}/>}
      </Device>    
      </div>
     
    )
  }
}

export default Stopwatch;
