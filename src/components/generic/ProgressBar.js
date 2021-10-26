import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const lightOrangeColor = "#F2AA4C"; 
const darkOrangeColor = "#BF3604"; 



const ProgressContainer = styled.div`
    width: 225px; 
    text-align: center;

`;

// Progress2 and progress-moved
const ProgressDiv = styled.div`
    padding: 1px;
    border-radius: 30px; 
    background: rgba(0, 0, 0, 0.25);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25);
    width: 100%;
    background-color: #95CF637D;
    animation: progressAnimation ${({seconds}) => seconds ? `${seconds}s` : "0"};
    animation-play-state: ${({playing}) => playing ? "running" : "paused"};

    @keyframes progressAnimation {
        0% {
          width: 0%;
          background-color: ${darkOrangeColor};
        }
        100% {
          width: 100%;
          background-color: ${lightOrangeColor};
        }
      }
      
      
`;
    




class ProgressBar extends React.Component {
  render() {
    const { playing, totalSeconds } = this.props;
    return (
      <>
        <ProgressContainer>
            <ProgressDiv playing={playing} seconds={totalSeconds}>
            </ProgressDiv>
        </ProgressContainer>
        
      </>
    );
  }
}

ProgressBar.propTypes = {
    time: PropTypes.number,
  };

export default ProgressBar;
