import styled from "styled-components";
import geo1 from '../images/geometric-background1.png'
import BK from '../images/couple-image.jpeg';

export const HorizontalContainer = styled.div`
    background-color: rgba(255,255,255, 0.7);
    width: 100vw;
    padding: 50px 0;
    height: fit-content;
`;

export const Spacer = styled.div`
    height: 200px;
`;

export const GeometricShape = styled.div`
    background-image: url(${geo1});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: max-content;
    padding: 50px 0;
    @media screen and (max-width: 1024px){
     display: none;   
    }
`;


export const BranKatish = styled.div`
    background-image: url(${BK});
    background-size: contain;
    background-repeat: no-repeat;
    width: 100vw;
    height: max-content;
    margin: -10px;
`

export const VerticalContainer = styled.div`
    height: fit-content;
    width: 50vw;
    background-color: white;
    padding: 50px 0;
`