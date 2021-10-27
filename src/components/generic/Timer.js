import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Device from "./Device";
import Button from "./Button";
import TimerScreen from "./TimerScreen";
import TimerInputs from "./TimerInputs";
import ActionButton from "./ActionButton";

import { timeInSeconds } from "../../utils/helpers";

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


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      // Timer type 
      timerType: this.props.timerType,

      // Visibility of components 
      showTimer: true, 
      showInputs: false, 

      // Run time for all timers 
      run: {
        runHours : "00",
        runMinutes : "00", 
        runSeconds : "00",
      },

      // Rest time for Tabita
      rest: {
        restHours: "00",
        restMinutes: "00", 
        restSeconds: "00",
      },
      
      // Rounds
      rounds: 0, 

      // Current time object showing
      current: "run",

      // Status helpers
      actionHelper: "Start New",
      actionBtn : "New",
      actionBtnDisabled: false,
      progressPlaying: false, 
    
      // Timer operations triggers
      timerStarted: false,
      timerPaused: false,
      totalSeconds: 0, 

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
    let runObj = { 
        ...this.state.run,
        runHours: "00",
        runMinutes: "00",
        runSeconds: "00",
    }; 
    let restObj = {
        ...this.state.rest, 
        restHours: "00",
        restMinutes: "00",
        restSeconds: "00",
    };

    this.setState({
        run: runObj,
        rest: restObj,
        rounds: 0, 
        actionHelper: "Start New",
        actionBtn : "New",
        current: "run",
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

    // Compose the run and rest time objects 
    let runObj = { 
        ...this.state.run,
        runHours: e.runHours,
        runMinutes: e.runMinutes,
        runSeconds: e.runSeconds
    }; 
    let restObj = {
        ...this.state.rest, 
        restHours: e.restHours,
        restMinutes: e.restMinutes,
        restSeconds: e.restSeconds,
    };

    this.setState({

      // Component visibility 
      showTimer: true,
      showInputs: false,

      // Time objects and rounds 
      run: runObj, 
      rest: restObj,
      rounds: e.rounds, 
      
      // Action buttons 
      actionBtn: e.started ? "Pause" : "New",
      actionHelper: e.started ? "Run" : "Start New",

      // Progress bar values
      totalSeconds: timeInSeconds(e.runHours, e.runMinutes, e.runSeconds),
      progressPlaying: true, 

      // Announce start 
      timerStarted: e.started,

    }, function() {
        // After setting the state, call handleRun 
        console.log(this.state);
        if (this.state.timerStarted) {
            this.handleTimer();
        }
    })
    
    // if timerState is true, call the countUp function 
    // if user clicks pause, freeze the current time 
    // if timerType is stopwatch or countdown, or call handleRun
    // if type is XY, call handleXY -> which calls handleRun in a loop
    // if timerType is Tabata, call handleRun, then set to rest, etc. 
    
    
  };

  handleStopwatch = (runTime) => {
    let {runHours, runMinutes, runSeconds } = runTime; 
    console.log(runHours, runMinutes, runSeconds);
    // convert the runTime to seconds, call it target
    // start timeElapsed at 0
    // set a counter while 0 < target
        // each iteration, set the state + 1
        // if seconds are 59, set seconds to 0, and minute to +1
        // if minutes are 59 and seconds are 59, set hour to +1

  };

  handleCountdown = (runTime) => {
    let {runHours, runMinutes, runSeconds } = runTime; 
    console.log(runHours, runMinutes, runSeconds);
  };

  handleXY = (runTime, rounds) => {
    let { runHours, runMinutes, runSeconds } = runTime; 
    console.log(runHours, runMinutes, runSeconds, rounds);
    // calls handleCountdown in a loop 

  };

  handleTabata = (runTime, rounds, restTime) => {
    let { runHours, runMinutes, runSeconds } = runTime; 
    let { restHours, restMinutes, restSeconds } = restTime; 
    // call handleCountdown in a loop for runTime
    // then for restTime
  }

  handleTimer = () => {
    if (this.state.timerType === "Stopwatch") {
        this.handleStopwatch(this.state.run);
    } else if (this.state.timerType === "Countdown") {
        this.handleCountdown(this.state.run); 
    } else if (this.state.timerType === "XY") {
        // call the XY function which calls countdown an X amount of times
    } else {
        // call tabata which counts down an X amount of times and rests 
    }
  }
  
  render() {
    const timerType = this.state.timerType;
    const { runHours, runMinutes, runSeconds } = this.state.run; 
    const { restHours, restMinutes, restSeconds } = this.state.rest;
    

    return (
      <div>
        
      <Device type="phone" currentTimer={timerType}>
            {this.state.showTimer  && 
              <TimerScreen
                    showing={this.state.roundTimer} 
                    type={timerType}
                    hours={this.state.current === "run" ? runHours : restHours} 
                    minutes={this.state.current === "run" ? runMinutes : restMinutes}
                    seconds={this.state.current === "run" ? runSeconds : restSeconds}
                    rounds={this.state.rounds}
                    timerStarted={this.state.timerStarted}
                    action={this.state.actionHelper}
                    totalSeconds={this.state.totalSeconds}
                    progressPlaying={this.state.progressPlaying}
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
                                onClick={this.handleActionButton}> 
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



Timer.propTypes = {
    timerType: PropTypes.oneOf(["Stopwatch", "Countdown", "XY", "Tabata"])
}

Timer.defaultProps = {
    timerType: "Stopwatch"
}


export default Timer; 
