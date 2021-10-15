import React from "react";
import Device from "../generic/Device";
import Button from "../generic/Button";
import OperationsScreen from "../generic/OperationsScreen";
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


class Stopwatch extends React.Component {

  state = {
    currentTime: null,
    toggle: false,
    roundTimer : true,
    hours : "00",
    minutes : "00", 
    seconds : "00",
    rounds: "0",
    actionBtn : "New",
    actionBtnDisabled: false,
    timerType : "XY",
    timerShown : false, 
    timerInputted: false,
    timerStarted: false,
  };

  handleToggle = () => {
      this.setState({toggle: !this.state.toggle, 
      roundTimer: !this.state.roundTimer,
      timerShown: !this.state.timerShown 
      })
      if (this.state.actionBtn === "Start") {
        this.setState({timerStarted: true})
        this.handleStopwatch(); 
      }

  };

  handleStopwatch = () => {
    console.log('Timer started!!!!');
    this.setState({actionBtn: "Pause"});
    
  }

  handleReset = () => {
    this.setState({hours: "00", minutes: "00", seconds: "00"});
    this.setState({actionBtn: "New"});
  }

  handleInput = (e) => {
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
      this.setState({minutes: num}); 
    } else {
      this.setState({seconds: num});
    }
  
  }
  
  render() {
    return (
      <div>
      <Device type="phone">
            {this.state.roundTimer ?  
              <OperationsScreen 
                    type="Stopwatch"
                    hours={this.state.hours} 
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}/>
                :  
                <div>

                  <h3>Intended</h3>
                  <h2>Run Time</h2>
                  
                  <InputContainer>
                    <Input type="Hour" 
                           value={this.state.hours} 
                           onChange={this.handleInput}/>
                    <Input type="Min" 
                           value={this.state.minutes} 
                           onChange={this.handleInput}/>
                    <Input type="Sec" 
                           value={this.state.seconds} 
                           onChange={this.handleInput}/>
                  </InputContainer> 
                </div>  
              }
      
              <ActionButtonsContainer>
                  <AnimatedButton outline="2px solid #302F2F" 
                                  outlineOffset="2px" 
                                  onClick={this.handleReset}>
                                  Reset
                  </AnimatedButton>
                  <AnimatedButton disabled={this.state.actionBtnDisabled} 
                                  outline="2px solid #142F1B" 
                                  outlineOffset="2px" 
                                  background="#142F1B" 
                                  color="#94D769"
                                  onClick={this.handleToggle}> 
                                  {this.state.actionBtn}
                  </AnimatedButton>
              </ActionButtonsContainer>
      </Device>    
      </div>
     
    )
  }
}

export default Stopwatch;
