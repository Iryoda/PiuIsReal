import styled, { keyframes} from 'styled-components';

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

export const Fundo = styled.div`
    position: fixed;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items: center;
    backdrop-filter: blur(4px);
    animation: ${FadeIn} 0.2s linear;
`;

export const Content = styled.main`
    background: ${props => props.theme.background};
    box-sizing: border-box;
    border-radius: 20px;
    
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0rem;

    padding: 1.5rem;
    height: 400px;
    width: 80%;
    min-width: 50%;

    

    div {
       display: flex;
       justify-content: space-between; 
       width: 100%;
    }

    span{
        font-size: 1.6rem;
    }

    span:nth-child(2):hover{
        cursor: pointer;
    }


    span:nth-child(4){
        justify-content:center;
        font-size: 1.2rem;
        color: red;
    }

    textarea{
        resize: none;
        text-decoration: none;
        border-radius: 20px;
        padding: 1.5rem;
        background: ${props => props.theme.box};
        border: none;
        outline: none;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.4rem;
    }

    button{
        justify-content: left;
        min-width: 40%;
        max-width: 40%;
    }
    @media (min-width: 700px){
        width: 40%;
        grid-gap: -2rem;
        height: 300px;
    }
`;

export const Cont = styled.div`
    background: ${props=> props.theme.box};
    border-radius: 20px;
    width: 100%;
    max-height: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    box-sizing: border-box;
    padding: 0.5rem;

    @media (min-width: 700px){

    }

`;

export const Counter = styled.span<CounterProps>`
    color: ${props => props.overLimit ? "red" : "black"};
    margin-top: 0.5rem;
    font-size: 1.2rem;

`


interface CounterProps{
    overLimit ?: boolean;
}