import React from "react";

import Device from "./Device";
import Button from "./Button";
import TimerScreen from "./TimerScreen";
import TimerInputs from "./TimerInputs";
import ActionButton from "./ActionButton";
import ActionButtonsContainer from "./ActionButtonsContainer";

import { timeInSeconds } from "../../utils/helpers";


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      // Timer type 
      timerType: this.props.timerType,

      // Visibility of components 
      showTimer: true, 
      showInputs: false, 

      // Runtime for all timers 
      runHours : "00",
      runMinutes : "00", 
      runSeconds : "00",
      
      // Rounds for XY and Tabita
      rounds: 0, 

      // Restime for Tabita 
      restHours: "00",
      restMinutes: "00", 
      restSeconds: "00",

      // Status helpers
      actionHelper: "Press New",
      actionBtn : "New",
      actionBtnDisabled: false,
      progressPlaying: false, 
    
      
      // Timer operations triggers
      timerStarted: false,
      timerPaused: false,
      totalSeconds: 0, 

      // Active time currently showing
      hours: "00",
      minutes: "00",
      seconds: "00"
    }
  }


  /*************************************
   * Toggles the action buttons 
   * Options: "New", "Pause", and "Start"
   *************************************/
  handleActionButton = () => {
    
    if (this.state.actionBtn === "New") {
      /* When the user starts a new timer,
         toggle the visibility of TimerInputs and 
         TimerScreen components */
      this.setState({
        showTimer: false, 
        showInputs: true
      })

    } else if (this.state.actionBtn === "Pause") {
      /* When the user has clicks 'Pause'
         toggle the action button to say "Start";
         then handle the Pause functionality */
      this.setState({
        actionBtn: "Start",
        progressPlaying: false
      })
      this.handlePause();

    } else {
        /* When the timer is active, turn the 
           'New' button into a 'Pause' button */
      this.setState({
        actionBtn: "Pause",
        progressPlaying: true
        
      })
    }
  }
  


  handlePause = () => {
    
  }


  /****************************************
   * When the 'Reset' button gets clicked
   * this resets the state values 
   ****************************************/
  handleReset = () => {
    this.setState({
        runHours: "00", 
        runMinutes: "00", 
        runSeconds: "00",

        rounds: null, 

        restHours: "00",
        restMinutes: "00", 
        restSeconds: "00",

        actionHelper: "Press New",
        actionBtn : "New",
        actionBtnDisabled: false,
        progressPlaying: false, 

        timerStarted: false,
        timerPaused: false,
        totalSeconds: 0, 
    });
  }


  /*******************************************
   * After the user has enters timer inputs, 
   * update the state to reflect the new values
   * *****************************************/
  handleInputs = (e) => {
    console.log(e);
    this.setState({
      showTimer: true,
      showInputs: false,

      runHours: e.runHours,
      runMinutes: e.runMinutes,
      runSeconds: e.runSeconds,
     
      rounds: e.rounds, 

      restHours: e.restHours,
      restMinutes: e.restMinutes,
      restSeconds: e.restSeconds,


      actionBtn: e.started ? "Pause" : "New",
      totalSeconds: timeInSeconds(e.runHours, e.runMinutes, e.runSeconds),
      actionHelper: e.started ? "Run" : "Press New",

      progressPlaying: true, 
      timerStarted: e.started,

    }, function() {
        // After setting the state, call handleRun 
        console.log(this.state);
        this.handleTimer();

    })
    
    // if timerState is true, call the countUp function 
    // if user clicks pause, freeze the current time 
    // if timerType is stopwatch or countdown, or call handleRun
    // if type is XY, call handleXY -> which calls handleRun in a loop
    // if timerType is Tabata, call handleRun, then set to rest, etc. 
    
    
  }

  handleTimer = () => {
    if (this.state.timerType === "Stopwatch") {
        // call the countUp function 
    } else if (this.state.timerType === "Countdown") {
        // call the countDown function 
    } else if (this.state.timerType === "XY") {
        // call the XY function which calls countdown an X amount of times
    }
  }
  
  render() {
    const timerType = this.state.timerType;
    

    return (
      <div>
        
      <Device type="phone">
            {this.state.showTimer  && 
              <TimerScreen
                    showing={this.state.roundTimer} 
                    type={timerType}
                    hours={this.state.runHours} 
                    minutes={this.state.runMinutes}
                    seconds={this.state.runSeconds}
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
                                onClick={this.handleActionButton}> 
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

export default Timer; 
