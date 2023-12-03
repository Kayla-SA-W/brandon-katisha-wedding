import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
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
        gap: 15px; 
    }
`;

const Button = styled(Link)`
    font-family: 'Montserrat';
    font-size: 15px;
    color: #3C1114;
    text-decoration: none;
`
const Photos = styled(Button)`
@media screen and (max-width: 1024px){
      display: none;  
}
`

const HR = styled.hr`
    border: 1px solid #3C1114;
    width: 25%;
    @media screen and (max-width: 1024px){
        display: none;  
    }
`

const HrMobile = styled.hr`
    border: 1px solid #3C1114;
    width: 90%;
    @media screen and (min-width: 1024px){
        display: none;  
    }
`

export const Nav = () => (
    <>
        <HrMobile />
        <Container>
            <HR />
            <Button to='#Details'>Wedding Details</Button>
            <Photos to='#Photos'>Photos</Photos>
            <Button to='#BridalParty'>Bridal Party</Button>
            <Button to='#Registry'>Registry</Button>
            <Button to='#RSVP'>RSVP</Button>
            <HR />
        </Container>
        <HrMobile />
    </>

)