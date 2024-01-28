import React, { useContext } from "react";
import { BranKatish, GeometricShape, HorizontalContainer } from "../components/common";
import { Intro } from "../components/intro";
import { Nav } from "../components/nav";
import { WeddingDetails } from "../components/wedding-details";
import { Timeline } from "../components/timeline/timeline";
import { BridalParty } from "../components/bridal-party";
import { CanEnterContext } from "../context/can-enter-context";
import styled, { createGlobalStyle } from "styled-components";
import { navigate } from "gatsby";
import { FAQ } from "../components/faq";
import { Accommodations } from "../components/Accommodations";
import { Registry } from "../components/registry";


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

const Wedding = () => {
    const { canEnter } = useContext(CanEnterContext);
    if (canEnter) {
        return (
            <>
                <GlobalStyle />
                <BranKatish />
                <Nav />
                <Intro />
                <WeddingDetails />
                <GeometricShape>
                    <Timeline />
                </GeometricShape>
                <HorizontalContainer>
                    <BridalParty />
                </HorizontalContainer>
                <HorizontalContainer>
                    <Accommodations />
                </HorizontalContainer>
                
                <HorizontalContainer>
                    <Registry />
                </HorizontalContainer>
                <HorizontalContainer>
                    <FAQ />
                </HorizontalContainer>
            </>
        )
    }
    return (
        <>
            <Text>We had trouble loading the website. Please Try again</Text>
            <Button onClick={() => navigate('/')}>Home</Button>
        </>
    )
};

export default Wedding;