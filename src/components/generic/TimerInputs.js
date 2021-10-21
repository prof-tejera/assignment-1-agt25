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
        this.handleTimeInput = this.handleTimeInput.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
        this.state = {
            timerType: props.type, 
            showInputs: props.showInputs,

            // Phases 
            runTimePhase: true,
            roundsPhase: false,
            restTimePhase: false,
    
            // Actions buttons 
            runEnabled: false, 
            roundsEnabled: false,
            restEnabled: false,

            // Timer 
            time: {
                started: false, 
                runHours: "00",
                runMinutes: "00",
                runSeconds: "00",

                rounds: "00", 

                restHours: "00",
                restMinutes: "00",
                restSeconds: "00",
            }
        };
    }
    

  /****************************************************************
   * The three methods below handle: run, rounds, and rest inputs
   ***************************************************************/

  handleTimeInput = (e) => {
      
    // Save number input and id 
    let num = parseInt(e.value);
    const id = e.id;

    // If the input is whitespace, set the value to 0
    if (!num) {
        num = "0";
    }
    
    // Copy over the current time object from state
    let newRun = {...this.state.time};
      
    // Assign the input to the correct state value
    if (id.includes("Hour")) {
        newRun = {...this.state.time, [id]: num}
    } else if (id.includes("Min")) {
        newRun = {...this.state.time, [id]: num > 59 ? 59 : num}
    } else {
        newRun = {...this.state.time, [id]: num > 59 ? 59 : num}
    }

    // Set the new object as the time state 
    this.setState({
        time: newRun
    }, function () {
        
        // Enable the action button if any of the time inputs are true
        if (id.includes("run")) {
            this.setState({
                runEnabled: this.state.time.runHours > 0 || 
                            this.state.time.runMinutes > 0 || 
                            this.state.time.runSeconds > 0 ? true : false,
            })
        } else {
            this.setState({
                restEnabled: this.state.time.restHours > 0 || 
                             this.state.time.restMinutes > 0 || 
                             this.state.time.restSeconds > 0 ? true : false,
            })
        }
        
    });
    
    
    
  }


  handleRoundInput = (e) => {
    let id = e.id;
    let num = parseInt(e.value); 
    console.log(e);

    this.setState({
        roundsPhase: true,
        runTimePhase: false
    })
    
    
    if (id === "Rounds") {
        let newRounds = {...this.state.time, rounds: num}
        this.setState({
            time: newRounds, 
            roundsEnabled: num > 0 && num !== "" ? true : false, 
        })  
    }    
}

  
  handleRestInput = (e) => {

    this.setState({
        roundsPhase: false,
        restTimePhase: true,
    })
  }


  
  handleGoBack() {
    if (this.state.runTimePhase) {
        let resetTimeObj = {
            ...this.state.time, 
            runHours: "00",
            runMinutes: "00",
            runSeconds: "00",
            rounds: "00", 
            restHours: "00",
            restMinutes: "00",
            restSeconds: "00",
        }
        this.setState({
            time: resetTimeObj, 
            runEnabled: false, 
            roundsEnabled: false,
            restEnabled: false,
        }, function() {
            this.props.onClick(this.state.time);
        })
        
    } else if (this.state.roundsPhase) {
        this.setState({
            runTimePhase: true,
            roundsPhase: false,
        })
    } else if (this.state.restTimePhase) {
        this.setState({
            roundsPhase: true,
            restTimePhase: false,
        })
    }
  }


  render() {
    
    return (
        <div>
            {this.state.showInputs && 
            <div>
                {/************************************
                 * Runtime phase used by all timers 
                 *************************************/}
                {this.state.runTimePhase && 
                 <div>
                    <h3>Intended</h3>
                    <h2>Run Time</h2>
                    
                    <InputContainer>
                        <Input type="runHours" 
                            label="Hour"
                            value={this.state.time.runHours} 
                            onChange={this.handleTimeInput}/>
                        <Input type="runMinutes" 
                            label="Min"
                            value={this.state.time.runMinutes} 
                            onChange={this.handleTimeInput}/>
                        <Input type="runSeconds" 
                            label="Sec"
                            value={this.state.time.runSeconds} 
                            onChange={this.handleTimeInput}/>
                    </InputContainer> 
                
                {/*****************************************
                 * Reset and conditional Start / Next button 
                 * depending on the timer type 
                 * ***************************************/}
                    <ActionButtonsContainer>
                        <AnimatedButton outline="2px solid #302F2F" 
                                        outlineOffset="2px" 
                                        onClick={this.handleGoBack}>
                                        Back
                        </AnimatedButton>

                        {this.state.timerType === "Stopwatch" || 
                                this.state.timerType === "Countdown" ?
                                <StartButton disabled={!this.state.runEnabled}
                                            onClick={(e) => this.props.onClick(this.state.time)}>
                                                    Start
                                </StartButton> : 
                                <NextButton disabled={!this.state.runEnabled}
                                            onClick={this.handleRoundInput}
                                            onKeyDown={this.handleResetInput}>
                                                Next
                                </NextButton>}
                    </ActionButtonsContainer>
                  
                </div>
                  }
                 
                {/*******************************************
                 * Rounds phase used by XY and Tabata 
                 * ******************************************/}
                 {this.state.roundsPhase && 
                 <div>
                     <h3>Intended</h3>
                        <h2>Rounds</h2>
                  
                  <InputContainer>
                  <Input type="Rounds" 
                            label="Intervals"
                            value={this.state.time.rounds} 
                            onChange={this.handleRoundInput}/>
                  </InputContainer> 

                 {/*******************************************
                 * Rounds "go back" button. 
                 * XY gets a "start" button; 
                 * Tabata gets a "next" button
                 * ******************************************/}
                  <ActionButtonsContainer>
                    <AnimatedButton outline="2px solid #302F2F" 
                                    outlineOffset="2px" 
                                    onClick={this.handleGoBack}>
                                    Back
                    </AnimatedButton>

                    {this.state.timerType === "XY" ?
                        <StartButton disabled={!this.state.roundsEnabled}
                                     onClick={(e) => this.props.onClick(this.state.time)}>
                                        Start
                        </StartButton> : 
                        <NextButton disabled={!this.state.roundsEnabled}
                                    onClick={this.handleRestInput}>
                                        Next
                        </NextButton>}
                </ActionButtonsContainer>
                </div>
                }

                {/*******************************************
                 * Rest time phase used by Tabata 
                 * ******************************************/}
                {this.state.restTimePhase && 
                 <div>
                     <h3>Intended</h3>
                        <h2>Rest Time</h2>
                        <InputContainer>
                        <Input type="restHours" 
                            label="Hour"
                            value={this.state.time.restHours} 
                            onChange={this.handleTimeInput}/>
                        <Input type="restMinutes" 
                            label="Min"
                            value={this.state.time.restMinutes} 
                            onChange={this.handleTimeInput}/>
                        <Input type="restSeconds" 
                            label="Sec"
                            value={this.state.time.restSeconds} 
                            onChange={this.handleTimeInput}/>
                    </InputContainer> 
                  

                {/*******************************************
                 * Rest phase "go back" and "start" buttons
                 * ******************************************/}
                  <ActionButtonsContainer>
                    <AnimatedButton outline="2px solid #302F2F" 
                                    outlineOffset="2px" 
                                    onClick={this.handleGoBack}>
                                    Back
                    </AnimatedButton>

                    
                    <StartButton disabled={!this.state.restEnabled}
                                 onClick={(e) => this.props.onClick(this.state.time)}>
                                 Start
                    </StartButton> 
                            
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
