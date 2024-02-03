import React from "react";
import '../styles/index.css';
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const HeartLoader = () => (
    <Div>
        <div className="lds-heart"><div></div></div>
    </Div>
);