import styled, { keyframes } from 'styled-components';

//Animations

const Flick = keyframes`
    0% {
        opacity: 0.2;
    }
    100%{
        opacity: 1;
    }

`;

// Styles
export const Box = styled.div`
    box-sizing: border-box;
    padding: 1rem;
    background: ${props=> props.theme.box};
    border-radius: 20px;
    overflow: hidden;
    min-width: 100%;
    margin-bottom: 1rem;
`;

export const Perfil = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 700px){
    } 
`;

export const Nametag = styled.div`
    background: ${ props => props.theme.backgroundDarker};
    box-sizing: border-box;
    border-radius: 20px;
    width: 80%;
    min-height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
    font-size: 1.4rem;
    animation: ${Flick} 1.5s linear infinite;

    @media (min-width: 700px){
        width: 88%;
        height: 80px;
        }
`;

export const Comentario = styled.div`
    overflow: hidden;
    border-radius: 20px;
    background-color: ${ props => props.theme.backgroundDarker};  
    margin-bottom: 1rem;
    margin-top: 2rem;
    min-height: 3rem;
    animation: ${Flick} 1.5s linear infinite;
    @media(min-width: 700px){
    }
`;

export const Interactions = styled.div`
    display: flex;
    justify-content: space-between;    

    div span{
        background-color: ${ props => props.theme.backgroundDarker};
    }

`;

export const ImgHolder = styled.div`
    background-color: ${ props => props.theme.backgroundDarker};
    width: 60px;
    height: 60px;
    border-radius: 100%;
    animation: ${Flick} 1.5s linear infinite;

    @media (min-width: 700px){
        width: 80px;
        height: 80px;
        border-radius: 100%;
    
    } 
`;

export const Holder = styled.div`
     background-color: ${ props => props.theme.backgroundDarker};
     width: 100%;
     height: 1.8rem;
     border-radius: 20px;
     animation: ${Flick} 1.5s linear infinite;
     @media(min-width: 700px){ 
        height: 2.1rem;
     }
`;
