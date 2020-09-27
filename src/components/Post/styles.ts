import styled from 'styled-components';
import {theme1} from '../../assets/style/globalstyle';


export const Box = styled.div`
    box-sizing: border-box;
    background: ${props=> theme1.box};
    padding: 1rem;
    border-radius: 20px;
    overflow: hidden;

`;

export const Perfil = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        max-width: 64px ;
        max-height: 64px;
        overflow: hidden;
        border-radius: 100%;
    }

    @media (min-width: 700px){
        img{
            max-width: 80px ;
            max-height: 80px;
        }
    } 
`;

export const Nametag = styled.div`
    background: #e5e5e5;
    border-radius: 20px;
    width: 80%;
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
    font-size: 1.4rem;

    span:nth-child(2){
        font-size: 1.2rem;
        /*background-image: linear-gradient(
            ${props=> theme1.primary},
            ${props=> theme1.secondary}
        );*/
        background-image: linear-gradient(#00d1ff,
        blue);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;         
    }

    @media (min-width: 700px){
        width: 88%;
        font-size: 1.6rem;
        height: 80px;
        span:nth-child(2){
            font-size: 1.4rem
        }
    } 
`;

export const Comentario = styled.div`
    text-align: justify;
    overflow: hidden;
    font-size: 1.4rem;
    text-overflow: clip;
    margin-bottom: 1rem;
    margin-top: 1rem;
    min-height: 3rem;

    @media(min-width: 700px){
        font-size: 1.6rem;
    }
`;