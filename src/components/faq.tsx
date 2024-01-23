import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { faq } from '../data/faq';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Montserrat', sans-serif;
  color: #3C1114;
}
`

const Container = styled.div`
align-items: center;
margin: 0 5% 30px;
display: flex;
justify-content: center;
flex-direction: column;
`

const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 70px;
@media screen and (max-width: 540px){
    grid-template-columns: 1fr;
    gap: 50px;
 }
`

const Heading = styled.p`
    font-size: 25px;
    @media screen and (max-width: 540px){
        font-size: 20px;
     }
`

const Paragraph = styled.p`
line-height: 30px;
@media screen and (max-width: 540px){
    font-size: 15px;
 }
`

const Hr = styled.hr`
    width: 100%;
    margin: 50px 0;
    border: 1px solid #3C1114;
`;

const Title = styled.h4`
    font-family: 'sacramento';
    color: #3C1114;
    font-size: 40px;
`

export const FAQ = () => {

    const questions = faq.map(({ question, answer }: { question: string, answer: string }) => {
        return (
            <div>
                <Heading>{question}</Heading>
                <Hr />
                <Paragraph>{answer}</Paragraph>
            </div>
        )
    });
    return (
        <Container id='FAQ'>
            <GlobalStyle />
            <Title>FAQs</Title>
            <Grid>
                {questions}
            </Grid>
        </Container>
    )
}