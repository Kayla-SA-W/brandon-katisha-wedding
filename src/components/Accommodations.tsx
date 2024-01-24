import React from 'react';
import { DetailsContainer } from './common';
import styled, { createGlobalStyle } from 'styled-components';
import Hotel from '../images/hotel.png';
import { Link } from 'gatsby';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Montserrat', sans-serif;
  color: #3C1114;
}
`;

const Title = styled.h4`
    font-family: 'sacramento';
    color: #3C1114;
    font-size: 45px;
`

const Paragraph = styled.p`
line-height: 30px;
margin-top: 0;
@media screen and (max-width: 540px){
    font-size: 15px;
 }
`

const Heading = styled.p`
    font-family: 'Montserrat';
    color: #3C1114;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 0;
`;

const HotelBlock = styled.div`
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1024px){
        margin: 40px 10%;
    }
`;

const HotelImage = styled.img`
    width: 70px;
    margin: 10px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Hotels = styled(DetailsContainer)`
    flex-direction: column;
`

export const Accommodations = () => (
    <Hotels id="Accommodations">
        <GlobalStyle />
        <Container>
            <Title> Accommodations </Title>
            {/* Hotel 1 */}
            <HotelBlock>
                <HotelImage src={Hotel} />
                <Heading>
                    Courtyard by Marriott
                </Heading>
                <Paragraph>
                    300 River Ridge Drive
                    Norwood, MA 02062
                </Paragraph>
                <Paragraph >
                    6.2 miles away from the venue
                </Paragraph>
                <Link to='https://www.marriott.com/event-reservations/reservation-link.mi?id=1704856395514&key=GRP&app=resvlink' target="_blank"> Click here to book a room under our hotel block</Link>
                <br />
                <Paragraph>Price: $220 - $240/night</Paragraph>
            </HotelBlock>

            {/* Hotel 2 */}
            <HotelBlock>
                <HotelImage src={Hotel} />
                <Heading>
                    EnVision Hotel & Conference Center Mansfield-Foxboro
                </Heading>
                <Paragraph>
                    31 Hampshire Street
                    Mansfield, MA 02048
                </Paragraph>
                <Paragraph >
                    9.5 miles away from the venue
                </Paragraph>
                <Link to='https://secure.guestcentric.net/api/bg/book.php?nrNights=1&startDay=2024-07-24&preselect=promo294&apikey=7d509f9196c9802e1b08ee9245092c5e&pc=BellegardeWedding' target="_blank"> Click here to book a room under our hotel block</Link>
                <br />
                <Paragraph>Price: $249/night </Paragraph>
            </HotelBlock>

            {/* Hotel 3 */}
            <HotelBlock>
                <HotelImage src={Hotel} />
                <Heading>
                    Fairfield Inn & Suites by Marriott Boston Walpole
                </Heading>
                <Paragraph>
                    630 Providence Hwy
                    Walpole, MA 02081
                </Paragraph>
                <Paragraph style={{ fontWeight: 500 }}>
                    3.7 miles away from the venue
                </Paragraph>
                <Link to="https://www.marriott.com/events/start.mi?id=1706033688368&key=GRP">Click here to book a room under our hotel block</Link>
                <br />
                <Paragraph>Price: $239/night </Paragraph>
            </HotelBlock>

            {/* Hotel 4 */}
            <HotelBlock>
                <HotelImage src={Hotel} />
                <Heading>
                    Home2 Suites by Hilton Walpole Foxboro
                </Heading>
                <Paragraph>
                    2375 Boston Providence Hwy
                    Walpole, MA 02081
                </Paragraph>
                <Paragraph >
                    4.4 miles away from the venue
                </Paragraph>
                <Paragraph>
                    We do NOT have a hotel block here.
                </Paragraph>
                <Link to='https://www.hilton.com/en/hotels/boswkht-home2-suites-walpole-foxboro/?SEO_id=GMB-AMER-HT-BOSWKHT&y_source=1_OTQwMzQzOS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D' target="_blank"> Click here to book a room</Link>
            </HotelBlock>

            {/* Hotel 5 */}
            <HotelBlock>
                <HotelImage src={Hotel} />
                <Heading>
                    Hilton Garden Inn Foxborough Patriot Place
                </Heading>
                <Paragraph>
                    27 Patriot Place
                    Foxborough, MA 02035
                </Paragraph>
                <Paragraph >
                    4.5 miles away from the venue
                </Paragraph>
                <Paragraph>
                    We do NOT have a hotel block here.
                </Paragraph>
                <Link to='https://www.hilton.com/en/hotels/bosppgi-hilton-garden-inn-foxborough-patriot-place/?SEO_id=GMB-AMER-GI-BOSPPGI&y_source=1_NDQ2NjA1NC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D' target="_blank"> Click here to book a room</Link>
            </HotelBlock>
        </Container>
    </Hotels>
); 