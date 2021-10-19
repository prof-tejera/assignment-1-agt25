import React from "react";
import Button from "../generic/Button";
import styled from "styled-components";
import Input from "../generic/Input";


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

const NextButton = styled(AnimatedButton)`
    outline: 2px solid #302F2F; 
    outline-offset: 2px;
    color: #9DB9CD;


`;

const StartButton = styled(AnimatedButton)`
    outline: 2px solid #142F1B; 
    outline-offset: 2px;
    background-color: #142F1B;
    color: #94D769;

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

    constructor(props) {
        super(props);
        this.state = {
            timerType: props.type, 
            showInputs: props.showInputs,

            runTimePhase: true,
            roundsPhase: false,
            restTimePhase: false,
    
            runEnabled: false, 
            roundsEnabled: false,
            restEnabled: false,

            time: {
                started: false, 
                hours: "00",
                minutes: "00",
                seconds: "00",
                rounds: "0", 
                restHours: "00",
                restMinutes: "00",
                restSeconds: "00"
            }
        };
    }
    


  handleTimeInput = (e) => {

    // Save number input and id 
    const num = e.value.trim();
    const id = e.id;

    // Enable 'start' button on valid input
    this.setState({
        runEnabled: num > 0 && num !== "" ? true : false,
    })
    
    // Copy over the current time object from state
    let newRun = {...this.state.time};
        
    if (id === "Hour") {
        newRun = {...this.state.time, hours: num}
    } else if (id === "Min") {
        newRun = {...this.state.time, minutes: num > 59 ? 59 : num}
    } else {
        newRun = {...this.state.time, seconds: num > 59 ? 59 : num}
    }
    this.setState({time: newRun}) 
  }


  handleNext = () => {
      console.log('Available');
      this.setState({
          runTimePhase: false,
          roundsPhase: true, 
      })
      

      if (this.state.time.rounds !== "0") {
        this.setState({
            roundsPhase: false, 
            xyReady: true,

        })  
      }
      
  }

  handleRoundInput = (e) => {
    let newRounds = {...this.state.time, rounds: e.value}
    console.log(e);
    this.setState({
        roundsPhase: true,
        runTimePhase: false
    })

    this.setState({time: newRounds}) 
    
    
}

  handleRunReset = () => {
    this.setState({
        timerInputted: false, 
        time: {
        started: false,
        hours: "00",
        minutes: "00",
        seconds: "00",
        }
    })
  }

  handleRoundsReset = () => {
    let noRounds = {...this.state.time, rounds: "0"}
    this.setState({time: noRounds}) 

  }

  handleRestTimeInput = (e) => {
    
    this.setState({
        restTimePhase: true,
        roundsPhase: false,
    })
  }
  render() {
    
    return (
        <div>
            {this.state.showInputs && 
            <div>

                {/* Runtime phase used by all timers */}
                {this.state.runTimePhase && 
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
                
                {/* Reset and conditional Start / Next button depending on the timer type */}
                <ActionButtonsContainer>
                    <AnimatedButton outline="2px solid #302F2F" 
                                    outlineOffset="2px" 
                                    onClick={this.handleReset}>
                                    Reset
                    </AnimatedButton>

                    {this.state.timerType === "Stopwatch" || 
                            this.state.timerType === "Countdown" ?
                            <StartButton onClick={(e) => this.props.onClick(this.state.time)}>Start</StartButton> : 
                            <NextButton onClick={this.handleRoundInput}>Next</NextButton>}
                </ActionButtonsContainer>
                  
                    </div>
                  }
                 
                {/* Rounds phase used by XY and Tabata */}
                 {this.state.roundsPhase && 
                 <div>
                     <h3>Intended</h3>
                        <h2>Rounds</h2>
                  
                  <InputContainer>
                    <Input type="Rounds" 
                           timer="Rounds"
                           value={this.state.time.rounds} 
                           onChange={this.handleRoundInput}/>
                  </InputContainer> 

                  <ActionButtonsContainer>
                    <AnimatedButton outline="2px solid #302F2F" 
                                    outlineOffset="2px" 
                                    onClick={this.handleRoundsReset}>
                                    Reset
                    </AnimatedButton>

                    {this.state.timerType === "XY" ?
                            <StartButton onClick={(e) => this.props.onClick(this.state.time)}>
                                Start</StartButton> : 
                            <NextButton onClick={this.handleRestTimeInput}>
                                Next</NextButton>}
                </ActionButtonsContainer>
                </div>
                }

            {this.state.restTimePhase && 
                 <div>
                     <h3>Intended</h3>
                        <h2>Rest Time</h2>
                        <InputContainer>
                        <Input type="restHour" 
                            timer="Run"
                            value={this.state.time.restHours} 
                            onChange={this.handleRestTimeInput}/>
                        <Input type="restMin" 
                            timer="Run"
                            value={this.state.time.restMinutes} 
                            onChange={this.handleRestTimeInput}/>
                        <Input type="restSec" 
                            timer="Run"
                            value={this.state.time.restSeconds} 
                            onChange={this.handleRestTimeInput}/>
                    </InputContainer> 
                  

                  <ActionButtonsContainer>
                    <AnimatedButton outline="2px solid #302F2F" 
                                    outlineOffset="2px" 
                                    onClick={this.handleReset}>
                                    Reset
                    </AnimatedButton>

                    
                    <StartButton onClick={(e) => this.props.onClick(this.state.time)}>Start</StartButton> : 
                            
                </ActionButtonsContainer>
                </div>
                }   
               


                
                 

                
                
                </div>  
                
                } 
              
      
              
     
      </div>
     
    )
  }
}

export default TimerInputs;

