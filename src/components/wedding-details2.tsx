import React from 'react';
import '@fontsource/montserrat';
import styled from 'styled-components';
import { DetailsContainer, Title } from './common';

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
    width: inherit;
    @media screen and (max-width: 1024px){
        margin: 0 auto 50px auto;
    }
`


export const WeddingDetails = () => (

        <DetailsContainer id='Details'>
            <Box>
            <Title> The Wedding </Title>
            <Hr />
            <Text bottom>Avenir</Text>
            <Text top>1601 Main Street, Walpole, MA 02081</Text>
            <Text bottom>Thursday, July 25th, 2024</Text>
            <Text top>4:30 PM</Text>
            </Box>
        </DetailsContainer>
)