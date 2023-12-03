import React from 'react';
import { HorizontalContainer } from './common';
import '@fontsource/montserrat';
import styled from 'styled-components';
import Ring from '../images/ring.png';

const Title = styled.h2`
    font-family: 'Montserrat';
    color: #3C1114;
    font-weight: 700;
    font-size: 30px;
`;

const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
`;

const TheRing = styled.img`
    height: 300px;
    @media screen and (max-width: 1024px){
        height: fit-content;
    }
`

const Text = styled.p<{top?: boolean; bottom?:boolean}>`
    font-family: 'Montserrat';
    font-size: 15px;
    color: #3C1114;
    margin-top: ${(props) => ( props.top ? 0 : 15)};
    margin-bottom: ${(props) => ( props.bottom ? 0 : 15)};
`

const Hr = styled.hr`
    border: 1px solid #EFC75E;
`

const Box = styled.div`
    width: 30%;
    @media screen and (max-width: 1024px){
        width: 90%;
        margin: 0 auto 50px auto;
    }
`


export const WeddingDetails = () => (
    <HorizontalContainer id='Details'>
        <DetailsContainer>
            <Box>
            <Title> The Wedding </Title>
            <Hr />
            <Text bottom>Avinir</Text>
            <Text top>1601 Main Street, Walpole, MA 02081</Text>
            <Text bottom>Thursday, July 25th, 2024</Text>
            <Text top>4:30 PM</Text>
            </Box>
            <TheRing src={Ring} />
        </DetailsContainer>
    </HorizontalContainer>
)