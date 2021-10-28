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


import HeartRate from "../images/progress-rate.svg";
import RunningIcon from "../images/running-icon.svg";
import FlowChart from "../images/flowchart.svg";



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgb(22,33,56);
  background: linear-gradient(180deg, #14161D 2%, rgba(18,18,18,1) 100%);
  color: white;
  overflow-x: hidden;

  
`;

const Title = styled.div`
  font-size: 2.2rem;
  padding: 3rem;
  margin-bottom: -2.2rem;
  width: 100vw;
  font-family: Open Sans;
  img {
    padding: 0.5rem;
    margin-bottom: 0.7rem;
    margin-top: -0.2rem;
  }
  h2 {
    margin-top: -1rem;
    font-size: 2rem !important;
    color: #B5B1B2 !important;
  }
  
`;

const ArchitectureContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 1.25rem;
  border-top: 1px dotted #2B2F3BCF;
  img {
    padding: 2rem;
    margin-bottom: 2rem;
  }
  div {
    h2 {
      font-size: 1.8rem;
      letter-spacing: 0.1rem;
      margin-top: -2rem;
      background: #14161C;
      padding: 1rem;
      color: #A6D3CA;
    }
  }
  article {
    width: 50vw;
    padding: 3rem;
    text-align: center;
    font-size: 1.1rem;
    color: #D9D9D9;
    p {
      line-height: 27px;
    }

  }
  
`;


class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          
          <Title>Documentation
            <div>
              
              <img src={HeartRate} width="225px" alt="Heartbeat Line"/>
           
            </div>
          </Title>
        
          
          <ArchitectureContainer>  
            <div>
            <h2>Component Architecture </h2>
          
          <img src={FlowChart} width="450px" alt="Heartbeat Line"/>
            </div>
          </ArchitectureContainer>

          <ArchitectureContainer>
          <article>
              <p>
              For the sake of "DRY", each timer — Stopwatch, Countdown, XY, Tabata — is composed of a generic timer component, a device, 
              a timer screen, and timer inputs. 
              </p>
              <p>
              Sure, the generic timer component is larger than its counterparts. 
              However, all of the timers designed share common functionality — 
              the common layout of various smaller components, 
              click functions, input registration, and more or less the 
              same state variables. I figured that repeating the same process 
              across all of the timers would be redundant and a bad design. 
              To make the maintenance of the larger components easier, 
              I've included plentiful comments as a guide. 
              </p> 
            </article>
          </ArchitectureContainer>
          
        

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
