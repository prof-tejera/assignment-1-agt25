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
        this.handleGoBack = this.handleGoBack.bind(this);
        this.state = {
            timerType: props.type, 
            showInputs: props.showInputs,

            // Phases 
            runTimePhase: true,
            roundsPhase: false,
            restTimePhase: false,
    
            // Input buttons 
            runEnabled: false, 
            roundsEnabled: false,
            restEnabled: false,

            // Timer 
            time: {
                started: false, 
                hours: "00",
                minutes: "00",
                seconds: "00",

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

  handleRunInput = (e) => {

    // Save number input and id 
    let num = parseInt(e.value);
    const id = e.id;

    // Enable 'start' button on valid input
    this.setState({
        runEnabled: num > 0 && num !== "" ? true : false,
    })

    // Copy over the current time object from state
    let newRun = {...this.state.time};
      
    
   
    // Assign the input to the correct state value
    if (id === "Hour") {
        newRun = {...this.state.time, hours: num}
    } else if (id === "Min") {
        newRun = {...this.state.time, minutes: num > 59 ? 59 : num}
    } else {
        newRun = {...this.state.time, seconds: num > 59 ? 59 : num}
    }
    this.setState({time: newRun}) 
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

    // Save number input and id 
    let num = parseInt(e.value);
    const id = e.id;

    // Enable 'start' button on valid input
    this.setState({
        restEnabled: num > 0 && num !== "" ? true : false,
    })

    // Copy over the current time object from state
    let newRest = {...this.state.time};
    
    // Assign the input to the correct state value
    if (id === "Hour") {
        newRest = {...this.state.time, restHours: num}
    } else if (id === "Min") {
        newRest = {...this.state.time, restMinutes: num > 59 ? 59 : num}
    } else if (id === "Sec") {
        newRest = {...this.state.time, restSeconds: num > 59 ? 59 : num}
    } else {
        return null;
    }
    this.setState({time: newRest}) 
  }

  handleGoBack() {
    if (this.state.runTimePhase) {
        console.log('run!');
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
                        <Input type="Hour" 
                            timer="Run"
                            value={this.state.time.hours} 
                            onChange={this.handleRunInput}/>
                        <Input type="Min" 
                            timer="Run"
                            value={this.state.time.minutes} 
                            onChange={this.handleRunInput}/>
                        <Input type="Sec" 
                            timer="Run"
                            value={this.state.time.seconds} 
                            onChange={this.handleRunInput}/>
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
                                            onClick={this.handleRoundInput}>
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
                            timer="Run"
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
                        <Input type="Hour" 
                            timer="Rest"
                            value={this.state.time.restHours} 
                            onChange={this.handleRestInput}/>
                        <Input type="Min" 
                            timer="Rest"
                            value={this.state.time.restMinutes} 
                            onChange={this.handleRestInput}/>
                        <Input type="Sec" 
                            timer="Rest"
                            value={this.state.time.restSeconds} 
                            onChange={this.handleRestInput}/>
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

