import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import ProgressBar from "./ProgressBar";
import ActionsCircle from "./ActionsCircle";

import OperationsCircle from "../../images/operations-circle.svg";
import ProgressRate from "../../images/blue-heart-rate.svg";
import RunningIcon from "../../images/running-icon.svg";
import StretchingIcon from "../../images/stretching-icon.svg";
import RestingIcon from "../../images/resting-icon.svg";
import TimerInputs from "./TimerInputs";

import Theme from "../../utils/theme";


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

const TopActionsContainer = styled.div`
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
    font-size: 70px;
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
    left: 1px;
    p {
        position: relative;
        top: -20px;
        font-size: ${({action}) => action.includes("Start New") ? "21px" : "22px"};  
    }
    div {
        position: relative;
        top: -7.5px;
    }
`;


const CircleWrapper = styled.div`
    border-radius: 50%;
    width: 75px;
    height: 75px;
    background: ${(props) => props.background || "transparent"};

`;




class TimersScreen extends React.Component {

    
    render() {
        const { hours, minutes, seconds, 
                rounds, 
                totalSeconds, 
                type, 
                action, 
                progressPlaying
                 } = this.props; 
        
        return (
            <>
                <Container>
                    <h3>{type}</h3>

                    {/* Top buttons above the timer */}
                    <TopActionsContainer>

                        {/* Left side: Conditional 'Rounds' status used by XY and TABATA */}
                        {type === "XY" || type === "Tabata" ? 
                            <CircleWrapper background={Theme.dark1}>
                                <ActionsCircle fontSize="50px">
                                    <div>{rounds ? rounds : "0"}</div>
                                </ActionsCircle> 
                             </CircleWrapper> : <CircleWrapper/> }

                        {/* Right side: Icon status used by all timers */}
                        <CircleWrapper background={Theme.dark1}>
                            <ActionsCircle border="1px dotted #1C91F2"> 
                            {action === "Run" &&  <img src={RunningIcon} alt="Running Stick Figure"/>}
                            {action === "Start New" && <img src={StretchingIcon} alt="Stretching Stick Figure"/>}
                            {action === "Rest" && <img src={RestingIcon} alt="Standing Stick Figure"/>}
                            </ActionsCircle>
                        </CircleWrapper>
                    </TopActionsContainer>


                    {/* Round timer wrapper and timer */}
                    <RoundTimerWrapper/>
                        <Time>
                            {hours}: {minutes}: {seconds}
                        </Time>


                    {/* Progress bar and status value (run, rest or the initial "stretch") */}
                    <ProgressWrapper action={action}>
                        <img width="232px" src={ProgressRate} alt="Progress Rate"></img>
                       
                        <div>
                        <ProgressBar playing={progressPlaying} totalSeconds={totalSeconds}/>
                        </div>
                        <p>{action}</p>
                      
                    </ProgressWrapper>               
                </Container>   
            </>
        );
    }
}

TimersScreen.propTypes = {
    action: PropTypes.string,
    hours: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    minutes: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    seconds: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    rounds: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]), 
    progressPlaying: PropTypes.bool,
    totalSeconds: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]), 
   
    
    
}

TimerInputs.defaultProps = {
    action: "Start New",
    hours: "00",
    minutes: "00",
    seconds: "00", 
    rounds: 0, 
    progressPlaying: false,
    totalSeconds: 0, 
    
    

}
export default TimersScreen;

