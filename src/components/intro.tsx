import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import "@fontsource/sacramento";
import '@fontsource/montserrat/100.css';
import JSConfetti from 'js-confetti';

const Names = styled.div`
    font-family: 'Sacramento';
    color: white;
    font-size: 100px;
    display: flex;
    place-items: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: max-content;
    padding: 100px 0;
    @media screen and (max-width: 1024px){
        font-size: 50px;
    }
`;

const Celebrate = styled.div`
    font-family: 'Montserrat';
    font-size: 20px;
    color: rgba(255,255,255, 0.6);
`

const NumberBox = styled.div`
    border: 1px solid white;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;
    cursor: pointer;
    @media screen and (max-width: 1024px){
        width: 80%;
        height: 50%;
        padding: 10px;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 30px;
    @media screen and (max-width: 1024px){
        gap: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`

const Number = styled.p`
    font-size: 40px;
    font-family: 'Montserrat';
    @media screen and (max-width: 1024px){
        font-size: 20px;
    }
`

export const Intro = () => {
    const weddingDate = new Date("Jul 25, 2024").getTime();

    const [countDown, setCountDown] = useState(
        weddingDate - new Date().getTime()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(weddingDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [weddingDate]);

    let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    let hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    const jsConfetti = new JSConfetti();

    const OnClick = () => {
        jsConfetti.addConfetti({
            confettiColors: [
                '#660019', '#7a001f', '#800020', '#F8F0C6', '#FFFEF2', '#FFFDD1', '#F6E8B1'
            ],
        })
    }

return (
    <>
        <Names> Brandon & Katisha
            <Celebrate style={{ marginTop: '50px' }}> Walpole, MA | July 25th, 2024</Celebrate>
            <Box>
                <NumberBox onClick={OnClick}>
                    <Number>{days}</Number>
                    <Celebrate>Days</Celebrate>
                </NumberBox>
                <NumberBox onClick={OnClick}>
                    <Number>{hours}</Number>
                    <Celebrate>Hours</Celebrate>
                </NumberBox>
                <NumberBox onClick={OnClick}>
                    <Number>{minutes}</Number>
                    <Celebrate>Minutes</Celebrate>
                </NumberBox>
                <NumberBox onClick={OnClick}>
                    <Number>{seconds}</Number>
                    <Celebrate>Seconds</Celebrate>
                </NumberBox>
            </Box>
            <Celebrate>Until We Are #ForeverPhillips</Celebrate>
        </Names>
    </>
)
}