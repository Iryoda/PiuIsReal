import styled from 'styled-components';


export const Content = styled.main`
    background: ${props=> props.theme.box};
    padding: 0.5rem 0rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;

    max-height: 40px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    position: sticky;
    position: -webkit-sticky; top: 2px;

    img{
        opacity: 0.5;
        max-width: 26px;
        max-height: 26px;
    }

    input{
        border-radius: 20px;
        padding: 0.3rem 1rem;
        width: 90%;
        border: none;
        outline: none;
        font-size: 20px;
    }
    

`;