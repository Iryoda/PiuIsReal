import styled from 'styled-components';


export const Container = styled.div`
    width: 70%;
    border-radius: 20px;
    background: ${props => props.theme.box};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-gap: 2rem;
    align-items: flex-start;
    padding: 1.5rem;

    p{
        align-self: center;
        font-size: 1.4rem;
        color: red;
    }
    span{
        font-size: 1.6rem;
        color: ${props => props.theme.primary};
    }

    button{
        border: 4px solid ${props => props.theme.primary};
        padding: 0.5rem 2rem;
        border-radius: 20px;
        align-self: center;
        margin-top: 2rem;
        outline: none;

        font-size: 1.6rem;
        font-family: Arial, Helvetica, sans-serif;
        color: ${props => props.theme.primary};

        background-image: linear-gradient(
            ${props => props.theme.secondary},
            ${props => props.theme.primary}
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
    }

    button:hover{
        opacity: 0.7;
    }
    img{
        justify-content: start;
        height: 40px;
    }

    @media (min-width: 700px)
    {
        grid-gap: 2rem;
        width: 40%;

        span{
            font-size: 1.8rem;
        }

        a{
            font-size: 1rem;
        }
        button{
            margin-top: 1rem;
        }
    }
`;

export const Dados = styled.div`
    background:
        linear-gradient(90deg,
        ${props => props.theme.primary}, 
        ${props => props.theme.secondary});
    padding: 0rem 0rem 0.3rem 0rem;
    width: 100%;
    margin-top: -2rem;

    input{
        background: ${props => props.theme.box}; 
        padding: 0rem 0.5rem; 
        width: 100%;
        height: 3rem;
        outline: none;
        border: none;
        font-size: 1.4rem;
        
    }

`;