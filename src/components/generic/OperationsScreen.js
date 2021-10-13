import React from "react";
import styled from "styled-components";
import OperationsCircle from "../../images/operations-circle.svg";
import Button from "./Button";

const Container = styled.div`
    border: 1px solid green;
    height: 65%;
    width: 100%;

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


`;

const Title = styled.h1`
    font-family: Roboto;
    font-size: 23px;
    color: white;
    font-weight: 400;
    letter-spacing: 1px;
    margin-top: 6px;
`;

const TopButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: flex-start;
    align-content: center;
    border: 1px solid pink;
    margin-bottom: -4rem;
    padding-left: 2rem;
    padding-right: 2rem;

`;


class OperationsScreen extends React.Component {

   
    render() {
        const tit = "Stopwatch";
        
        return (
            <>
            <Container>
            <Title>Stopwatch</Title>
            <TopButtonsContainer>
                <div>
                {tit === "Stop" ? 
               
                <Button border="1 px solid orange" background="#1A1A1A" width="60px" height="60px" color="#1C91F2" fontSize="45px" fontWeight={600}>
                      10
                </Button> : null
                }
                </div>
                
                <div>
                {/* Icon status button */}
                <Button border="1px dotted #1C91F2" background="#1A1A1A" width="60px" height="60px" color="#1C91F2">

                </Button>
                </div>
            </TopButtonsContainer>
            
            {/* Round timer wrapper and timer */}
            <RoundTimerWrapper>

            </RoundTimerWrapper>
            {this.props.children}
            </Container>
          
            
            </>
        );
    }
}

export default OperationsScreen;

