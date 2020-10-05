import styled, {keyframes} from 'styled-components'

interface ContentProps{
    Colored: boolean;
}


const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

export const Box = styled.div`
    background: ${props => props.theme.background};
    width: 30%;
    height: 140px;
    padding: 1rem;
    border-radius: 20px;

    span{
        font-size: 1.6rem;
    }
    div{
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
    }
`

export const Content = styled.div<ContentProps>`
    background: ${props => props.Colored ? props.theme.primary : props.theme.box };
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 40%;
    height: 60px;
    span{
        align-self: center;
        color: black;
        font-size: 1.6rem;
    }


`