import React from "react";

import Device from "../generic/Device";
import Button from "../generic/Button";
import TimerScreen from "../generic/TimerScreen";
import TimerInputs from "../generic/TimerInputs";
import ActionButton from "../generic/ActionButton";
import ActionButtonsContainer from "../generic/ActionButtonsContainer";

import { timeInSeconds } from "../../utils/helpers";


class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true, 
      showInputs: false, 
      hours : "00",
      minutes : "00", 
      seconds : "00",
      progressPlaying: false, 
      actionHelper: "Press New",
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
    this.setState({hours: "00", 
                  minutes: "00", 
                  seconds: "00",
                  actionBtn: "New",
                  actionHelper: "Press New"
                });
  }

  handleInputs = (e) => {
    this.setState({
      hours: e.runHours,
      minutes: e.runMinutes,
      seconds: e.runSeconds,
      timerStarted: e.started,
      showTimer: true,
      showInputs: false, 
      actionBtn: e.started ? "Pause" : "New",
      totalSeconds: timeInSeconds(e.runHours, e.runMinutes, e.runSeconds),
      actionHelper: e.started ? "Run" : "Press New"
    }) 
    // if timerState is true, call the countUp function 
    // if user clicks pause, freeze the current time 
    
    
  }
  
  render() {
    const timerType = "Countdown";

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
                    action={this.state.actionHelper}
                    totalSeconds={this.state.totalSeconds}
                    progressPlaying={this.state.progressPlaying}
                    /> }
                
          
              {this.state.showTimer && 
              <ActionButtonsContainer top="-6.5rem">
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
              </ActionButtonsContainer>
            } 
            {this.state.showInputs && 
            <TimerInputs type={timerType} showInputs={this.state.showInputs} onClick={this.handleInputs}/>}
      </Device>    
      </div>
     
    )
  }
}

export default Countdown;
