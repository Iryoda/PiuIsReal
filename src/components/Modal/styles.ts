import styled from 'styled-components';
import React from 'react';
export const Fundo = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items: center;
`;

export const Content = styled.main`
    background: ${props => props.theme.background};
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
    padding: 1rem;
    height: 500px;
    width: 70%;

    span{
        font-size: 1.6rem;
    }

    span:nth-child(3){
        font-size: 1.2rem;
        color: black;
    }


    textarea{
        resize: none;
        text-decoration: none;
        border-radius: 20px;
        padding: 1rem;
        background: ${props => props.theme.box};
        border: none;
        outline: none;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
    }
    @media (min-width: 700px){
        width: 30%;
    }
`;