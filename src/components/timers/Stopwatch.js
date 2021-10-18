import React from "react";
import Device from "../generic/Device";
import Button from "../generic/Button";
import TimerScreen from "../generic/TimerScreen";
import styled from "styled-components";
import Input from "../generic/Input";
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

    if (parseInt(num) > 0) {
      this.setState({timerInputted: true});
      this.setState({actionBtn: "Start"});
    }

    if (id === "Hour" ) {
      this.setState({hours: num});
    } else if (id === "Min") {
      if (num > 59) {
        this.setState({minutes: 59});
      } else {
        this.setState({minutes:  num});
      }
       
    } else {
      if (num > 59) {
        this.setState({seconds: 59});
      } else {
        this.setState({seconds:  num});
      }
    }
  
  }

  handleInputs = (e) => {
    console.log(`this is ${e}`);
    this.setState({
      hours: e.hours,
      minutes: e.minutes,
      seconds: e.seconds
    }) 
  }
  
  render() {
    return (
      <div>
        <TimerInputs showInputs={true} onClick={this.handleInputs}/>
      <Device type="phone">
     
            {this.state.showTimer  && 
              <TimerScreen
                    showing={this.state.roundTimer} 
                    type="Stopwatch"
                    hours={this.state.hours} 
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}/> }
                
                
              
      
              <ActionButtonsContainer>
                  <AnimatedButton outline="2px solid #302F2F" 
                                  outlineOffset="2px" 
                                  onClick={this.handleAction}>
                                  Reset
                  </AnimatedButton>
                  <AnimatedButton disabled={this.state.actionBtnDisabled} 
                                  outline="2px solid #142F1B" 
                                  outlineOffset="2px" 
                                  background="#142F1B" 
                                  color="#94D769"
                                  onClick={this.handleAction}> 
                                  {this.state.actionBtn}
                  </AnimatedButton>
              </ActionButtonsContainer>
      </Device>    
      </div>
     
    )
  }
}

export default Stopwatch;
