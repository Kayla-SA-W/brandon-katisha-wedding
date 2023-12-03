import React from 'react';
import styled from 'styled-components';
import { photoTimelineOne } from './timeline-order';
import "@fontsource/sacramento";

const LineContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    height: max-content;
    > img {
        height: 40px;
        display: block; 
        cursor: pointer; 
        z-index: 999;
        -webkit-transition-property: all;
        -webkit-transition-duration: 0.3s;
        -webkit-transition-timing-function: ease;
        :hover {
            transform: scale(6); 
            margin: auto 10%;
        }
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 300px;
    padding: 30px;
`

const Title = styled.h3`
    font-family: 'sacramento';
    color: white;
    font-size: 40px;
`

export const Timeline = () => {
    return (
        <Container id="Photos">
            <Title>Nine Years in the Making</Title>
            {/** time line */}
            { /** mini photos with year over them. hover/click enlargens */}
            <LineContainer>
                {photoTimelineOne.map((img) => img)}
            </LineContainer>
        </Container>
    )
}