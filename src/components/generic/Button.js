import styled from "styled-components";

const Button = styled.button`
  height: ${(props) => props.height || "70px"};
  width: ${(props) => props.width || "70px"};
  border-radius: ${(props) => props.radius || "50%"};
  background-color: ${(props) => props.background || "#302F2F"};
  color: ${(props) => props.color || "white"};
  border: ${(props) => props.border || "none"};
  font-size: ${(props) => props.fontSize || "none"};
  font-weight: ${(props) => props.fontWeight || "200"};
  text-align: center;
  padding: 0;
`;

export default Button;
