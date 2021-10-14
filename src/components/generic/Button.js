import styled from "styled-components";

const Button = styled.button`
  height: ${(props) => props.height || "70px"};
  width: ${(props) => props.width || "70px"};
  border-radius: ${(props) => props.radius || "50%"};
  background-color: ${(props) => props.background || "#302F2F"};
  color: ${(props) => props.color || "#C1BEBE"};
  border: ${(props) => props.border || "none"};
  font-size: ${(props) => props.fontSize || "19px"};
  font-weight: ${(props) => props.fontWeight || "200"};
  outline: ${(props) => props.outline || "none"};
  outline-offset: ${(props) => props.outlineOffset || "none"};
  text-align: center;
  padding: 0;
  margin: 0 auto;
  font-family: Open Sans;
  disabled: ${(props) => props.disabled || "none"};

 
  
 
`;

export default Button;
