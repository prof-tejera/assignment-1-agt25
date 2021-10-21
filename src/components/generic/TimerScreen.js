import React from "react";
import styled from "styled-components";
import OperationsCircle from "../../images/operations-circle.svg";
import Button from "./Button";
import ProgressRate from "../../images/progress-rate.svg";




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

const ProgressWrapper = styled.div`
    width: 229px;
    margin: 0 auto;
    height: 30px;
    position: relative;
    top: -197px;
    left: -2.5px;

    p {
        position: relative;
        top: -25px;
        font-size: 26px;
        color: #458FEBDE;
    }
      
    }
    
      
`;

const ProgressFill = styled.div`
    position: relative;
    top: -23px;
    width: 95%;
    background-color: orange;
    animation: progressAnimation ${(props) => props.time || "0s"};
    padding: 1px;
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.25);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 
                0 1px rgba(255, 255, 255, 0.08);

    div {
        height: 18px;
        border-radius: 30px;
        background-color: orange;
        transition: 0.4s linear;
        transition-property: width, background-color;
        width: 85%;
        
        
    }
    @keyframes progressAnimation {
        0% {
          width: 5%;
          background-color: #F9BCCA;
        }
        100% {
          width: 100%;
          background-color: orange;
        }
      }

`;


const ButtonWrapper = styled(Button)`
    width: 75px;
    height: 75px;
    background: ${(props) => props.background || "transparent"};

`;


class OperationsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          seconds: 0, 
        }
      }
    
   
    render() {
        const { type, hours, minutes, seconds, timerStarted } = this.props; 
        

        
        return (
            <>
                <Container>
                    <h3>{type}</h3>

                    {/* Top buttons above the timer */}
                    <TopButtonsContainer>

                        {/* Left side: Conditional 'Rounds' button used by XY and TABATA */}
                        <ButtonWrapper>
                                {type === "XY" || type === "Tabata" ? 
                                    <Button background="#1A1A1A" 
                                            color="#1C91F2" 
                                            width="70px" 
                                            height="70px" 
                                            fontSize="55px" 
                                            fontWeight={700}> 0 
                                    </Button> : null}
                        </ButtonWrapper>


                        {/* Right side: Icon status button used by all timers */}
                        <ButtonWrapper background="#1A1A1A">
                            <Button border="1px dotted #1C91F2" 
                                    background="#1A1A1A" 
                                    width="70px" 
                                    height="70px" 
                                    color="#1C91F2">
                            </Button>
                        </ButtonWrapper>
                    </TopButtonsContainer>
                    

                    {/* Round timer wrapper and timer */}
                    <RoundTimerWrapper/>
                        <Time>
                            {hours || "00"}: {minutes || "00"}: {seconds || "00"}
                        </Time>


                    {/* Progress bar and status value (run or rest) */}
                    <ProgressWrapper>
                        <img width="232px" src={ProgressRate} alt="Progress Rate"></img>
                        {timerStarted &&  <ProgressFill/> }
                       
                        <p>Run</p>
                        
                    </ProgressWrapper>
    
                   
                </Container>      
            </>
        );
    }
}

export default OperationsScreen;
