import Button from "./Button";
import PropTypes from "prop-types";
import styled from "styled-components";


const btns = {
    greenColor: "#142F1B",
    greenText: "#94D769",
    orangeColor: "#592C0C96",
    orangeText: "#E19F5A"
}


const ActionButton = styled(Button)`
    disabled: ${(props) => props.disabled};
    color: ${(props) => props.type === "Green" ? btns.greenText : btns.orangeText};
    background: ${(props) => props.type === "Green" ? btns.greenColor : btns.orangeColor};
    outline: ${(props) => props.type === "Green" ? `2px solid ${btns.greenColor}` : `2px solid ${btns.orangeColor}`};
    
`;


ActionButton.propTypes = {
    type: PropTypes.oneOf(["Green", "Orange"]), 
    disabled: PropTypes.bool.isRequired
}


ActionButton.defaultProps = {
    type: "Green",
    disabled: false,
}

export default ActionButton;
