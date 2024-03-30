import React from 'react'
import styled from 'styled-components';
import HomeComponent from './index.js';
const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px ;
  font-family: Montserrat;
`;

const Header = styled.div`
  background-color: White;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 70px;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
 

`;
const Expense = () => {
  return (
    <Container className="App">
      <Header>Expence Tracker</Header>
      <HomeComponent/>
    </Container>
  )
}

export default Expense