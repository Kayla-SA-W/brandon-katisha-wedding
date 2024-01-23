import styled from "styled-components";
import geo1 from '../images/geometric-background1.png'
import BK from '../images/couple-left.jpeg';

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
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    width: 100vw;
    height: 107vh;
    z-index: -1;
`

export const VerticalContainer = styled.div`
    height: fit-content;
    width: 50vw;
    background-color: white;
    padding: 50px 0;
`

export const Title = styled.h2`
    font-family: 'Montserrat';
    color: #3C1114;
    font-weight: 700;
    font-size: 30px;
`;

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
`;