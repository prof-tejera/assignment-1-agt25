import PropTypes from "prop-types";
import styled from "styled-components";


const ActionsCircle = styled.div`
    border-radius: 50%; 
    border: ${(props) => props.border};
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    height: ${(props) => props.size};
    width:  ${(props) => props.size};
    padding: 0;
    text-align: center;
    display: flex;
    vertical-align:middle;
    
    img {
      display: block;
      margin: 0 auto;
      position: relative;
      left: -2px;
      width: 45px;
    }
`;

ActionsCircle.PropTypes = {
  border: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number, 
  size: PropTypes.string
  
}

ActionsCircle.defaultProps = {
  border: "none",
  background: "#1A1A1A",
  color: "#458FEB",
  fontSize: "50px",
  fontWeight: 600,
  size: "70px",
}

export default ActionsCircle;
