import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

// Generic components 
import Loading from "../components/generic/Loading";
import ActionButton from "../components/generic/ActionButton";
import ActionsCircle from "../components/generic/ActionsCircle";
import Button from "../components/generic/Button";
import Device from "../components/generic/Device";
import Input from "../components/generic/Input";
import ProgressBar from "progress";
import Timer from "../components/generic/Timer";
import TimerInputs from "../components/generic/TimerInputs";
import TimerScreen from "../components/generic/TimerScreen";


import HeartRate from "../images/grey-heart-rate.svg";
import RunningIcon from "../images/running-icon.svg";


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
            title="Action Button"
            component={<ActionButton type="Green">Start</ActionButton>}
            propDocs={[
              {
                prop: "disabled",
                description: "Enables / disables the action button",
                type: "boolean",
                defaultValue: "false",
              },
              {
                prop: "type",
                description: "Renders a green start button or an orange pause button",
                type: "string, oneOf(['Green', 'Orange'])",
                defaultValue: `"Green"`,
              },
            ]}
          />

          <DocumentComponent
              title="Actions Circle"
              component={<ActionsCircle border="1px dotted #648BDD" size="80px">
                  <img src={RunningIcon} alt="Running stick figure"/>
              </ActionsCircle>
              }
              propDocs={[
                {
                  prop: "border",
                  description: "Adds a border to the circular div",
                  type: "string",
                  defaultValue: `"none"`,
                },
                {
                  prop: "background",
                  description: "Changes the background color of the circle",
                  type: "string",
                  defaultValue: `"#1a1a1a"`,
                },
                {
                  prop: "color",
                  description: "Changes the text or icon color",
                  type: "string",
                  defaultValue: `"#458FEB"`,
                },
                {
                  prop: "fontSize",
                  description: "Changes the font size",
                  type: "string",
                  defaultValue: `"50px"`,
                },
                {
                  prop: "fontWeight",
                  description: "Changes the font weight",
                  type: "number",
                  defaultValue: "600",
                },
                {
                  prop: "size",
                  description: "Changes the height and width of the circle",
                  type: "string",
                  defaultValue: `"70px"`,
                },

            ]}
          />
          <DocumentComponent
            title="Button"
            component={<Button outline="2px solid #302F2F">Reset</Button>}
            propDocs={[
              {
                prop: "border",
                description: "Adds a border to the button",
                type: "string",
                defaultValue: `"none"`,
              },
              {
                prop: "background",
                description: "Changes the background color of the button",
                type: "string",
                defaultValue: `"#302F2F"`,
              },
              {
                prop: "color",
                description: "Changes the text color",
                type: "string",
                defaultValue: `"#C1BEBE"`,
              },
              {
                prop: "disabled",
                description: "Enabled / disabled the button",
                type: "boolean",
                defaultValue: "false",
              },
              {
                prop: "fontSize",
                description: "Changes the font size",
                type: "string",
                defaultValue: `"19px"`,
              },
              {
                prop: "fontWeight",
                description: "Changes the font weight",
                type: "number",
                defaultValue: "200",
              },
              {
                prop: "outline",
                description: "Defines an outline color for the button",
                type: "string",
                defaultValue: `"#302F2F"`,
              },
              {
                prop: "outlineOffset",
                description: "Defines the offset value for the outline of the button",
                type: "string",
                defaultValue: `"2px"`,
              },
              {
                prop: "size",
                description: "Defines the height and width of the button",
                type: "string",
                defaultValue: `"70px"`,
              },
             
              
            ]}
          />
          <DocumentComponent
              title="Device"
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
              title="Input"
              component={<Input/>}
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
              title="Progress Bar"
              component={<ProgressBar playing={true}/>}
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
              title="Timer Inputs"
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


          
        </div>
      </Container>
    );
  }
}

export default Documentation;
