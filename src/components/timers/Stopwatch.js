import React from "react";
import MobileScreen from "../generic/MobileScreen";
import Button from "../generic/Button";
import OperationsScreen from "../generic/OperationsScreen";

class Stopwatch extends React.Component {
  render() {
    return (
      <div>
      <MobileScreen title="Stopwatch">
        <OperationsScreen></OperationsScreen>
      

      </MobileScreen>
      
      </div>
     
    )
  }
}

export default Stopwatch;
