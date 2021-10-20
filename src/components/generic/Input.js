import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Row, Col} from "react-bootstrap";

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


const InputWrapper = styled.div`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
    z-index: 1;
   
   
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: normal;
    align-items: center;
    align-content: center;
    margin: 0.5rem 0 2rem 0;


   
`;



class Input extends React.Component {
    
    render() {
            const { type, value } = this.props;

        return (
            <>
            <Container>
                <InputWrapper>
                    <Row>
            
                    <label for={type}>{type}</label> 
                    </Row>
                    <Row>
                    <InputField 
                    onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');}}
                    value={value ? value : ""} id={`${type}`} maxLength="2" type={type} onChange={(e) => this.props.onChange(e.target)} 
                    />
                    </Row>
                    
                </InputWrapper>  
            </Container>
            </>
        );
    }
}

Input.propTypes = {
    type: PropTypes.oneOf(["Hour", "Min", "Sec", "Rounds"]),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
  };



export default Input;