import React from 'react';
import styled from 'styled-components';
import "@fontsource/sacramento";
import '@fontsource/montserrat';
import { StaticImage } from 'gatsby-plugin-image';

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
    grid-template-rows: 200px 200px;
    gap: 10px;
    grid-template-columns: 200px 200px;
    @media screen and (max-width: 1024px){
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
        gap: 0;
    }
`

const Title = styled.h4`
    font-family: 'sacramento';
    color: #3C1114;
    font-size: 40px;
`

const Banner = styled.div`
bottom: 50px;
position: relative;
background-color: rgba( 225,225,225, 0.5 );
display: flex;
align-items: center;
justify-content: center;
}
`

const BestpplContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Bestppl = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
    @media screen and (max-width: 1024px){
        gap: 0;
    }
`

const WeddingParty = styled.div`
    display: flex;
    gap: 100px;
    @media screen and (max-width: 1024px){
      flex-direction: column;
    }
`

const Label = styled.p`
    font-family: 'Montserrat';
    font-size: 30px;
    margin-bottom: 20px;
    color: #3C1114;
`

// Kareem Coleman; David Tang; Joshua Malnati; Luis Figeroa;
// Bansari Patel; Daniela Phillips; Bethany Duma; Brielle Bellegarde
export const BridalParty = () => {
    const imageStyle = {
        height: '200px',
        maxWidth: '200px'
    };
    return (
        <Container id="BridalParty">
            <Title> Wedding Party </Title>
            <WeddingParty>
                <div>
                    <BestpplContainer>
                        <Label>Best People</Label>
                        <Bestppl>
                            <div>
                                <StaticImage src='../images/bridal-party/kayla.jpg' alt='kayla' style={imageStyle} />
                                <Banner id="kayla"> Kayla Williams </Banner>
                            </div>
                            <div>
                                <StaticImage src='../images/bridal-party/harrison.jpeg' alt='harrison' style={imageStyle} />
                                <Banner id="harrison"> Harrison Ogbewe </Banner>
                            </div>
                        </Bestppl>
                    </BestpplContainer>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Label>Groomsmen</Label>
                        <Grid>
                            <div>
                                <StaticImage src='../images/bridal-party/josh.jpeg' alt="joshua" style={imageStyle} />
                                <Banner id="joshua"> Joshua Malnati </Banner>
                            </div>

                            <div>
                                <StaticImage src='../images/bridal-party/kareem.jpeg' alt="kareem" style={imageStyle} />
                                <Banner id="kareem"> Kareem Coleman </Banner>
                            </div>

                            <div>
                                <StaticImage src='../images/bridal-party/luis.jpg' alt="luis" style={imageStyle} />
                                <Banner id="luis"> Luis Figeroa </Banner>
                            </div>
                            <div>
                                <StaticImage src='../images/bridal-party/david.jpg' alt="david" style={imageStyle} />
                                <Banner id="david"> David Tang </Banner>
                            </div>

                        </Grid>
                    </div>
                </div>
                <div>
                    <BestpplContainer>
                        <Label>Maids of Honor</Label>
                        <Bestppl>
                            <div>
                                <StaticImage src='../images/bridal-party/alessa.jpg' alt="alessa" style={imageStyle} />
                                <Banner id="alessa"> Alessa Moore </Banner>
                            </div>
                            <div>
                                <StaticImage src='../images/bridal-party/bellanda.jpg' alt="bellanda" style={imageStyle} />
                                <Banner id="bellanda"> Bellanda Bellegarde </Banner>
                            </div>
                        </Bestppl>
                    </BestpplContainer>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Label>Bridesmaids</Label>
                        <Grid>
                            <div>
                                <StaticImage src='../images/bridal-party/bansari.jpeg' alt="bansari" style={imageStyle} />
                                <Banner id="bansari"> Bansari Patel </Banner>
                            </div>
                            <div>
                                <StaticImage src='../images/bridal-party/daniela.jpg' alt='daniela' style={imageStyle} />
                                <Banner id="daniela"> Daniela Phillips </Banner>
                            </div>
                            <div>
                                <StaticImage src='../images/bridal-party/bethany.jpg' alt='bethany' style={imageStyle} />
                                <Banner id="bethany"> Bethany Duma </Banner>
                            </div>
                            <div>
                                <StaticImage src='../images/bridal-party/brielle.jpg' alt='brielle' style={imageStyle} />
                                <Banner id="brielle"> Brielle Coleman </Banner>
                            </div>
                        </Grid>
                    </div>
                </div>
            </WeddingParty>
        </Container>
    )
}