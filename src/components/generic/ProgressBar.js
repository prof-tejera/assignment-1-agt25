import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const lightOrangeColor = "#F2AA4C"; 
const darkOrangeColor = "#BF3604"; 



const ProgressFill = styled.div`
    position: relative;
    top: -25px;
    width: 96%;
    background-color: #65A03178;
    animation: progressAnimation ${(props) => props.time}s;
    animation-play-state: running;
    padding: 0.9px;
    border-radius: 30px;
    
    div {
        height: 16px;

        border-radius: 30px;
        background-color: #bf3604;
        transition: 0.1s linear;
        transition-property: width, background-color;
        width: 85%;
    };

    @keyframes progressAnimation {
        0% {
          width: 0%;
          background-color: ${darkOrangeColor};
        }
        12.5% {
            width: 12.5%;
            background-color: ${lightOrangeColor};
        }
        25% {
            width: 25%;
            background-color: ${darkOrangeColor};
        }
        50% {
            width: 50%;
            background-color: ${lightOrangeColor};
        }
        62.5% {
            width: 62.5%;
            background-color: ${darkOrangeColor};
        }
        75% {
            width: 75%;
            background-color: ${lightOrangeColor};
        }
        100% {
          width: 100%;
          background-color: ${darkOrangeColor};
        }
      }
`;


class ProgressBar extends React.Component {
  render() {
    const { time, animationPlaying } = this.props.time;
    return (
      <>
        <ProgressFill time={time}/>
      </>
    );
  }
}

ProgressBar.propTypes = {
    time: PropTypes.number,
  };

export default ProgressBar;
