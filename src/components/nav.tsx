import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    width: 100vw;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 30px;
    justify-content: center;
    padding: 25px 0;
   @media screen and (max-width: 1024px){
        width: 100%;
        gap: 10px; 
        
    }
`;

const Button = styled(Link)`
    font-family: 'Montserrat';
    font-size: 15px;
    color: #3C1114;
    text-decoration: none;
    @media screen and (max-width: 1024px){
        font-size: 12px;
    }
`
const HidingButton = styled(Button)`
@media screen and (max-width: 1024px){
      display: none;  
}
`

const HR = styled.hr`
    border: 1px solid #3C1114;
    width: 15%;
    @media screen and (max-width: 1024px){
        display: none;  
    }
`

export const Nav = () => (
    <>
        <Container>
            <HR />
            <Button to='#Details'>Wedding Details</Button>
            <HidingButton to='#Photos'>Photos</HidingButton>
            <HidingButton to='#BridalParty'>Bridal Party</HidingButton>
            <Button to='#Accommodations'>Accommodations</Button>
            <Button to='#Registry'>Registry</Button>
            <Button to='#FAQ'>FAQ</Button>
            <HR />
        </Container>
    </>

)