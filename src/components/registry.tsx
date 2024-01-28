import styled from "styled-components"
import { DetailsContainer } from "./common"
import React from "react";
import GiftBox from '../images/giftbox.png';
import { Link } from "gatsby";

const RegistryContainer = styled(DetailsContainer)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

// change color of box
const Image = styled.img`
    width: 70px;
    height: 70px;
    margin-top: 40px;
`;

const Title = styled.h4`
    font-family: 'sacramento';
    color: #3C1114;
    font-size: 45px;
`

export const Registry = () => (
    <RegistryContainer id="Registry">
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <Image src={GiftBox} />
        <Title> Registry </Title>
        </div>
        <p>We are registered at <Link to='https://registry.theknot.com/katisha-bellegarde-brandon-phillips-july-2024-ma/57750809' target='_blank'>TheKnot.com</Link></p>

    </RegistryContainer>
)