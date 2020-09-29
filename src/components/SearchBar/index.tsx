import React, {useEffect, useState} from 'react';

import searchIcon from '../../assets/img/search.svg'; 

import {ThemeProvider} from 'styled-components';
import {theme1} from '../../assets/style/globalstyle';
import {Content} from './styles';
import { useSearch } from '../../hooks/useSearch';

const SearchBar = () => {
    const { wordDefiner } = useSearch();
    const [searchProp, setSearchProps] = useState('');

    useEffect(()=>{
        wordDefiner(searchProp);
    })


    return(
    <ThemeProvider theme={theme1}>
        <Content>
            <img src={searchIcon} alt="icon"/>
            <input placeholder="Digite para procurar..." 
             onChange={(e) => setSearchProps(e.target.value)}>
             </input>
        </Content>
    </ThemeProvider>
    )
}

export default SearchBar;