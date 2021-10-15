import React from "react";
import styled from "styled-components";
import OperationsCircle from "../../images/operations-circle.svg";
import Button from "./Button";


const Container = styled.div`
    height: 65%;
    width: 100%;
    margin: 0 auto;

`;

const RoundTimerWrapper = styled.div`
  height: 240px;
  width: 240px;
  margin: 0 auto;
  border-radius: 50%;
  background-image: url(${OperationsCircle});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;


`;



const TopButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: flex-start;
    align-content: center;
    
    margin-bottom: -3.7rem !important;
    width: 70%;
    margin: 0 auto;
    
`;

const Time = styled.h1`
    text-align: center;
    width: 100%;
    margin: 0 auto;
    position: relative;
    top: -180px;
    font-size: 72px;
    color: white;
    font-family: league-gothic;
    background-color: #1A1A1A63;
    letter-spacing: 3px;
    font-weight: 300;
    

    
`;

const ProgressBar = styled.div`
    border-top: 1px solid #1C91F2;
    width: 66%;
    margin: 0 auto;
    position: relative;
    top: -175px;
    p {
        font-size: 26px;
        margin: 10px 0 10px 0;
    }
    
`;


class OperationsScreen extends React.Component {
    
   
    render() {
        const { type, hours, minutes, seconds } = this.props; 

        
        return (
            <>
                <Container>
                    <h3>{type}</h3>
                
            
            {/* Top buttons above the timer */}
            <TopButtonsContainer>

                {/* Conditional 'Rounds' button used by XY and TABATA */}
                <Button width="75px" 
                        height="75px" 
                        background="transparent">
                        {type === "XY" || type === "Tabata" ? 
                            <Button background="#1A1A1A" 
                                    color="#1C91F2" 
                                    width="70px" 
                                    height="70px" 
                                    fontSize="55px" 
                                    fontWeight={700}> 0 
                            </Button> : null}
                </Button>


                {/* Icon status button used by all timers */}
                <Button width="75px" 
                        height="75px" 
                        background="#1A1A1A">
                    <Button border="1px dotted #1C91F2" 
                            background="#1A1A1A" 
                            width="70px" 
                            height="70px" 
                            color="#1C91F2">
                    </Button>
                </Button>
            </TopButtonsContainer>
            
            {/* Round timer wrapper and timer */}
            <RoundTimerWrapper/>
                <Time>
                    {hours}: {minutes}: {seconds}
                </Time>

            {/* Progress bar and status value (run or rest) */}
            <ProgressBar>
                <p>Run</p>
            </ProgressBar>
            </Container>      
        </>
        );
    }
}

export default OperationsScreen;

