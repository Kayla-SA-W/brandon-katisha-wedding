import React, { useContext, useEffect } from 'react';
import { HeadFC, navigate } from "gatsby"
import { useState } from "react"
import { getPasswords } from '../passwords/getPasswords';
import styled, { createGlobalStyle } from 'styled-components';
import Couple from '../images/couple-standing.jpeg';
import { CanEnterContext } from '../context/can-enter-context';

const GlobalStyle = createGlobalStyle`
body {
    background-image: url(${Couple});
    background-size: cover;
}
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
    font-family: 'Montserrat';
    color: #3C1114;
    font-size: 50px;
    justify-content: center;
    @media screen and (max-width: 1024px){
        font-size: 30px;
    }
`;

const Subheadline = styled.h2`
  font-family: 'Sacramento';
    color: #3C1114;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 0;
    @media screen and (max-width: 1024px){
      font-size: 20px;
  }
`;

const Input = styled.input`
  font-family: 'Montserrat';
  width: 200px;
  margin-bottom: 10px;
`

const Button = styled.button`
  font-family: 'Montserrat';
  width: 100px;
  background-color: #3C1114;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  color: white;
  padding: 5px;
`

const IndexPage = () => {
  const [password, setPassword] = useState('');
  const { canEnter, setCanEnter } = useContext(CanEnterContext);

  useEffect(() => { 
    if (typeof window !== 'undefined') {
      setCanEnter(getPasswords().find((codeword) => codeword === password) ? true : false);
    }
  }, [canEnter, password]);

  const onClick = () => {
    if(canEnter) {
      navigate('/wedding');
    }
  }

  return (
    <Main>
      <GlobalStyle />
      {/* <Title> Brandon & Katisha's Wedding Website </Title> */}
      <Subheadline>Please enter the password</Subheadline>
      <div>
      <Input type='textbox' onChange={(e) => {
        setPassword(e.target.value)
      }}></Input>
      <Button onClick={onClick}>Enter</Button>
      </div>
    </Main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
