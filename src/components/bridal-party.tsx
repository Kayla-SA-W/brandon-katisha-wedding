import React from 'react';
import styled from 'styled-components';
import Icon from '../images/temp-person.png';
import Couple from '../images/couple.jpeg';
import Alessa from '../images/bridal-party/alessa.jpg';
import Bellanda from '../images/bridal-party/bellanda.jpg';
import Bethany from '../images/bridal-party/bethany.jpg';
import Brielle from '../images/bridal-party/brielle.jpg';
import David from '../images/bridal-party/david.jpg';
import Daniela from '../images/bridal-party/daniela.jpg';
import Josh from '../images/bridal-party/josh.jpeg';
import Luis from '../images/bridal-party/luis.jpg';
import Harrison from '../images/bridal-party/harrison.jpeg';
import Kayla from '../images/bridal-party/kayla.jpg';
import "@fontsource/sacramento";
import '@fontsource/montserrat';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    .visible {
        display: flex;
        position: relative;
        bottom: 100px;
        padding: 10px 0;
        font-family: 'Montserrat';
        font-size: 15px;
        background-color: rgba(60,17,20,.9);
        color: white;
        justify-content: center;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-rows: 200px 200px 200px;
    grid-template-columns: 200px 200px 200px;
    @media screen and (max-width: 1024px){
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(2, 1fr);
    }
`

const Img = styled.img<{ honor?: boolean }>`
    height: 200px;
    width: 200px;
    cursor: pointer;
    background-color: ${(props) => (props.honor ? 'white' : '')}
`

const Title = styled.h4`
    font-family: 'sacramento';
    color: #3C1114;
    font-size: 40px;
`

const Banner = styled.div`
    display: none;
`

const BestpplContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Bestppl = styled.div`
    display: flex;
    gap: 20px;
    @media screen and (max-width: 1024px){
        gap: 0;
    }
`

const Honorees = styled.div`
    margin-top: 100px;
    display: flex;
    gap: 100px;
    @media screen and (max-width: 1024px){
        flex-direction: column;
        align-items: center;
        gap: 50px;
    
    }
`

const Label = styled.p`
    font-family: 'Montserrat';
    font-size: 30px;
    margin-bottom: 20px;
    color: #3C1114;
`

const CoupleImg = styled.img`
@media screen and (max-width: 1024px){
    display: none;
}
`

// Kareem Coleman; David Tang; Joshua Malnati; Luis Figeroa;
// Bansari Patel; Daniela Phillips; Bethany Duma; Brielle Bellegarde
export const BridalParty = () => {

    const OnClick = (element: HTMLImageElement) => {
        const name = (element.id).slice(0, -4);
        document.getElementById(name)?.classList.toggle('visible');
    }
    return (
        <Container id="BridalParty">
            <Title> Bridal Party </Title>
            <Grid>
                <div>
                    <Img src={David} id="david-img" onClick={(e) => { OnClick(e.target as HTMLImageElement) }} />
                    <Banner id="david"> David Tang </Banner>
                </div>
                <div>
                    <Img src={Icon} id="bansri-img" onClick={(e) => { OnClick(e.target as HTMLImageElement) }} style={{ backgroundColor: 'white' }} />
                    <Banner id="bansri"> Bansari Patel </Banner>
                </div>
                <div>
                    <Img src={Josh} id="joshua-img" onClick={(e) => { OnClick(e.target as HTMLImageElement) }} />
                    <Banner id="joshua"> Joshua Malnati </Banner>
                </div>
                <div>
                    <Img src={Bethany} id="bethany-img" onClick={(e) => { OnClick(e.target as HTMLImageElement) }} style={{ backgroundColor: 'white' }} />
                    <Banner id="bethany"> Bethany Duma </Banner>
                </div>
                <CoupleImg src={Couple} onClick={(e) => { OnClick(e.target as HTMLImageElement) }} style={{ height: '250px', width: '200px' }} />
                <div>
                    <Img src={Icon} id="kareem-img" onClick={(e) => { OnClick(e.target as HTMLImageElement) }} style={{ backgroundColor: 'white' }} />
                    <Banner id="kareem"> Kareem Coleman </Banner>
                </div>
                <div>
                    <Img src={Brielle} id="brielle-img" onClick={(e) => { OnClick(e.target as HTMLImageElement) }} />
                    <Banner id="brielle"> Brielle Coleman </Banner>
                </div>
                <div>
                    <Img src={Luis} id="luis-img" onClick={(e) => { OnClick(e.target as HTMLImageElement) }} style={{ backgroundColor: 'white' }} />
                    <Banner id="luis"> Luis Figeroa </Banner>
                </div>
                <div>
                    <Img src={Daniela} id="daniela-img" onClick={(e) => { OnClick(e.target as HTMLImageElement) }} />
                    <Banner id="daniela"> Daniela Phillips </Banner>
                </div>
            </Grid>
            <Honorees>
                <BestpplContainer>
                    <Label>Maids of Honor</Label>
                    <Bestppl>
                        <div>
                            <Img src={Alessa} honor id="alessa-img" onClick={(e) => { OnClick(e.target as HTMLImageElement) }} />
                            <Banner id="alessa"> Alessa Moore </Banner>
                        </div>
                        <div>
                            <Img src={Bellanda} honor id="bellanda-img" onClick={(e) => { OnClick(e.target as HTMLImageElement) }} />
                            <Banner id="bellanda"> Bellanda Bellegarde </Banner>
                        </div>
                    </Bestppl>
                </BestpplContainer>
                <BestpplContainer>
                    <Label>Best People</Label>
                    <Bestppl>
                        <div>
                            <Img src={Kayla} honor id="kayla-img" onClick={(e) => { OnClick(e.target as HTMLImageElement) }} />
                            <Banner id="kayla"> Kayla Williams </Banner>
                        </div>
                        <div>
                            <Img src={Harrison} honor id="harrison-img" onClick={(e) => { OnClick(e.target as HTMLImageElement) }} />
                            <Banner id="harrison"> Harrison Ogbewe </Banner>
                        </div>
                    </Bestppl>
                </BestpplContainer>
            </Honorees>
        </Container>
    )
}