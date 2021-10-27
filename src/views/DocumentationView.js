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
import ProgressBar from "../components/generic/ProgressBar";
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
              {
                prop: "onClick",
                description: `When the button is clicked, proceed to the next action depending on the 
                button's actual label (e.g., Start New, Pause, Start, etc.)`,
                type: `function`,
                defaultValue: `none`,
              },
              {
                prop: "onKeyDown",
                description: `Triggers the reset function if the action button's label is "Reset"`,
                type: `function`,
                defaultValue: `none`,
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
              {
                prop: "onClick",
                description: `When the button is clicked, proceed to the next action depending on the 
                button's actual label (e.g., Reset, Go Back, etc.)`,
                type: `function`,
                defaultValue: `none`,
              },
             
              
            ]}
          />
          <DocumentComponent
              title="Device"
              component={<Device/>}
              propDocs={[
                {
                  prop: "type",
                  description: "Decides if the device is a phone or tablet",
                  type: `string, oneOf(["phone", "tablet"])`,
                  defaultValue: "phone",
                },
  
            ]}
          />
          <DocumentComponent
              title="Input"
              component={<Input value="00"/>}
              propDocs={[
                {
                  prop: "value",
                  description: "Determines the autofilled input value",
                  type: `string || number`,
                  defaultValue: `""`,
                },
                {
                  prop: "label",
                  description: "Specifies the label above the input field",
                  type: `string, oneOf({"Hour", "Min", "Sec", "Intervals"})`,
                  defaultValue: `"Hour"`,
                },
                {
                  prop: "type",
                  description: "Specifies the value type of the input field",
                  type: `string, oneOf(["runHours", "runMinutes", "runSeconds", 
                  "rounds",
                  "restHours", "restMinutes", "restSeconds"])`,
                  defaultValue: `"runHours"`,
                },
                {
                  prop: "onChange",
                  description: `Once the input field changes, the event target value is registed; 
                  the parent then updates its own state values based on the input field type`,
                  type: `function`,
                  defaultValue: `none`,
                },
                

                
                
  
            ]}
          />

          <DocumentComponent
              title="Progress Bar"
              component={<ProgressBar playing={true} totalSeconds={45}/>}
              propDocs={[
                {
                  prop: "playing",
                  description: "Controls whether the animation is paused or running",
                  type: "boolean",
                  defaultValue: "false",
                },
                {
                  prop: "totalSeconds",
                  description: "Controls the animation play time",
                  type: "number",
                  defaultValue: "0",
                },
  
            ]}
          />
          <DocumentComponent
              title="Timer"
              component={<Timer/>}
              propDocs={[
                {
                  prop: "timerType",
                  description: "Specifies the type of timer to be rendered",
                  type: `string, oneOf[("Stopwatch", "Countdown", "XY", "Tabata")]`,
                  defaultValue: `"Stopwatch"`,
                },
            ]}
          />
         

          <DocumentComponent
              title="Timer Inputs"
              component={<TimerInputs type="Countdown" showInputs={true}/>}
              propDocs={[
                {
                  prop: "showInputs",
                  description: `Toggles the visibility of the timer inputs component`,
                  type: `boolean`,
                  defaultValue: "false",
                },
                {
                  prop: "timerType",
                  description: `Specifies the type of parent timer; 
                  influences the kind of input group that the component returns`,
                  type: `string, oneOf(["Stopwatch", "Countdown", "XY", "Tabata"])`,
                  defaultValue: "Stopwatch",
                },
  
            ]}
          />
         
          
        <DocumentComponent
            title="Timer Screen"
            component={<TimerScreen hours="00" minutes="00" seconds="00" type="Stopwatch" action="Run"/>}
            propDocs={[
              {
                prop: "action",
                description: `Specifies a helper action to the user like "Run" based on their current activity state.`,
                type: "string",
                defaultValue: "Start New",
              },
              {
                prop: "hours",
                description: `Displays the hours remaining or hours elapsed depending on the timer type.`,
                type: "string || number",
                defaultValue: `"00"`,
              },
              {
                prop: "minutes",
                description: `Displays the minutes remaining or minutes elapsed depending on the timer type.`,
                type: "string || number",
                defaultValue: `"00"`,
              },
              {
                prop: "seconds",
                description: `Displays the seconds remaining or seconds elapsed depending on the timer type.`,
                type: "string || number",
                defaultValue: `"00"`,
              },
              {
                prop: "rounds",
                description: `Displays the current round`,
                type: "number",
                defaultValue: `0`,
              },
              {
                prop: "progressPlaying",
                description: `Controls whether the progress bar on the screen is playing`,
                type: "boolean",
                defaultValue: `false`,
              },
              {
                prop: "totalSeconds",
                description: `Controls the animation time of the progress bar on the screen`,
                type: "number",
                defaultValue: `0`,
              },
              
              
            ]}
          />


          
        </div>
      </Container>
    );
  }
}

export default Documentation;
