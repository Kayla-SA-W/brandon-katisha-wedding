import React, { useContext } from "react";
import { CanEnterContext } from "../context/can-enter-context";
import styled, { createGlobalStyle } from "styled-components";
import { navigate } from "gatsby";
import { WeddingDetails } from "./wedding-details2";
import CoupleImage from '../images/couple-image.jpeg';
import Couple from '../images/couple.jpeg';
import CoupleLaugh from '../images/couple-laughing.jpeg';
import CoupleLeft from '../images/couple-left.jpeg';
import CoupleStanding from '../images/couple-standing.jpeg';


const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
}
`

const Text = styled.p`
    font-family: 'Montserrat';
    font-size: 20px;
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

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: -10px 0 0 -10px;
    @media screen and (max-width: 1024px){
        flex-direction: column;
        margin: auto;
    }
`

const PhotoBox = styled.div<{ location?: string }>`
    width: 60%; 
    height: 100vh;
    background-image: ${(props) => {
        switch (props.location) {
            case 'Details':
                return `url(${CoupleImage})`;
            case 'Photos':
                return `url(${Couple})`;
            case 'BridalParty':
                return `url(${CoupleLaugh})`;
            case 'Accommodations':
                return `url(${CoupleLeft})`;
            case 'Registry':
                return `url(${CoupleStanding})`;
            case 'FAQ':
                return `url(${CoupleImage})`;
            default:
                return `url(${CoupleImage})`;
        }
    }};
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (max-width: 1024px){
        width: 100vw;
        background-size: contain;
        background-repeat: no-repeat;
        height: 55vh;
    }
`

const Content = styled.div`
    overflow: auto;
    width: 40%;
    @media screen and (max-width: 1024px){
        width: 100%;
    }
`

const Names = styled.div`
    font-family: 'Sacramento';
    color: white;
    margin-left: 30px;
    font-size: 100px;
    display:flex;
    align-items: flex-end;
    height: inherit;
    @media screen and (max-width: 1024px){
        font-size: 50px;
    }
`


const Wedding2 = () => {
    // get url param
    // set background image based on url param
    const location = window.location.href.split('#')[1];

    const { canEnter } = useContext(CanEnterContext);
    if (canEnter) {
        return (
            <Container>
                <PhotoBox location={location}>
                    <Names>Katisha & <br/> Brandon</Names>
                </PhotoBox>
                <Content>
                    <WeddingDetails />
                    
                </Content>
            </Container>
        )
    }
    return (
        <>
            <Text>We had trouble loading the website. Please Try again</Text>
            <Button onClick={() => navigate('/')}>Home</Button>
        </>
    )
};

export default Wedding2;