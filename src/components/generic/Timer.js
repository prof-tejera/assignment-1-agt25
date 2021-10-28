import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Components 
import Device from "./Device";
import Button from "./Button";
import TimerScreen from "./TimerScreen";
import TimerInputs from "./TimerInputs";
import ActionButton from "./ActionButton";

// Helpers 
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
  };


 
  handleActionButton = () => {

     /*************************************
      * Toggles the action buttons 
      * Options: "New", "Pause", and "Start"
      *************************************/
    
    if (this.state.actionBtn === "New") {
      /* When the user starts a new timer,
         toggle the visibility of TimerInputs and 
         TimerScreen components */
      this.setState({
        showTimer: false, 
        showInputs: true
      })

    } else if (this.state.actionBtn === "Pause") {
      /* When the user clicks 'Pause'
         toggle the action button to say 'Start';
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
    // Function that freezes the current time displayed 
  }


  
  handleReset = () => {

    /****************************************
      * When the 'Reset' button gets clicked
      * reset the state values 
    ****************************************/

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


 
  handleInputs = (e) => {

     /*******************************************
      * After the user has enters timer inputs, 
      * update the state to reflect the new values
      * *****************************************/

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

    // Update the state
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
        // After setting the state, call handleTimer 
        if (this.state.timerStarted) {
            this.handleTimer();
        }
    })
  };


  handleTimer = () => {

    /******************************************************
     * Calls the appropriate method based on the timer type 
     ****************************************************/

    if (this.state.timerType === "Stopwatch") {
        this.handleStopwatch(this.state.run);
    } else if (this.state.timerType === "Countdown") {
        this.handleCountdown(this.state.run); 
    } else if (this.state.timerType === "XY") {
        this.handleXY(this.state.run, this.state.rounds)
    } else {
        this.handleTabata(this.state.run, this.state.rest, this.state.rounds)
    }
  }


  handleStopwatch = (runTime) => {

    /*****************************
     * Will count up to the target;
     * 1. start at 0
     * 1. convert the runTime into seconds using the helper function
     * 2. updates the state of the time object displaying every second
     * 3. stops interval when the state obj matches the argument runTime
    *******************************/
  };

  handleCountdown = (runTime) => {

     /*****************************
     * Will count down to the target;
     * 1. convert the runTime into seconds using the helper function
     * 2. starts at the total seconds 
     * 2. updates the state of the time object displaying every second
     * 3. stops interval at 0. 
     */
    
  };

  handleXY = (runTime, rounds) => {

    /*************************
     * Calls handleCountdown in a loop 
     * the iterations depend on the rounds input
     * ************************/

  };

  handleTabata = (runTime, rounds, restTime) => {

    /*************************
     * Calls handleCountdown in a loop 
     * for both runTime and restTime
     * the iterations depend on the rounds input
     * ************************/
  };


  render() {
    const timerType = this.state.timerType;
    const { runHours, runMinutes, runSeconds } = this.state.run; 
    const { restHours, restMinutes, restSeconds } = this.state.rest;
    

    return (
      <div>
      {/* Device component */}
      <Device type="phone" currentTimer={timerType}>
          {/* Timer screen */}
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
                
              {/* Timer screen buttons */}
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

            {/* Timer inputs */}
            {this.state.showInputs && 
            <TimerInputs type={timerType} showInputs={this.state.showInputs} onClick={this.handleInputs}/>}
        </Device>    
      </div>
     
    )
  }
};



Timer.propTypes = {
    timerType: PropTypes.oneOf(["Stopwatch", "Countdown", "XY", "Tabata"])
};

Timer.defaultProps = {
    timerType: "Stopwatch"
};


export default Timer; 
