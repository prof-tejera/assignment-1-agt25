import React, { Component } from 'react';
import styled from 'styled-components';
import HeartRate from "../images/grey-heart-rate.svg";

import ActionsCircle from '../components/generic/ActionsCircle';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  align-content: flex-start;
  text-align: left;
  h4 {
    color: #545454;
    font-weight: 600;
    font-size: 25px;
    border-top: 1px dotted white;
    border-bottom: 1px dotted white;
  }
  
`;

const Header = styled.div`
  text-align: center;
  margin: auto;
  h1 {
    color: #4877BA;
    font-size: 55px;
  }
  h2 {
    margin-top: -4.5rem !important;
    color: #5D8551 !important;
  }
  img {
    position: relative;
    top: -3.2rem;
  }
`;

const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  align-content: flex-start;
  text-align: left;
  padding-bottom: 2rem;
  div {
    padding: 0.5rem;
    color: black;
    font-weight: 600;
    span {
      font-weight: 300;
      
    }
  }
`;



const OpenSansH1 = styled.h1`
  font-family: Open Sans; 
  font-size: 50px;

`;

const OpenSansH2 = styled.h2`
  font-family: Open Sans; 
  font-size: 30px;
  color: black !important;

`;

const LeagueGothicH1 = styled.h1`
  font-family: league-gothic; 
  font-size: 55px;
  font-weight: 400;

`;

const RobotoH1 = styled.h1`
  font-family: Roboto; 
  font-size: 50px;
  font-weight: 400;

`;


const RobotoH2 = styled.h2`
  font-family: Roboto; 
  font-size: 50px;
  font-weight: 400;
  color: black !important;

`;

const RobotoH3 = styled.h3`
  font-family: Roboto; 
  font-size: 23px;
  font-weight: 300;
  color: black !important;

`;

const SecondaryContainer = styled(Container)`
  padding: 1.5rem 0 1.5rem 0;
  div {
    padding: 1rem;
    color: black;
    font-weight: 600;
    span {
      font-weight: 300;
      
    }
  }

`;

const GreysContainer = styled(SecondaryContainer)`


`;



class DesignView extends Component {
  render() {
    return (
      <>
      <Header>
        <h1>UI  /  UX </h1>
        <img src={HeartRate} alt="Heart beat line"/>
        <h2>explained</h2>
      </Header>
      <Container>
        {/* Typeface display half */}
        <div>
        <h4> \ typeface</h4>
        <OpenSansH1>Open Sans</OpenSansH1>
        <LeagueGothicH1>League Gothic</LeagueGothicH1>
        <RobotoH1>Roboto</RobotoH1>
          
          <div>
            <LeagueGothicH1>heading 1</LeagueGothicH1>
            <OpenSansH2>heading 2</OpenSansH2>
            <RobotoH3>heading 3</RobotoH3>
            <b>Paragraph</b>
            <p>Donec rutrum congue leo eget malesuada. <br></br> 
              Vestibulum ac diam sit amet quam vehicula.</p>

              <p>
              Lorem Ipsum is simply dummy text of the printing 
              <br></br> 
              and typesetting industry. Lorem Ipsum has been the 
              <br></br>industry's standard dummy text ever since the 1500s, 
              <br></br>
              when an unknown printer took a galley of type and 
              <br></br>scrambled it to make a type specimen book. 
              </p>
          </div>
        </div>
       
       {/* Color display half */}
       <div>
        
       <h4> \ color</h4>

        <RobotoH3>Brand</RobotoH3>
        <BrandContainer>
        <div>
          <ActionsCircle background="#588DE4"/>  
          <div>brand
            <br></br>
            <span>#588DE4</span>
          </div>
          </div>
         </BrandContainer>

          
         <RobotoH3>Secondary</RobotoH3>
         <SecondaryContainer>
         <ActionsCircle background="#94D769" size="45px"/>  
          <div>accent1
            <br></br>
            <span>#94D769</span>
          </div>
          <ActionsCircle background="#142F1B" size="45px"/>  
          <div>neutral1
            <br></br>
            <span>#142F1B</span>
          </div>

         </SecondaryContainer>

         <SecondaryContainer>
         <ActionsCircle background="#E19F5A" size="45px"/>  
          <div>accent2
            <br></br>
            <span>#E19F5A</span>
          </div>
          <ActionsCircle background="#3B2615" size="45px"/>  
          <div>neutral2
            <br></br>
            <span>#3B2615</span>
          </div>

         </SecondaryContainer>

         <RobotoH3>Greys</RobotoH3>

         <GreysContainer>
          <ActionsCircle background="FFFFFF" border="1px solid grey" size="45px"/>  
            <div>light1
              <br></br>
              <span>#FFFFFF</span>
            </div>
            <ActionsCircle background="#1A1A1A" size="45px"/>  
            <div>dark1
              <br></br>
              <span>#1A1A1A</span>
            </div>
         </GreysContainer>

         <GreysContainer>
          <ActionsCircle background="#C1BEBE" size="45px"/>  
            <div>light2
              <br></br>
              <span>#C1BEBE</span>
            </div>
            <ActionsCircle background="#303030" size="45px"/>  
            <div>dark2
              <br></br>
              <span>#303030</span>
            </div>
          </GreysContainer>

          <GreysContainer>
          <ActionsCircle background="#A09D9D" size="45px"/>  
            <div>light3
              <br></br>
              <span>#A09D9D</span>
            </div>
            <ActionsCircle background="#302F2F" size="45px"/>  
            <div>dark3
              <br></br>
              <span>#302F2F</span>
            </div>
          </GreysContainer>
         
       </div>

      </Container>
       
      </>
    )
  }
}

export default DesignView; 
