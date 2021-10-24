import styled from "styled-components";


const ActionsCircle = styled.div`
    border-radius: 50%; 
    border: ${(props) => props.border};
    height: ${(props) => props.height};
    width:  ${(props) => props.width};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    padding: 0;
    text-align: center;
    display: table-cell;
    vertical-align:middle;
    
    img {
      display: block;
      margin: 0 auto;
    }

`;

ActionsCircle.defaultProps = {
  border: "none",
  height: "70px",
  width: "70px",
  fontSize: "55px",
  fontWeight: 600,
  background: "#1A1A1A",
  color: "#458FEB",
}

export default ActionsCircle;
