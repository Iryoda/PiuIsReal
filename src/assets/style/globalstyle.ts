import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        font-size: 85%;
    }
    *{  
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100vh;
        font-family: Arial;
    }

    body{
        width: 100%;
        background: ${props => theme1.background};
    }

    ::-webkit-scrollbar {
        width: 10px;
        
    }

    ::-webkit-scrollbar-track {
    background: #d5d5d5;

    }

    ::-webkit-scrollbar-thumb {
     background: #fff;
}

`;

export const theme1 =
{
    primary: '#00D1FF',
    secondary: '#FF00C7',
    background: '#eee',
    box: '#fff', 

}

