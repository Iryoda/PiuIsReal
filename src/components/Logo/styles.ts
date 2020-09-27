import styled from 'styled-components';

export const Borda = styled.div`
    box-sizing: border-box;
    border-top-right-radius: 21px;
    border-bottom-right-radius: 21px;
    padding: 0 0 0 0.4rem;
    height: auto;
    background: linear-gradient(
        ${props => props.theme.primary}, 
        ${props => props.theme.secondary});

    @media(min-width: 700px)
    {   
        border-radius: 20px;
        padding: 0.3rem;
    }
 `;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    
    img:hover{
        cursor: pointer;
    }
        
    img:nth-child(1){
            display: none;
        }

    img:nth-child(1):hover{
            cursor: default;
        }


    @media(min-width: 700px)
    {   
        img:nth-child(1){
            display: flex;
        }
    }
    
 `;

export const Content = styled.div`
    background: ${props => props.theme.box};
    box-sizing: border-box;
    padding: 1rem;
    font-size: 1.4rem;
    
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
 
    div span{
        display: flex;
        flex-flow: column;
        justify-content: space-between;    
        margin-top: 1rem;
    }

    div span:hover{
        cursor: pointer;
    }

    @media (min-width: 700px)
    {
        border-radius: 15px;
        font-size: 1.6rem;
    }
 `;
