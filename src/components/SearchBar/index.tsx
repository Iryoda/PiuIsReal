import React, {useState} from 'react';

import searchIcon from '../../assets/img/search.svg'; 

import styled, {ThemeProvider} from 'styled-components';
import {theme1} from '../../assets/style/globalstyle';


export const Content = styled.main`
    background: ${props=> props.theme.box};
    padding: 0.5rem 0rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;

    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
    position: sticky;
    position: -webkit-sticky; top: 2px;

    img{
        max-width: 26px;
        max-height: 26px;
    }

    input{
        background: ${props=> props.theme.background};
        border-radius: 20px;
        padding: 0.3rem 1rem;
        width: 90%;
        border: none;
        outline: none;
        font-size: 20px;
    }


`;

const SearchBar = () => {

    const[moving, OnScroll ] = useState(false);

    if(moving)
    {
        console.log("movendo");
    }

    return(
    <ThemeProvider theme={theme1}>
        <Content onScroll={() => OnScroll(!moving)}>
            <img src={searchIcon} alt="icon"/>
            <input placeholder="Digite para procurar..."></input>
        </Content>
    </ThemeProvider>
    )
}

export default SearchBar;