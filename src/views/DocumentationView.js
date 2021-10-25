import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";
import Button from "../components/generic/Button";

import Device from "../components/generic/Device";
import TimerScreen from "../components/generic/TimerScreen";
import TimerInputs from "../components/generic/TimerInputs";

import HeartRate from "../images/grey-heart-rate.svg";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgb(22,33,56);
  background: linear-gradient(180deg, #14161D 2%, rgba(18,18,18,1) 100%);
  color: white;
  overflow: hidden;
  
`;

const Title = styled.div`
  font-size: 2rem;
  padding: 2.5rem;
  width: 100vw;
`;



class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          
          <Title>Documentation</Title>
          <img src={HeartRate} alt="hey"/>
          <DocumentComponent
            title="Loading spinner "
            component={<Loading />}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
            ]}
          />

        <DocumentComponent
            title="Button "
            component={<Button />}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
            ]}
          />

          <DocumentComponent
            title="Device Screen "
            component={<Device/>}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
              
              
            ]}
          />

          
        <DocumentComponent
            title="Timer Screen"
            component={<TimerScreen type="Stopwatch" action="Run"/>}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
              
              
            ]}
          />

          <DocumentComponent
            title="Timer Screen"
            component={<TimerInputs type="Countdown" showInputs={true}/>}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
              
              
            ]}
          />
          
        </div>
      </Container>
    );
  }
}

export default Documentation;
