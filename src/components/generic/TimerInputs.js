import React from "react";
import Device from "../generic/Device";
import Button from "../generic/Button";
import TimerScreen from "../generic/TimerScreen";
import styled from "styled-components";
import Input from "../generic/Input";
import { contains } from "dom-helpers";


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

const InputContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    margin-bottom: 4.4rem;
    position: relative;
    width: 85%;

`;


class TimerInputs extends React.Component {

  state = {
    currentTime: null,
    toggle: false,
    roundTimer : true,
    hours : "00",
    minutes : "00", 
    seconds : "00",
    rounds: null,
    actionBtn : "New",
    actionBtnDisabled: false,
    timerType : "XY",
    showTimer: true, 
    showInputs: false, 
    timerInputted: false,
    timerStarted: false,
    timerPaused: false,
    time: {
        hours: "00",
        minutes: "00",
        seconds: "00",
        rounds: 0, 
        restHours: "00",
        restMinutes: "00",
        restSeconds: "00"
    }
  };

  handleAction = () => {
      // handleActionButton  -> a bunch of case statements
      // handleStartTimer 
      // handlePause Timer
      // handleReset 
      // handleInput 
      // all inputs start with run time 
      // if input type == xy or tabata, also register intended rounds
      // if input type tabata, also register rest time 


      // MUST CHANGE

      // CASE STATEMENTS IF THE ACTIONBTN == "NEW", show input
      // If actionbtn == "pause" > pause timer 
      // Reverse the states of the timer and inputs component
      if (this.state.timerStarted) {
        this.setState({
          showTimer: true, 
          showInputs: false, 
        })
        
      } else {
        this.setState({
          showTimer: !this.state.showTimer,
          showInputs: !this.state.showInputs
        })
      }
      

      if (this.state.actionBtn === "Start") {
        console.log("start");
        this.setState({
          timerStarted: true, 
          actionBtn: "Pause"
        })
        
        

      } else if (this.state.actionBtn === "Pause") {
        console.log("pause");
        this.setState({
          actionBtn: "Start",
          timerPaused: true, 
          showTimer: true,
          showInputs: false
        })
        
        
      }

  };
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

  handleTimeInput = (e) => {

    
    const num = e.value;
    const id = e.id;
    console.log(`num: ${num}, id: ${id}`);


    // Get the id Substring to see if we should update the run or rest object
    const idSubStr = "time";


    if (parseInt(num) > 0) {
      this.setState({timerInputted: true});
      this.setState({actionBtn: "Start"});
    }

    if (id.includes("Hour")) {
        const newTime = {...this.state.time, hours: num}
        this.setState({time: newTime})
      
    } else if (id === "Min") {
      if (num > 59) {
        const newTime = {...this.state.time, minutes: 59}
        this.setState({time: newTime})
      } else {
        const newTime = {...this.state.time, minutes: num}
        this.setState({time: newTime})
      }
       
    } else {
      if (num > 59) {
        const newTime = {...this.state.time, seconds: 59}
        this.setState({time: newTime})
      } else {
        const newTime = {...this.state.time, seconds: num}
        this.setState({time: newTime})
      }
      
    }
    
    
    
  }
  
  render() {
      const { showInputs } = this.props; 
    return (
      <div>
                {showInputs && 
                <div>
                  <h3>Intended</h3>
                  <h2>Run Time</h2>
                  
                  <InputContainer>
                    <Input type="Hour" 
                           timer="Run"
                           value={this.state.time.hours} 
                           onChange={this.handleTimeInput}/>
                    <Input type="Min" 
                           timer="Run"
                           value={this.state.time.minutes} 
                           onChange={this.handleTimeInput}/>
                    <Input type="Sec" 
                           timer="Run"
                           value={this.state.time.seconds} 
                           onChange={this.handleTimeInput}/>
                  </InputContainer> 
                  <Button onClick={(e) => this.props.onClick(this.state.time)}></Button>
                </div>  
                
                } 
              
      
              
     
      </div>
     
    )
  }
}

export default TimerInputs;

