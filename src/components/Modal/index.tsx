import React from 'react';
import styled from 'styled-components';

import { ThemeProvider } from 'styled-components';
import { theme1 } from '../../assets/style/globalstyle';

export const Fundo = styled.div`
    background: rgb(0,0,1, 0.1);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items: center;
`;

export const Content = styled.main`
    background: ${props => theme1.background};
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding: 1rem;
    height: 500px;
    width: 30%;

    span{
        font-size: 1.6rem;
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

`;


const Modal = () => {

    return(
        <ThemeProvider theme= {theme1}>
            <Fundo>
                <Content>
                    <span>Comentário</span>
                    <textarea></textarea>
                    <img alt="button"/>
                </Content>
            </Fundo>
        </ThemeProvider>
    )
}

export default Modal;