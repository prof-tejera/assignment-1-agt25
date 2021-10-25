import React from "react";
import Device from "../generic/Device";
import Button from "../generic/Button";
import TimerScreen from "../generic/TimerScreen";
import styled from "styled-components";
import TimerInputs from "../generic/TimerInputs";
import { timeInSeconds } from "../../utils/helpers";
import ActionButton from "../generic/ActionButton";



const ButtonsContainer = styled.div`
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
      action: "Rest",
      actionBtn : "New",
      actionBtnDisabled: false,
      timerStarted: false,
      timerPaused: false,
      totalSeconds: 0, 
      
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
      this.handlePause();
    } else {
      this.setState({
        actionBtn: "Pause",
        
      })
    }
  }
  
  handlePause = () => {
    
  }
  handleReset = () => {
    this.setState({hours: "00", minutes: "00", seconds: "00"});
    this.setState({actionBtn: "New"});
  }

  handleInputs = (e) => {
    this.setState({
      hours: e.runHours,
      minutes: e.runMinutes,
      seconds: e.runSeconds,
      totalSeconds: timeInSeconds(e.runHours, e.runMinutes, e.runSeconds),
      timerStarted: true,
      showTimer: true,
      showInputs: false, 
     
      actionBtn: parseInt(this.state.hours) || 
                parseInt(this.state.minutes) || 
                parseInt(this.state.seconds) ? "New" : "Pause"
      
    }) 
    
    
  }
  
  render() {
    const timerType = "Tabata";

    return (
      <div>
        
      <Device type="phone">
            {this.state.showTimer  && 
             
              <TimerScreen
                    showing={this.state.roundTimer} 
                    type={timerType}
                    hours={this.state.hours} 
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}
                    timerStarted={this.state.timerStarted}
                    action={this.state.action}
                    totalSeconds={this.state.totalSeconds}
                    /> }
                
          
              {this.state.showTimer && 
              <ButtonsContainer>
                  <Button outline="2px solid #302F2F" 
                                  outlineOffset="2px" 
                                  onClick={this.handleReset}>
                                  Reset
                  </Button>
                  <ActionButton disabled={this.state.actionBtnDisabled} 
                                type={this.state.actionBtn === "Pause" ? "Orange" : "Green"}
                                onClick={this.handleAction}> 
                                {this.state.actionBtn}
                  </ActionButton>
              </ButtonsContainer>
            } 
            {this.state.showInputs && 
            <TimerInputs type={timerType} showInputs={this.state.showInputs} onClick={this.handleInputs}/>}
      </Device>    
      </div>
     
    )
  }
}

export default Stopwatch;
