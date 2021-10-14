import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputField = styled.input`
z-index: 1; 

  height: ${(props) => props.height || "70px"};
  width: ${(props) => props.width || "70px"};
  background-color: ${(props) => props.background || "#302F2F"};
  color: ${(props) => props.color || "#C1BEBE"};
  border: ${(props) => props.border || "none"};
  font-size: ${(props) => props.fontSize || "70px"};
  font-weight: ${(props) => props.fontWeight || "200"};
  outline: ${(props) => props.outline || "none"};
  outline-offset: ${(props) => props.outlineOffset || "none"};
  text-align: center;
  padding: 0;
  margin: 0 auto;
  font-family: league-gothic;
  letter-spacing: 4px;
  margin: 0.4rem;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  
  
}
  
`;

const TimeInput = styled.input



const Label = styled.p`
    color: red;
`;

const InputRow = styled.div`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
    z-index: 1;
   
   
`;



class Input extends React.Component {

   
    render() {
            const { type, value } = this.props;

        return (
            <>
            <InputRow>
                <label for={type}>{type}</label>
                <InputField value={value} id={type} maxLength="2" type={type} onChange={(e) => this.props.onChange(e.target)} 
                />
            </InputRow>  
            </>
        );
    }
}

Input.propTypes = {
    type: PropTypes.oneOf(["Hour", "Min", "Sec"]),
  };



export default Input;