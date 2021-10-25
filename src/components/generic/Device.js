import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BottomNav from "./BottomNav"

const deviceDimensions = {
    phone: {
        width: 320,
        height: 620,
    }, 
    tablet: {
        width: 420,
        height: 640,
    }
};


const ScreenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #458FEB;
`;

const Screen = styled.div`
   position: relative;
   background: #1A1A1A;
   width: ${(props) => props.width}px;
   height: ${(props) => props.height}px;
   border: 16px ridge #09090A;
   border-radius: 40px;
   -webkit-box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.33); 
   box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.33); 
`;

const StatusBar = styled.div`
    width: ${(props) => props.width}px;
    height: 45px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    background-image: linear-gradient(to bottom, #161616, #171717, 
                                      #181818, #191919, #1a1a1a);  
                                
`;

const Notch = styled.div`
    position: relative;
    height: 30px;
    width: 185px;
    background: black;
    margin: 0 auto;
    border-bottom-left-radius: 29px;
    border-bottom-right-radius: 29px;
    border: 1px solid #1f1f1f;
`;

const Speaker = styled.div`
    position: relative;
    top: 9px;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 6px;
    width: 45px;
    background-color: #333333;
    border-radius: 8px;
    box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.2);
`;

const Camera = styled.div`
    position: relative;
    left: 75%;
    top: 3px;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #333333;
    border-radius: 12px;
    box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.2);
    border: 1px inset #25374E;
`;

const Nav = styled.div`
    background: #323131;
    position: absolute;
    bottom: 0;
    height: 65px;
    width: 100%;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
`;

const BottomNavLinks= styled(BottomNav)`
    position: relative;
    top: -100px;

`;


class Device extends React.Component {
    render() {

        const type = deviceDimensions[this.props.type]; 

        return (
            <>
            <ScreenWrapper>
                <Screen width={type.width} height={type.height}>
                   <StatusBar>
                       <Notch>
                           <Speaker/>
                           <Camera/>
                       </Notch>
                   </StatusBar>
                   {this.props.children}
                   <Nav>
                   <BottomNavLinks>
                    </BottomNavLinks>
                   </Nav>
                </Screen>
            </ScreenWrapper>

            
            

            </>
        );
    }
}

Device.propTypes = {
    type: PropTypes.oneOf(["phone", "tablet"]),
}

Device.defaultProps = {
    type: "phone"
}


export default Device;
