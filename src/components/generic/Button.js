import styled from "styled-components";

const defaultColors = {
   greyColor: "#302F2F",
   greyText: "#C1BEBE",
   disabledText: "#A09D9D"
}


const Button = styled.button`
  disabled: ${(props) => props.disabled};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  outline: ${(props) => props.outline};
  outline-offset: ${(props) => props.outlineOffset};
  text-align: center;
  padding: 0;
  margin: 0 auto;
  font-family: Open Sans;

  :disabled {
    background: ${defaultColors.greyColor};
    color: ${defaultColors.disabledText};
    outline: 2px solid ${defaultColors.greyColor};
  }
    :hover {
      border: 1px solid #1B457929;
  }
  :active {
      transform: scale(1.05) translate(0px, 0px);
  }
  ::after {
      z-index: -1;
      transition: all .5s;
  }
  :hover::after {
      transform: scale(0.5) translate(-1px, 0px);
      
  }  
`;

Button.defaultProps = {
  height: "70px",
  width: "70px",
  radius: "50%",
  background: defaultColors.greyColor,
  color: defaultColors.greyText,
  border: "none",
  fontSize: "19px",
  fontWeight: 200,
  outline: defaultColors.greyColor,
  outlineOffset: "2px",
  disabled: false,
}

export default Button;
