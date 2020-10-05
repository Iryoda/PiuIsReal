import styled from 'styled-components';



export const Box = styled.div`
    box-sizing: border-box;
    padding: 1rem;
    background: ${props=> props.theme.box};
    border-radius: 20px;
    overflow: hidden;
    min-width: 100%;

`;

export const Perfil = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 60px;
        height: 60px;
        border-radius: 100%;
        overflow: hidden;
    }

    @media (min-width: 700px){
        img{
            width: 80px;
            height: 80px;
            border-radius: 100%;
        }
    } 
`;

export const Nametag = styled.div`
    background: #e5e5e5;
    box-sizing: border-box;
    border-radius: 20px;
    width: 80%;
    min-height: 64px;
    max-height: px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
    font-size: 1.4rem;

    span:nth-child(2){
        font-size: 1rem;
        background-image: linear-gradient(#00d1ff, blue);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;         
    }
    span:nth-child(3){
        font-size: 1rem;
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
    margin-top: 2rem;
    min-height: 3rem;

    @media(min-width: 700px){
        font-size: 1.6rem;
    }
`;

export const Interactions = styled.div`
    display: flex;
    padding: 0rem 0.5rem;
    justify-content: space-between;    

    img{
        height: 1.8rem;
    }

    img:hover{
        cursor: pointer;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
     
    }
    div span{
        margin-left: 2rem;
    }

    @media(min-width: 700px){
        img{
            height: 2.1rem;
        }
        
    }

`